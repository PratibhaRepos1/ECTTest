import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  productArr = [
    {
      sno: 3,
      name: 'mobile',
      price: 77000,
      availablity: 'Available',
      date: '04/01/2021'
    },
    {
      sno: 5,
      name: 'mobile',
      price: 35000,
      availablity: 'Available',
      date: '04/01/2021'
    },
    {
      sno: 1,
      name: 'Watch',
      price: 57000,
      availablity: 'Not Available',
      date: '11/03/2021'
    },
    {
      sno: 4,
      name: 'laptop',
      price: 45000,
      availablity: 'Available',
      date: '30/10/2021'
    },
    {
      sno: 2,
      name: 'tablet',
      price: 7000,
      availablity: 'Available',
      date: '01/03/2021'
    }
  ];

  productArr1 = [

    {
      name: 'a',
      price: 1
    },
    {
      name: 'a',
      price: 0
    },
    {
      name: 'a',
      price: 5
    },
    {
      name: 'b',
      price: 12
    },

  ]

}
