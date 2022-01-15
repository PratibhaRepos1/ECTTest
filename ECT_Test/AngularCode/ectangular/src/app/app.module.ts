import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomSortPipe } from './pipes/custom-sort.pipe';
import { ShowComponent } from './show/show.component';
import { RepeaterComponent } from './repeater/repeater.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomSortPipe,
    ShowComponent,
    RepeaterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
