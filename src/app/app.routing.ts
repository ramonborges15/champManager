import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { ClubComponent } from './club/club.component';
import { HomeComponent } from './home/home.component';
import { EditClubComponent } from './club/edit-club/edit-club.component';

const APP_ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'clubs', component: ClubComponent},
    {path: 'clubs/edit', component: EditClubComponent}
];

export const routing : ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);