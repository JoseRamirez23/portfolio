import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PastWorkComponent } from './past-work/past-work.component';
import { SwitchService } from './switch.service';

@NgModule({
  declarations: [
    AppComponent,
    PastWorkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SwitchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
