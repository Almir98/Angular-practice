import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IInformation } from '../_interfaces/IInformation';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Idummy } from '../_interfaces/Idummy';

@Injectable({
  providedIn: 'root'
})

export class InformationService {

url = environment.baseUrl;

constructor(private http: HttpClient) { }


getAll(): any
{
  return this.http.get(this.url);
}



}
