import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { HelloComponent } from './components/hello/hello.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'app';

  constructor( public dialog: MatDialog) {
  }

  openTheDialog() {
    const dialogRef = this.dialog.open(HelloComponent, {
    width: '550px',
    data: { name : 'Belize Bank'}
    });
    dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed', result);
    });
    }

}
