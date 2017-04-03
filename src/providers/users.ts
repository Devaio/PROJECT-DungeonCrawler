import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Api } from './api';
// import {User} from '../models/user';


@Injectable()
export class Users {

  constructor(public http: Http, public api: Api) {
  }

  query(params?: any) {
    var char = localStorage.getItem('_char'); // Character should be saved in local storage
    var uid = localStorage.getItem('_spoop'); // User ID
    console.log(char)
    return this.api.get('/api/chars/user/' + uid, params)
      // .map(resp => resp.json());
  }



}
