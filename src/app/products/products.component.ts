import { Component, OnInit } from '@angular/core';
import { IInformation } from '../_interfaces/IInformation';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  listsFilter: string;

  get listFilter(): string
  {                                   // getter and setter
    return this.listFilter;
  }
  set listFilter(value: string)
  {
    this.listFilter = value;
    this.filteredData = this.filter ? this.performFilter(this.filter) : this.data;
  }


  constructor() {
    this.filteredData = this.data;
  }

  imageStatus = false;
  filter: string;

  data: IInformation[] = [
    {
      id: 1,
      image: '../../assets/images/test.png',
      name: 'Almir',
      last: 'Tihak',
      salary: 10,
      age: 18,
    },
    {
      id: 2,
      image: '../../assets/images/test.png',
      name: 'Test',
      last: 'Test',
      salary: 20,
      age: 99,
    },
    {
      id: 3,
      image: '../../assets/images/test.png',
      name: 'Kemal',
      last: 'Lutvica',
      salary: 30,
      age: 30,
    },
  ];


  filteredData: IInformation[];

  performFilter(filterby: string): any
  {
    filterby = filterby.toLocaleLowerCase();
    return this.data.filter((prod: IInformation) => prod.name.toLocaleLowerCase().indexOf(filterby) !== -1);
  }

  ngOnInit(): void
  {
    console.log(this.filteredData);
  }

  showHide(): void
  {
    this.imageStatus = !this.imageStatus;
  }

  showDialog(): void
  {
    console.log('da');

  }



}
