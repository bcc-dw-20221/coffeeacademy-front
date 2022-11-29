import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { ButtonComponent } from './components/button/button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { AcademicCalendarComponent } from './pages/academic-calendar/academic-calendar.component';
import { HomeComponent } from './pages/home/home.component';
import { JobsVacancyComponent } from './pages/jobs-vacancy/jobs-vacancy.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { ReportCardComponent } from './pages/report-card/report-card.component';
import { AcademicDiaryComponent } from './pages/academic-diary/academic-diary.component';
import { OrientationsComponent } from './pages/orientations/orientations.component';
import { TitleLoginComponent } from './components/title-login/title-login.component';
import { ModalProfileComponent } from './components/modal-profile/modal-profile.component';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent,
    ButtonComponent,
    HeaderComponent,
    AcademicCalendarComponent,
    HomeComponent,
    JobsVacancyComponent,
    ScheduleComponent,
    ReportCardComponent,
    AcademicDiaryComponent,
    OrientationsComponent,
    TitleLoginComponent,
    ModalProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatFormFieldModule, 
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatMenuModule
  ],
  exports: [
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
