import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { AcademicCalendarComponent } from './pages/academic-calendar/academic-calendar.component';
import { HomeComponent } from './pages/home/home.component';
import { JobsVacancyComponent } from './pages/jobs-vacancy/jobs-vacancy.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { ReportCardComponent } from './pages/report-card/report-card.component';
import { AcademicDiaryComponent } from './pages/academic-diary/academic-diary.component';
import { OrientationsComponent } from './pages/orientations/orientations.component';
import { ModalComponent } from './components/modal/modal.component';
import { SplascreenComponent } from './pages/splascreen/splascreen.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

const routes: Routes = [
  { path: '', component: SplascreenComponent},
  { path: 'aluno', component: LoginComponent },
  { path: 'professor', component: LoginComponent },
  { path: 'pais-de-aluno', component: LoginComponent },
  { path: 'egresso', component: LoginComponent },
  { path: 'coordenador', component: LoginComponent },
  { path: 'coordenador-de-estagio', component: LoginComponent },
  { path: 'gestor', component: LoginComponent },
  { path: 'home', component: HomeComponent},
  { path: 'vagas-de-emprego', component: JobsVacancyComponent},
  { path: 'calendario-academico', component: AcademicCalendarComponent},
  { path: 'horario', component: ScheduleComponent},
  { path: 'boletim', component: ReportCardComponent},
  { path: 'meus-diarios', component: AcademicDiaryComponent},
  { path: 'minhas-orientacoes', component: OrientationsComponent},
  { path: 'sobre', component: AboutComponent},
  { path: 'cadastro', component: CadastroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
