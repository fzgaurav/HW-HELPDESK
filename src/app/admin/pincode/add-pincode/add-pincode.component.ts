import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DistrictService } from 'src/app/Service/district.service';
import { PincodeService } from 'src/app/Service/pincode.service';
import { district } from 'src/app/Modals/district';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-pincode',
  templateUrl: './add-pincode.component.html',
  styleUrls: ['./add-pincode.component.scss']
})
export class AddPincodeComponent implements OnInit {
  districtObjs:district[];
  AddPincodeForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
              private toster:ToastrService,
              private _district:DistrictService,
              private _pincode:PincodeService ) { }

  ngOnInit() {
    this.loadDistrict();
    this.AddPincodeForm=this.formBuilder.group({
      city_id:['',[Validators.required]],
      pincode:['',[Validators.required],[Validators.maxLength(6)]]
    });
  }
  loadDistrict(){
    debugger;
    this._district.GetAllActiveDistrict()
    .subscribe(respons => {
      console.log(respons);
      debugger;
      this.districtObjs = respons;
    },
    error => {
        console.log("Error (GetData) :: " + error);
        this.toster.error(error.msg);
    }

    );
  }
  OnClickAddPincode(){
    var data=this.AddPincodeForm.value;
    const pincodeData={
      pincode:data.pincode,
      cityName:"",
      city_id:data.city_id,
      isActive:1
    }
    this._pincode.InsertPincode(pincodeData).subscribe(
      data=>{
        this.toster.success(data.responseMsg);
      },
      error=>{
        this.toster.error(error.msg);
      }
    );
  }

}
