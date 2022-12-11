import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() buttonConfigs: any;
  @Input() title: any;
  @Input() type: any;

  constructor() { }

  ngOnInit(): void {
  }

}
