import { logging } from 'protractor';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'repeater',
  templateUrl: './repeater.component.html',
  styleUrls: ['./repeater.component.css']
})
export class RepeaterComponent implements OnInit {

  constructor() { }
  @Input() option: any;

  ngOnInit(): void {
    //console.log(this.option);
  }

}
