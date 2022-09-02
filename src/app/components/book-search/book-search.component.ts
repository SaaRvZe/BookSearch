import { Component, OnInit } from '@angular/core';
import {BookService} from "../../services/book.service";
import {BehaviorSubject, Observable} from "rxjs";
import {FormControl} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {BookSearchResult} from "../../model/book-item";
import {PageEvent} from "@angular/material/paginator";
import {pageSize} from "../../constants/constants";
import {animate, query, stagger, style, transition, trigger} from "@angular/animations";

const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(':enter',
      [style({ opacity: 0 }), stagger('60ms', animate('600ms ease-out', style({ opacity: 1 })))],
      { optional: true }
    ),
    query(':leave',
      animate('200ms', style({ opacity: 0 })),
      { optional: true}
    )
  ])
]);


@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss'],
  animations: [listAnimation]
})
export class BookSearchComponent implements OnInit {
  search$: Observable<BookSearchResult>;
  searchControl = new FormControl('');
  currentUsername$: BehaviorSubject<string>;
  // Paginator options
  pageSize = pageSize
  pageIndex = 0;

  constructor(private bookService: BookService, private authService: AuthService) {
    this.currentUsername$ = authService.currentUserName;
  }

  ngOnInit(): void {
    this.search();
  }

  search(page: number = 0) {
    this.search$ = this.bookService.search(this.searchControl.value, page, this.pageSize);
  }

  handlePageEvent(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.search(event.pageIndex);
  }

}
