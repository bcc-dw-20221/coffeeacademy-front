import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  @Input() formConfigs: any;

  constructor() { }

  primaryMax = {
    title: 'ENTRAR',
    styles: {
      backgroundColor: 'rgba(25, 149, 88, 1)',
      color: '#FFFFFF',
      height: '70px',
      width: '393px',
      borderRadius: '4px',
    }
  };

  hide = false;

  ngOnInit(): void {
  }

}
