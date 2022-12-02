import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor() { }

  public headerProps = {
    title: "Horário Individual",
    showTitle: true,
    showInfoProfile: true,
  }

  ngOnInit(): void {
  }

}
