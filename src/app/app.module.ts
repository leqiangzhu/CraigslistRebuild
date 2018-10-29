import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RantAndRaveComponent } from './rant-and-rave/rant-and-rave.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RantAndRaveComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
