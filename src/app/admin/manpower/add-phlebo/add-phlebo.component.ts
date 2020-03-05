import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-add-phlebo',
  templateUrl: './add-phlebo.component.html',
  styleUrls: ['./add-phlebo.component.scss']
})
export class AddPhleboComponent implements OnInit {
  AddPhleboForm: FormGroup;
  fileData: File = null;
  previewUrl: any = null;
  imageUrl: any=null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.imageUrl='../../../images/m-i.jpg';
    this.AddPhleboForm = this.formBuilder.group({
      employeetype: ['', [Validators.required]],
      employeeid: ['', [Validators.required]],
      phleboname: ['', [Validators.required]],
      doj: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      droppointid: ['', [Validators.required]],
      helpdeskid: ['', [Validators.required]],
      prefrence1: ['', [Validators.required]],
      prefrence2: ['', [Validators.required]],
      prefrence3: ['', [Validators.required]],
      trainerID: ['', [Validators.required]],
      clino: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      pincode: ['', [Validators.required]],
      address: ['', [Validators.required]],
      geoaddress: ['', [Validators.required]]
    });
  }
  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
  }

  preview() {
    // Show preview 
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('files', this.fileData);

    this.fileUploadProgress = '0%';

    this.http.post('https://us-central1-tutorial-e6ea7.cloudfunctions.net/fileUpload', formData, {
      reportProgress: true,
      observe: 'events'
    })
      .subscribe(events => {
        if (events.type === HttpEventType.UploadProgress) {
          this.fileUploadProgress = Math.round(events.loaded / events.total * 100) + '%';
          console.log(this.fileUploadProgress);
        } else if (events.type === HttpEventType.Response) {
          this.fileUploadProgress = '';
          console.log(events.body);
          alert('SUCCESS !!');
        }

      })
  }

}
