import { Component } from '@angular/core';

@Component({
  selector: 'app-card-job',
  templateUrl: './card-job.component.html',
  styleUrls: ['./card-job.component.css']
})
export class CardJobComponent {

  primaryMin = {
    title: 'Ver Mais',
    styles: {
      backgroundColor: '#199558',
      color: '#FFFFFF',
      height: '64px',
      width: '210px',
      borderRadius: '4px'
    }
  };
}
