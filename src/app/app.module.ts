// Primero importaciones propias de JS/Angular.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Después librerías de terceros.
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module'

// Por último nuestro código.
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
