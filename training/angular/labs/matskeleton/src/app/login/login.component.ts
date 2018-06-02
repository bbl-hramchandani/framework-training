import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public hide = true;

  constructor(private route: Router) {

    this.loginForm = new FormGroup({
      userName : new FormControl('',Validators.required),
      password : new FormControl('',Validators.required)
});
   }

  ngOnInit() { }

  authenticate() {
    console.log('yes, we did it', this.loginForm.get('userName').value);
  }

}
