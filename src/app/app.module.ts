import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { PodeCardComponent } from './pode-card/pode-card.component';
import { PokeCardComponent } from './poke-card/poke-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeListComponent,
    PodeCardComponent,
    PokeCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
