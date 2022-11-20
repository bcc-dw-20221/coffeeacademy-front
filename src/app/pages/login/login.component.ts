import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message = '';

  form!: FormGroup;

  titleLogin = {
    title: this.activatedRoute.snapshot.url.toString() === 'aluno' ? 'Aluno(a)' : this.activatedRoute.snapshot.url.toString() === 'professor' ? 'Professor(a)' : this.activatedRoute.snapshot.url.toString() === 'pais-de-aluno' ? 'Pais de aluno(a)' : this.activatedRoute.snapshot.url.toString() === 'egresso' ? "Egresso" : this.activatedRoute.snapshot.url.toString() === 'coordenador' ? "Coordenador(a)" : this.activatedRoute.snapshot.url.toString() === 'coordenador-de-estagio' ? "Coordenador(a) de Estágio" : this.activatedRoute.snapshot.url.toString() === 'gestor' ? "Gestor(a)" : ""
  }


  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      matricula: '',
      senha: ''
    });
  }

  // linkIsActive(): string {
  //   this.titleForm

  //   return this.titleForm;
  // }
  hide = false;

  submit(): void {
    this.http.post('http://localhost:8000/aluno/login', this.form.getRawValue(), { withCredentials: true })
      .subscribe(
        () => {
          this.router.navigate(['/']);
        }
      );
  }

  onClick(): void {

  }

  // Configurações do formulário

  // Configurações do botão
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

  // primaryMin = {
  //   title: 'Salvar',
  //   styles: {
  //     backgroundColor: '#199558',
  //     color: '#FFFFFF',
  //     height: '64px',
  //     width: '210px',
  //     borderRadius: '4px'
  //   }
  // };

  // primaryMinRounded = {
  //   title: 'Sobre nós',
  //   styles: {
  //     backgroundColor: '#199558',
  //     color: '#FFFFFF',
  //     height: '64px',
  //     width: '210px',
  //     borderRadius: '50px'
  //   }
  // };

  // secondary = {
  //   title: 'Secondary',
  //   styles: {
  //     backgroundColor: '#FFFFFF',
  //     color: '#199558',
  //     height: '70px',
  //     width: '393px',
  //     borderRadius: '4px',
  //     border: '2px solid #73BA97',
  //   }
  // };

  // secondaryMin = {
  //   title: 'Cancelar',
  //   styles: {
  //     backgroundColor: '#FFFFFF',
  //     color: '#199558',
  //     height: '64px',
  //     width: '210px',
  //     borderRadius: '4px',
  //     border: '2px solid #73BA97',
  //   }
  // };

  // secondaryMinRounded = {
  //   title: 'Login',
  //   styles: {
  //     backgroundColor: '#FFFFFF',
  //     color: '#199558',
  //     height: '64px',
  //     width: '210px',
  //     borderRadius: '50px',
  //     border: '2px solid #73BA97',
  //   }
  // };

}
