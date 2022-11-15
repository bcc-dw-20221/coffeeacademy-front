import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { AcademicCalendarComponent } from './pages/academic-calendar/academic-calendar.component';
import { HomeComponent } from './pages/home/home.component';
import { JobsVacancyComponent } from './pages/jobs-vacancy/jobs-vacancy.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'vagas-de-emprego', component: JobsVacancyComponent},
  { path: 'calendario-academico', component: AcademicCalendarComponent},
  { path: 'horario', component: ScheduleComponent},
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
