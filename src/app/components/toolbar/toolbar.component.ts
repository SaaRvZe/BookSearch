import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  links = [
    {route: 'book-search', activeClass: 'active-link', text: 'Search'},
    {route: 'wishlist', activeClass: 'active-link', text: 'Wishlist'},
  ];

  currentUsername$: BehaviorSubject<string>;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.currentUsername$ = this.authService.currentUserName;
  }

  logout() {
    this.authService.logout();
  }

}
