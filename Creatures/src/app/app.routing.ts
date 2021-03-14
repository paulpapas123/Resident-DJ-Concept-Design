import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about';
import { HomeComponent } from './home';
import { ResidentsComponent } from './residents';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'residents', component: ResidentsComponent },
    { path: 'about', component: AboutComponent},
    

    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);