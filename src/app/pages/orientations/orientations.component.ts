import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orientations',
  templateUrl: './orientations.component.html',
  styleUrls: ['./orientations.component.css']
})
export class OrientationsComponent implements OnInit {

  constructor() { }

  public headerProps = {
    title: "Minhas Orientações",
    showTitle: true,
  }

  ngOnInit(): void {
  }

}
