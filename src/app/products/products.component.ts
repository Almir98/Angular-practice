import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  data: any[] = [
    {
      "id":1,
      "image":"../../assets/images/test.png",
      "name":"Almir",
      "last":"Tihak",
      "salary":10,
      "age":18,
    },
    {
      "id":2,
      "image":"../../assets/images/test.png",
      "name":"Test",
      "last":"Test",
      "salary":20,
      "age":99,
    },
    {
      "id":3,
      "image":"../../assets/images/test.png",
      "name":"Kemal",
      "last":"Lutvica",
      "salary":30,
      "age":30,
    },
  ];

  constructor() { }
  
  ngOnInit() {
    console.log(this.data);
  }

  showDialog()
  {
    console.log("da");

  }



}
