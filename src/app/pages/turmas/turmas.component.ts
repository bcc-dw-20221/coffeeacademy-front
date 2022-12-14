import { Component } from '@angular/core';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.css']
})
export class TurmasComponent {

  public headerProps = {
    title: "Turmas",
    showTitle: true,
    showInfoProfile: true,
  }

  ngOnInit(): void {
  }
}
