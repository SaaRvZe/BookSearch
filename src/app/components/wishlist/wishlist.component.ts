import { Component, OnInit } from '@angular/core';
import {BookItem} from "../../model/book-item";
import {BookService} from "../../services/book.service";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  favorites: { [p: string]: BookItem } = {};
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.favorites = this.bookService.favorites;
  }

}
