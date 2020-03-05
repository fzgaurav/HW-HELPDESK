import { Component, OnInit } from '@angular/core';
import { DistrictService } from 'src/app/Service/district.service';
import { circle } from 'src/app/Modals/circle';
import { StateService } from 'src/app/Service/state.service';
import { state } from 'src/app/Modals/state';
import { CircleService } from 'src/app/Service/circle.service';
import { district } from 'src/app/Modals/district';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddDistrictService } from 'src/app/Service/add-district.service';

@Component({
  selector: 'app-add-district',
  templateUrl: './add-district.component.html',
  styleUrls: ['./add-district.component.scss']
})
export class AddDistrictComponent implements OnInit {
  circleObjs: circle[];
  stateObjs: state[];
  districtObjs: district[];
  districtObj: district;
  itemQuantity = []; 
  AddRouteForm:FormGroup;
  constructor(private _district: DistrictService,
    private _state: StateService,
    private _circle: CircleService,
    private toastr: ToastrService,
    private formBuilder:FormBuilder 
  ) { 
    this.itemQuantity = Array(100).fill(0).map((x,i)=>i+1); 
  }

  ngOnInit() {
    this.loadCircle();
    this.AddRouteForm = this.formBuilder.group({
      CircleId: ['', [Validators.required]],
      state_s_id: ['', [Validators.required]],
      city_id: ['', [Validators.required]],
      defaultRoute: ['', Validators.required]
    });
  }
  errorsmsg(msg) {
    this.toastr.error(msg, 'Login');
  }
  loadCircle() {
    //debugger;
    this._circle.GetCircle()
      .subscribe(respons => {
        this.circleObjs = respons;
      },
        error => {
          console.log("Error (GetData) :: " + error);
          this.errorsmsg(error.msg);
        }

      );
  }
  onCicleChangeEvent(ev) {
    if (ev.value != 'undefined') {
      this.loadState(ev.value);
    }
    else {
      this.errorsmsg("Select Circle !!");
    }
  }
  onStateChangeEvent(ev) {
    if (ev.value != undefined) {
      this.loadDistrict(ev.value);
    }
    else {
      this.errorsmsg("Select State !!");
    }

  }

  loadState(circleID) {
    this._state.GetStateByCirleID(circleID)
      .subscribe(respons => {
        this.stateObjs = respons;
      },
        error => {
          console.log("Error (GetData) :: " + error);
          this.errorsmsg(error.msg);
        }
      );
  }

  loadDistrict(stateID) {
    this._district.GetDistrictStateWise(stateID)
      .subscribe(respons => {
        this.districtObjs = respons;
      },
        error => { console.log("Error (GetData) :: " + error); this.errorsmsg(error.msg); }
      );
  }
  OnClickAddDistrict() {
    var data=this.AddRouteForm.value;
    const districtData={
      city_id:data.city_id,
      city_name:"",
      city_s_name:"",
      state_s_id:data.state_s_id,
      IsActive:true,
      status_info1:1,
      CircleId:data.CircleId,
      defaultRoute:data.defaultRoute
    }
    console.log(districtData);
    this._district.InsertDistrict(districtData).subscribe(
      respons => {
        this.toastr.success('Saved Successfully');
      },
      error => {
        console.log("Error (GetData) :: " + error)
        this.toastr.error(error.statusText);
      }
    );
  }
}
