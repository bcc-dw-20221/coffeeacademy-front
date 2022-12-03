import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }

  primaryMin = {
    title: 'Sim',
    styles: {
      backgroundColor: '#199558',
      color: '#FFFFFF',
      height: '48px',
      width: '130px',
      borderRadius: '4px',
      hover: {
        backgroundColor: '#FFFFFF',
        color: '#199558',
        border: '2px solid #73BA97',
      }
    }
  };

  secondaryMin = {
    title: 'Não',
    styles: {
      backgroundColor: '#FFFFFF',
      color: '#199558',
      height: '48px',
      width: '130px',
      borderRadius: '4px',
      border: '2px solid #73BA97',
      hover: {
        backgroundColor: '#199558',
        color: '#FFFFFF',
        border: 'none'
      }
    }
  };


  ngOnInit(): void {
  }

}
