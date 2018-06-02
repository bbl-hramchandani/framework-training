import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './app.material';
import { RoutingModule } from './router.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HelloComponent } from './components/hello/hello.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    RoutingModule,
    FlexLayoutModule
  ],
  entryComponents: [HelloComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
