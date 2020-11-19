import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/_models/Employee';
import { InformationService } from 'src/app/_services/information.service';

@Component({
  selector: 'app-productEdit',
  templateUrl: './productEdit.component.html',
  styleUrls: ['./productEdit.component.scss']
})
export class ProductEditComponent implements OnInit {

  employee : Employee;


  constructor(private infoService : InformationService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.loadInfo();
  }

  loadInfo()
  {
    this.infoService.getById(+ this.route.snapshot.params['id']).subscribe((info: Employee) =>{

      this.employee = info.data as Employee;
      
    })
  }

  editEmployee()
  {
    console.log(this.employee); 
    
    this.infoService.update(this.employee.id,this.employee).subscribe((emp : Employee) =>{
      
      this.employee = emp as Employee;
    })
  }

}
