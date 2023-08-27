import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DogsComponent } from './components/dogs/dogs.component';
import { BadComponent } from './pages/bad/bad.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'dogs',
    component: DogsComponent
  },
  {
    path:'**',
    component: BadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CenterRoutingModule { }
