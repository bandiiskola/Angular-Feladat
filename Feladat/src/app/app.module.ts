import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjektlistaComponent } from './projektlista/projektlista.component';
import { FeladatlistaComponent } from './feladatlista/feladatlista.component';
import { FeladatfelvitelComponent } from './feladatfelvitel/feladatfelvitel.component';
import { ProjektfelvitelComponent } from './projektfelvitel/projektfelvitel.component';
import { FooldalComponent } from './fooldal/fooldal.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjektlistaComponent,
    FeladatlistaComponent,
    FeladatfelvitelComponent,
    ProjektfelvitelComponent,
    FooldalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
