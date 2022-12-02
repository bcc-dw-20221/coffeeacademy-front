import { Component, Input, OnInit } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() public title: any;
  @Input() public showTitle: any;
  @Input() public showInfoProfile: any;

  constructor() { }

  ngOnInit(): void {
  }

}
