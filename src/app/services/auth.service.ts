import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {usernameLS} from "../constants/constants";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  _currentUserName = new BehaviorSubject<string>('');

  constructor(private router: Router,) {
    let currUsername = localStorage.getItem(usernameLS);
    if (!!currUsername)
      this._currentUserName.next(currUsername);
  }

  get currentUserName(): BehaviorSubject<string> {
    return this._currentUserName;
  }

  login(username: string) {
    localStorage.setItem(usernameLS, username);
    this.currentUserName.next(username);
    this.router.navigate(['./book-search']);
  }

  logout() {
    localStorage.removeItem(usernameLS);
    this.currentUserName.next('');
    this.router.navigate(['./login']);
  }

}
