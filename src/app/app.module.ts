import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/pages/navbar/navbar.component';
import { FooterComponent } from './footer/components/footer/footer.component';
import { CenterModule } from './center/center.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CenterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
