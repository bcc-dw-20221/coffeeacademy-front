import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academic-diary',
  templateUrl: './academic-diary.component.html',
  styleUrls: ['./academic-diary.component.css']
})
export class AcademicDiaryComponent implements OnInit {

  constructor() { }

  public headerProps = {
    title: "Meus Diários",
    showTitle: true,
    showInfoProfile: true,
  }

  ngOnInit(): void {
  }

}
