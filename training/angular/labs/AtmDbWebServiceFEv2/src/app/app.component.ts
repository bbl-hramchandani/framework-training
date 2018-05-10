import { Component } from '@angular/core';
import { AtmServiceService } from './services/atm-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 

export class AppComponent {

  title            = 'ATM Db Web Service FE v2';
  
  constructor(public atmService : AtmServiceService) { }

  public isPanelVisible() {
    return this.atmService.accountValid;
  }

}
