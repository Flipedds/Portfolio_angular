import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import {AppRoutingModule} from "./app-routing.module";
import { FooterComponent } from './components/footer/footer.component';
import { SobreMimComponent } from './components/sobre-mim/sobre-mim.component';
import { SkillsComponent } from './components/skills/skills.component';
import {NgOptimizedImage} from "@angular/common";
import { ProjetosComponent } from './components/projetos/projetos.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import {HttpClientModule} from "@angular/common/http";
import { FormComponent } from './components/form/form.component';
import {FormsModule} from "@angular/forms";
import { AdminComponent } from './components/admin/admin.component';
import { PrivadoComponent } from './components/privado/privado.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    FooterComponent,
    SobreMimComponent,
    SkillsComponent,
    ProjetosComponent,
    ErrorPageComponent,
    FormComponent,
    AdminComponent,
    PrivadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
