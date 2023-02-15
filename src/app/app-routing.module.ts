import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [

  {path: '' , component:HomeComponent}, 
  {path: 'AboutMe' , component: AboutMeComponent},
  {path: 'MySkills' , component: SkillsComponent},
  {path: 'Projects' , component: ProjectsComponent},
  {path: 'Contacts' , component: ContactsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
