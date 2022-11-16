import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.css']
})
export class ReportCardComponent implements OnInit {

  constructor() { }

  public headerProps = {
    title: "Boletim",
    showTitle: true,
  }

  ngOnInit(): void {
  }

}
