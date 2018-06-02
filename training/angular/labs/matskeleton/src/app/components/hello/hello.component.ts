import { Component, OnInit } from '@angular/core';
import { Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<HelloComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    data.age = 18;
    }

  ngOnInit() {
  }

  closeIt() {
    this.dialogRef.close();
    }

}
