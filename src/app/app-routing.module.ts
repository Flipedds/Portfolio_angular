import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "./components/main-page/main-page.component";
import {SobreMimComponent} from "./components/sobre-mim/sobre-mim.component";
import {SkillsComponent} from "./components/skills/skills.component";
import {ProjetosComponent} from "./components/projetos/projetos.component";
import {ErrorPageComponent} from "./components/error-page/error-page.component";
import {FormComponent} from "./components/form/form.component";
import {AdminComponent} from "./components/admin/admin.component";



const routes:Routes = [
  {path:'', component: MainPageComponent},
  {path: 'sobremim', component: SobreMimComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'projetos', component: ProjetosComponent},
  {path: 'form', component: FormComponent},
  {path: 'admin', component: AdminComponent},
  {path: '**', component: ErrorPageComponent}

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  })

export class AppRoutingModule{

}
