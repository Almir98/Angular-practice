import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WelcomeComponent } from '../welcome/welcome.component';
import { Idummy } from '../_interfaces/Idummy';
import { IInformation } from '../_interfaces/IInformation';
import { InformationService } from '../_services/information.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  animal: string;
  name: string;
  
  filteredData: IInformation[];
  podaci: Idummy[] = [];
  listsFilter: string;
  imageStatus = false;
  filter: string;

  constructor(private informationService: InformationService, public dialog: MatDialog)
  {
  }
 
  ngOnInit(): void
  {
    this.loadAll();
  }

  loadAll(): any
  {
     this.informationService.getAll().subscribe(local => {
      this.podaci = local.data as Idummy[];
    });
  }

  showHide(): void
  {
    this.imageStatus = !this.imageStatus;
  }

  showDialog(): void
  {
    const dialogRef = this.dialog.open(WelcomeComponent);


    console.log('da');

    

  }
}
