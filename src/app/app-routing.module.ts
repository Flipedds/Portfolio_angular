import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "./components/main-page/main-page.component";
import {SobreMimComponent} from "./components/sobre-mim/sobre-mim.component";
import {SkillsComponent} from "./components/skills/skills.component";
import {ProjetosComponent} from "./components/projetos/projetos.component";



const routes:Routes = [
  {path:'', component: MainPageComponent},
  {path: 'sobremim', component: SobreMimComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'projetos', component: ProjetosComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  })

export class AppRoutingModule{

}
