import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComOneComponent } from './components/com-one/com-one.component';
import { ComTwoComponent } from './components/com-two/com-two.component';

@NgModule({
  declarations: [
    AppComponent,
    ComOneComponent,
    ComTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
