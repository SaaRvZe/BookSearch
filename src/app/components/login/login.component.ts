import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import { Subject, takeUntil} from "rxjs";
import {UsernameValidator} from "../../validators/username.validators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit, OnDestroy {
  userNameControl = new FormControl('', {validators: [Validators.required, UsernameValidator.cannotContainSpace]})
  private _destroy$ = new Subject<null>();
  constructor( private authService: AuthService, private router: Router) { }

  ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();

  }

  ngOnInit(): void {
    this.authService._currentUserName.pipe(takeUntil(this._destroy$)).subscribe(u => {
      if (!!u)
        this.router.navigate(['book-search']);
    })
  }

  login(): void {
    if(this.userNameControl.valid) {
      let username = this.userNameControl.value;
      if (!!username)
        this.authService.login(username);
    }
  }

}
