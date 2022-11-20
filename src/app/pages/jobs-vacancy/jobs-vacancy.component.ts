import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs-vacancy',
  templateUrl: './jobs-vacancy.component.html',
  styleUrls: ['./jobs-vacancy.component.css']
})
export class JobsVacancyComponent implements OnInit {

  constructor() { }

  public headerProps = {
    title: "Vagas de Emprego/Estágio",
    showTitle: true,
  }

  ngOnInit(): void {
  }

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
