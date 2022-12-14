import { Component } from '@angular/core';

@Component({
  selector: 'app-home-professor',
  templateUrl: './home-professor.component.html',
  styleUrls: ['./home-professor.component.css']
})
export class HomeProfessorComponent {

  public headerProps = {
    showTitle: false,
    showInfoProfile: true,
  }

  ngOnInit(): void {
  }
}
