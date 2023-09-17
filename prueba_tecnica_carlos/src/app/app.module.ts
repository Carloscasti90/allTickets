import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarimaComponent } from './components/tarima/tarima.component';
import { ZonaVIPComponent } from './components/zona-vip/zona-vip.component';
import { ZonaGeneralComponent } from './components/zona-general/zona-general.component';
import { ZonaPalcosComponent } from './components/zona-palcos/zona-palcos.component';

@NgModule({
  declarations: [
    AppComponent,
    TarimaComponent,
    ZonaVIPComponent,
    ZonaGeneralComponent,
    ZonaPalcosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
