 import { NgModule } from '@angular/core';
 import {MatDialogModule, MatButtonModule,
        MatCheckboxModule, MatToolbarModule,
        MatMenuModule, MatIconModule, MatFormFieldModule,
        MatInputModule} from '@angular/material';

const mariosMaterialModules = [
  MatButtonModule, MatCheckboxModule, MatIconModule, MatFormFieldModule,
  MatToolbarModule, MatInputModule
];

 @NgModule({
  imports: [...mariosMaterialModules],
  exports: [...mariosMaterialModules]
})

export class MaterialModule { }
