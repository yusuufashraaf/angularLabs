import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Main } from './main/main';
import { AboutMe } from './about-me/about-me';
import { Profile } from './profile/profile';
import { Skills } from './skills/skills';
import { footer } from './footer/footer';

export const routes: Routes = [
  { path: '', component: Main },          
  { path: 'main', component: Main },
  { path: 'about', component: AboutMe },
  { path: 'portfolio', component: Profile },
  { path: 'skills', component: Skills },
  { path: 'contact', component: footer },
  { path: '**', redirectTo: '' },         
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
