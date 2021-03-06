import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AtmServiceService } from './services/atm-service.service';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { AtmoperationsComponent } from './components/atmoperations/atmoperations.component';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';
import { componentFactoryName } from '@angular/compiler';
import { MainopComponent } from './components/mainop/mainop.component';

const myRoutes: Routes = [

    { path : 'auth' , component : AuthenticateComponent },
    { path : '' , redirectTo : '/auth', pathMatch : 'full' },
    { path : 'mainoperation' , component : MainopComponent},

    { path : 'transactionlist' , component : TransactionListComponent, outlet : 'insideatm' },

    { path : 'operations' , component : AtmoperationsComponent, outlet : 'insideatm' }

];

@NgModule({
  declarations: [
    AppComponent,
    TransactionListComponent,
    AtmoperationsComponent,
    AuthenticateComponent,
    MainopComponent
  ],
  imports: [
    BrowserModule  ,
    HttpClientModule,
    RouterModule.forRoot(myRoutes),
    ReactiveFormsModule
  ],
  providers: [AtmServiceService],
  bootstrap: [AppComponent]
})

export class AppModule { }
