import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Api } from './api';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class Users {
  _user: any;
  constructor(public http: Http, public api: Api) {
  }

  query(params?: any) {
    var char = localStorage.getItem('_char'); // Character should be saved in local storage
    var uid = localStorage.getItem('_spoop'); // User ID
    console.log(char)
    return this.api.get('/api/chars/user/' + uid, params)
    // .map(resp => resp.json());
  }

  login(accountInfo: any) {
    let seq = this.api.post('/auth/login', accountInfo);
    console.log('LOGIN', seq);
    seq
      .map(res => res.json())
      .subscribe(res => {
        console.log('LOGIN RESP', res);
        // If the API returned a successful response, mark the user as logged in
        if (res.status == 'success') {
          this._loggedIn(res);
        } else {
        }
      }, err => {
        console.error('ERROR', err);
      });

    return seq;
  }

  /**
   * Send a POST request to our signup endpoint with the data
   * the user entered on the form.
   */
  signup(accountInfo: any) {
    let seq = this.api.post('/api/users', accountInfo);

    seq
      .map(res => res.json())
      .subscribe(res => {
        // If the API returned a successful response, mark the user as logged in
        if (res.status == 'success') {
          this._loggedIn(res);
        }
      }, err => {
        console.error('ERROR', err);
      });

    return seq;
  }

  /**
   * Log the user out, which forgets the session
   */
  logout() {
    this._user = null;
  }

  /**
   * Process a login/signup response to store user data
   */
  _loggedIn(resp) {
    console.log('RESPON', resp);
    this._user = resp;
    localStorage.setItem('_spoop', resp._id);
  }

}
