import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { SayLightComponent } from './components/say-light/say-light.component';
import { SayBoldComponent } from './components/say-bold/say-bold.component';

const appRoutes: Routes = [
  {path: 'sayLight', component: SayLightComponent},
  {path: 'sayBold/:paramvalue', component: SayBoldComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    SayLightComponent,
    SayBoldComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
