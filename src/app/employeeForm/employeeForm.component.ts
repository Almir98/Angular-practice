import { Component, OnInit } from '@angular/core';
import { PassThrough } from 'stream';
import { Employee } from '../_models/Employee';
import { AlertifyService } from '../_services/alertify.service';
import { InformationService } from '../_services/information.service';

@Component({
  selector: 'app-employeeForm',
  templateUrl: './employeeForm.component.html',
  styleUrls: ['./employeeForm.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private informationService: InformationService,private alertify: AlertifyService) { }

  ngOnInit() {
  }

  addEmployee()
  {
    this.informationService.insert(this.employee).subscribe((obj: Employee)=>{

      this.employee=obj;
      console.log(this.employee);
    },error =>{

      this.alertify.error("Something went wrong");
    })
    

  }

}
