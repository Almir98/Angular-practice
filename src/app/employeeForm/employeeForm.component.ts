import { Component, OnInit } from '@angular/core';
import { Employee } from '../_models/Employee';
import { InformationService } from '../_services/information.service';

@Component({
  selector: 'app-employeeForm',
  templateUrl: './employeeForm.component.html',
  styleUrls: ['./employeeForm.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private informationService: InformationService) { }

  ngOnInit() {
  }

  addEmployee()
  {
    console.log(this.employee);
    
    // this.informationService.insert((obj: Employee) =>{
      
    //    this.employee=obj; 
    //  })

  }

}
