import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyServicesService {

  readonly BaseURI = environment.apiUrl;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  // formModel = this.fb.group({
  //   serviceName: ['', Validators.required],
  //   description: ['', Validators.required],
  //   avalable: ['', Validators.required],
  //   promotion: ['', Validators.required],
  //   type:['', Validators.required],
  //   prix:['', Validators.required],
  //   image:['', Validators.required],
  //   video:['', Validators.required],
    

  // });


}
