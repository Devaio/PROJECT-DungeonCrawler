import { Component } from '@angular/core';

import { NavController, ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Users } from '../../providers/users';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  rAccount: {email: string, password: string} = {
    email: '',
    password: ''
  };
  lAccount: {email: string, password: string} = {
    email: '',
    password: ''
  };

  constructor(public navCtrl: NavController, public users : Users, public toastCtrl : ToastController) {
    if(localStorage.getItem('_spoop')){
      this.navCtrl.setRoot(TabsPage, {}, {
        animate : false
      })
    }
  }

  startApp() {
    this.navCtrl.setRoot(TabsPage, {}, {
      animate: true,
      direction: 'forward'
    });
  }

  doLogin() {
    this.users.login(this.lAccount).subscribe((resp) => {
      // this.navCtrl.push(MainPage);
      this.startApp();
    }, (err) => {
      // this.navCtrl.push(MainPage);
      // // Unable to log in
      let toast = this.toastCtrl.create({
        message: 'Login Failed',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
  doRegister() {
    this.users.signup(this.rAccount).subscribe((resp) => {
      // this.navCtrl.push(MainPage);
      this.startApp();
    }, (err) => {
      // this.navCtrl.push(MainPage);
      // // Unable to log in
      let toast = this.toastCtrl.create({
        message: 'Signup Failed',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }

}