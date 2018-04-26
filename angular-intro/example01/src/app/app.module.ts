import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AtmServiceService } from './services/atm-service.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [AtmServiceService],
  bootstrap: [AppComponent]
})

export class AppModule { }
