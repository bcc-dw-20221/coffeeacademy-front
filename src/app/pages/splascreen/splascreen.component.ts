import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splascreen',
  templateUrl: './splascreen.component.html',
  styleUrls: ['./splascreen.component.css']
})
export class SplascreenComponent implements OnInit {

  constructor() { }

  public headerProps = {
    showTitle: false,
    showInfoProfile: false,
  }

    primaryMinRounded = {
    title: 'Sobre nós',
    styles: {
      backgroundColor: '#199558',
      color: '#FFFFFF',
      height: '64px',
      width: '170px',
      borderRadius: '50px'
    }
  };

    secondaryMinRounded = {
    title: 'Login',
    styles: {
      backgroundColor: '#FFFFFF',
      color: '#199558',
      height: '64px',
      width: '170px',
      borderRadius: '50px',
      border: '2px solid #73BA97',
    }
  };

  ngOnInit(): void {
  }

}
