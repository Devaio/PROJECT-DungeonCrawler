import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Api } from './api';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class Users {
  _user: any;
  constructor(public http: Http, public api: Api, public storage: Storage) {

    this._checkStorage()
      .then((uid)=>{
        console.log('From storage', uid)
        if(uid){
          this.query(null, uid)
            .subscribe((res)=>{
              this._loggedIn(res);
            })
        }
      })

  }

  query(params?: any, uid?: string) {
    
    return this.api.get('/api/users/' + uid, params)
      // .map(resp => resp.json());
  }

  login(accountInfo: any) {
    let seq = this.api.post('/auth/login', accountInfo);
    seq
      .map(res => res.json())
      .subscribe(res => {
        console.log('LOGIN RESP', res);
        this._loggedIn(res);
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
        this._loggedIn(res);
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
    this.storage.remove('_spoop')
  }

  _checkStorage() {
    return this.storage.get('_spoop')
      // .then((uid)=>{

      // });
  }

  /**
   * Process a login/signup response to store user data
   */
  _loggedIn(resp) {
    console.log('RESPON', resp);
    this._user = resp;
    this.storage.set('_spoop', resp._id).then(function(data){
      console.log('Done storing!', data)
    })
  }

}
