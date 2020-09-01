import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JokePageComponent } from './joke-page/joke-page.component';
import { JokeDetailsComponent } from './joke-details/joke-details.component';


const routes: Routes = [
  {
    path: '', pathMatch: 'prefix', redirectTo: 'joke'
  },
  {
    path: 'joke', component: JokePageComponent,
  },
  {
    path: 'joke-detail/:id', component: JokeDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
