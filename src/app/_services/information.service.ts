import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IInformation } from '../_interfaces/IInformation';

@Injectable({
  providedIn: 'root'
})

export class InformationService {

constructor() { }


getAll(): Observable<IInformation[]>
{
  return null;
}



}
