
import { Registrations } from './../data/Registrations';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data/data.service';
@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  registration: Registrations = {
    name: 'karim',
    notifications : true,
    alerts: true,
    gender: 'male',
    subscriptionType: 'null',
    notes: 'null'
  }
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log('onSubmit',form.valid)
    this.dataService.postRegistrationform(this.registration).subscribe(
      result => console.log('succes', result),
      error => console.log('error', error)
    )
  }
}
