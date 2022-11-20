import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-login',
  templateUrl: './title-login.component.html',
  styleUrls: ['./title-login.component.css']
})
export class TitleLoginComponent implements OnInit {

  @Input() titleForm: any;

  constructor() { }

  ngOnInit(): void {
  }

}
