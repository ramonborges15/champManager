import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClubComponent } from './club/club.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { EditClubComponent } from './club/edit-club/edit-club.component';

@NgModule({
  declarations: [
    AppComponent,
    ClubComponent,
    HomeComponent,
    EditClubComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
