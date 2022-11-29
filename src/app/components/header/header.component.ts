import { Component, Input, OnInit } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() public title: any;
  @Input() public show: any;

  constructor() { }

  ngOnInit(): void {
  }

}
