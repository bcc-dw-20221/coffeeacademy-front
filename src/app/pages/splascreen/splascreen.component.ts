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

  ngOnInit(): void {
  }

}
