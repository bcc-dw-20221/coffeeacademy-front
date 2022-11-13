import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor() { }

  primaryMax = {
    title: 'ENTRAR',
    styles: {
      backgroundColor: '#199558',
      color: '#FFFFFF',
      height: '70px',
      width: '393px',
      borderRadius: '4px'
    }
  };

  primaryMin = {
    title: 'Salvar',
    styles: {
      backgroundColor: '#199558',
      color: '#FFFFFF',
      height: '64px',
      width: '210px',
      borderRadius: '4px'
    }
  };

  primaryMinRounded = {
    title: 'Sobre nós',
    styles: {
      backgroundColor: '#199558',
      color: '#FFFFFF',
      height: '64px',
      width: '210px',
      borderRadius: '50px'
    }
  };

  secondary = {
    title: 'Secondary',
    styles: {
      backgroundColor: '#FFFFFF',
      color: '#199558',
      height: '70px',
      width: '393px',
      borderRadius: '4px',
      border: '2px solid #73BA97',
    }
  };

  secondaryMin = {
    title: 'Cancelar',
    styles: {
      backgroundColor: '#FFFFFF',
      color: '#199558',
      height: '64px',
      width: '210px',
      borderRadius: '4px',
      border: '2px solid #73BA97',
    }
  };

  secondaryMinRounded = {
    title: 'Login',
    styles: {
      backgroundColor: '#FFFFFF',
      color: '#199558',
      height: '64px',
      width: '210px',
      borderRadius: '50px',
      border: '2px solid #73BA97',
    }
  };

}
