import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PowerComponent } from './power/power.component';
import { PowerLevelComponent } from './power/power-level/power-level.component';

@NgModule({
  declarations: [
    AppComponent,
    PowerComponent,
    PowerLevelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
