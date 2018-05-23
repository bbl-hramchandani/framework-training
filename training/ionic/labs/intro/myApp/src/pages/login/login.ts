import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { AtmserviceProvider } from '../../providers/atmservice/atmservice';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  myForm: FormGroup;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public atmService: AtmserviceProvider,
              public loadCtrl: LoadingController,
              public toastCtrl: ToastController,
              public alertCtrl : AlertController) {

    this.myForm = new FormGroup({
      accountNumber : new FormControl('', Validators.required),
      pinNumber : new FormControl('', Validators.required)
    });


  }

  doLogin() {

    let accountNumber = this.myForm.get("accountNumber").value;
    let pinNumber = this.myForm.get("pinNumber").value;

    let loader = this.loadCtrl.create({
      content: 'Authenticating...'
    })
    loader.present();

    this.atmService.setAccountNumber(accountNumber, pinNumber).then (

      (succ) => {

        loader.dismiss();

        let myAlert = this.alertCtrl.create({
          title: 'ATM Project',
          subTitle: 'It worked',
          buttons: ['Ok']
        });
    
        myAlert.present();

      },
      
      (err) => {
        loader.dismiss();
        let toast = this.toastCtrl.create({message:'Invalid credentials', duration:3000});
        toast.present();
      }

    );

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
