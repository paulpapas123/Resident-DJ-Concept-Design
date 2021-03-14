import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { ResidentsComponent } from './residents';


@NgModule({
    imports: [
        BrowserModule,
        appRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        ResidentsComponent,
        
        
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };