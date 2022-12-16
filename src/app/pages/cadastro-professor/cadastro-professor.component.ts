import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-professor',
  templateUrl: './cadastro-professor.component.html',
  styleUrls: ['./cadastro-professor.component.css']
})
export class CadastroProfessorComponent {
  public headerProps = {
    title: "Cadastrar Professor",
    showTitle: true,
    showInfoProfile: true,
  }

  primaryInput = {
    styles: {
      width: '443px',
    }
  }

  secondaryInput = {
    styles: {
      width: '162px',
    }
  }
  
  tertiaryInput = {
    styles: {
      width: '85px',
    }
  }

    primaryMinButton = {
    styles: {
      backgroundColor: '#199558',
      color: '#FFFFFF',
      height: '64px',
      width: '210px',
      borderRadius: '4px'
    }
  };

   secondaryMinButton = {
    styles: {
      backgroundColor: '#FFFFFF',
      color: '#199558',
      height: '64px',
      width: '210px',
      borderRadius: '4px',
      border: '3px solid #73BA97',
      marginRight: '20px',
    }
  };
}
