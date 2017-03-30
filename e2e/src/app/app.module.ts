import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//импортируем классы
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbotroneComponent } from './components/jumbotrone/jumbotrone.component';
import { HomeComponent} from './components/pages/home.component';
import { AboutComponent } from './components/pages/about.component';
import { routing } from './app.routing';

@NgModule({
  //декларируем
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotroneComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]//объявим начальный компонент
})
export class AppModule { }
