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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    FooterComponent,
    SobreMimComponent,
    SkillsComponent,
    ProjetosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
