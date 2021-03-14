import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { ResidentsComponent } from './residents';



@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent,
        HomeComponent,
        ResidentsComponent,
        AboutComponent],
    bootstrap: [AppComponent]
})
export class AppModule { };