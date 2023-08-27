import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { CenterRoutingModule } from './center-routing.module';
import { HomeComponent } from './components/home/home.component';
import { DogsComponent } from './components/dogs/dogs.component';
import { BadComponent } from './pages/bad/bad.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    DogsComponent,
    BadComponent
  ],
  imports: [
    CommonModule,
    CenterRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class CenterModule { }
