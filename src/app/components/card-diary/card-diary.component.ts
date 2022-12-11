import { Component } from '@angular/core';

@Component({
  selector: 'app-card-diary',
  templateUrl: './card-diary.component.html',
  styleUrls: ['./card-diary.component.css']
})
export class CardDiaryComponent {
  primaryMin = {
    title: 'Ver Mais',
    styles: {
      backgroundColor: '#199558',
      color: '#FFFFFF',
      height: '48px',
      width: '100px',
      borderRadius: '4px',
      marginLeft: '16px',
    }
  };
}
