import { Component } from '@angular/core';

@Component({
  selector: 'app-card-orientation',
  templateUrl: './card-orientation.component.html',
  styleUrls: ['./card-orientation.component.css']
})
export class CardOrientationComponent {

  primaryMin = {
    styles: {
      backgroundColor: '#199558',
      color: '#FFFFFF',
      height: '64px',
      width: '210px',
      borderRadius: '4px'
    }
  };
}
