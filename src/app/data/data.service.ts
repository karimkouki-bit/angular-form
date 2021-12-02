import { Registrations } from './Registrations';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  postRegistrationform(register : Registrations){
    return of(register);
  }
}
