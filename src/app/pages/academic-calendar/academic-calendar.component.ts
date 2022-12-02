import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academic-calendar',
  templateUrl: './academic-calendar.component.html',
  styleUrls: ['./academic-calendar.component.css']
})
export class AcademicCalendarComponent implements OnInit {

  constructor() { }

  public headerProps = {
    title: "Calendário Acadêmico",
    showTitle: true,
    showInfoProfile: true,
  }


  ngOnInit(): void {
  }

}
