import { Component, OnInit } from '@angular/core';
import { ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/_models/Employee';
import { InformationService } from 'src/app/_services/information.service';

@Component({
  selector: 'app-productDetail',
  templateUrl: './productDetail.component.html',
  styleUrls: ['./productDetail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  employee: Employee;

  constructor(private informationService: InformationService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.employeeDetails();
  }

  employeeDetails()
  {
    this.informationService.getById(+ this.route.snapshot.params['id']).subscribe((emp: Employee) =>{
      this.employee = emp as Employee;

      console.log(this.employee);
    })
  }



}
