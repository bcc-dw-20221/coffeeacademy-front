import { Component } from '@angular/core';

@Component({
  selector: 'app-home-gestor',
  templateUrl: './home-gestor.component.html',
  styleUrls: ['./home-gestor.component.css']
})
export class HomeGestorComponent {

  public headerProps = {
    showTitle: false,
    showInfoProfile: true,
  }

  ngOnInit(): void {
  }
}
