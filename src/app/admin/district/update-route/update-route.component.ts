import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { district } from 'src/app/Modals/district';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DistrictService } from 'src/app/Service/district.service';

@Component({
  selector: 'app-update-route',
  templateUrl: './update-route.component.html',
  styleUrls: ['./update-route.component.scss']
 
})
export class UpdateRouteComponent implements OnInit {
  insertOrUpdateObj:district;
  btnSubmitText: string;
  insertOrUpdateFormObj: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private _district: DistrictService,
    private dialogRef: MatDialogRef<UpdateRouteComponent>,
    @Inject(MAT_DIALOG_DATA) data: district) {

    this.insertOrUpdateObj = data;
  }
  ngOnInit() {
    debugger;
    this.btnSubmitText = "Update";
    this.insertOrUpdateFormObj = this.formBuilder.group({
      city_id: ['0'],
      city_name: [''],
      defaultRoute: ['', [Validators.required]],
     
    });
    if (this.insertOrUpdateObj.city_id > 0) {
      debugger;
      this.btnSubmitText = "Update";
      //alert(this.insertOrUpdateObj.city_id);
      this.insertOrUpdateFormObj.controls['city_id'].setValue(this.insertOrUpdateObj.city_id);
      this.insertOrUpdateFormObj.controls['city_name'].setValue(this.insertOrUpdateObj.city_name);
      this.insertOrUpdateFormObj.controls['defaultRoute'].setValue(this.insertOrUpdateObj.defaultRoute);
    
    }
  }
  onClickInsertOrUpdate() {
    this.InsertOrUpdateEntity(this.insertOrUpdateFormObj.value);
  }

  InsertOrUpdateEntity(entityObj: district) {
   debugger;
    if (entityObj.city_id > 0) {
      const defaultData={
        city_id:entityObj.city_id,
        city_name:entityObj.city_name,
        city_s_name:"",
        state_s_id:0,
        IsActive:true,
        status_info1:0,
        CircleId:0,
        defaultRoute:entityObj.defaultRoute
      }
      this._district.UpdateDefaultRoute(defaultData)
        .subscribe(respons => {
            this.toastr.success('Update Successfully');
            this.dialogRef.close(true);
        },
          error => {
            console.log("Error (GetData) :: " + error)
            this.toastr.error(error.statusText);
          }
        );
    }
    else {

    }
  }
  close() {
    this.dialogRef.close(false);
  }
}
