import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IInformation } from '../_interfaces/IInformation';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Employee } from '../_models/Employee';

@Injectable({
  providedIn: 'root'
})

export class InformationService {

geturl = environment.baseUrl;
postUrl= environment.postUrl;
Idurl = environment.getId;
puturl=environment.put;

constructor(private http: HttpClient) { }

getAll(): any
{
  return this.http.get(this.geturl);
}

getById(id: number)
{
  return this.http.get(this.Idurl+id);
}

insert(obj: Employee): any
{
  return this.http.post(this.postUrl,obj);
}

update(id: number, employee: Employee)
{
  return this.http.put(this.puturl,employee);
}

}
