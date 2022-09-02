import {Component, Input, OnInit} from '@angular/core';
import {BookItem} from "../../model/book-item";
import {MatDialog} from "@angular/material/dialog";
import {BookItemDialogComponent} from "../book-item-dialog/book-item-dialog.component";
import {BookService} from "../../services/book.service";

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  @Input() bookItem: BookItem;
  isFavorite = false;
  constructor(public dialog: MatDialog, private bookService: BookService) { }

  ngOnInit(): void {
    this.isFavorite = this.bookService.isFavorite(this.bookItem.id);
  }

  setFavorites(isFavorite: boolean) {
    this.bookService.setFavorite(this.bookItem, isFavorite);
    this.isFavorite = isFavorite;
  }
  openDialog() {
    const dialogRef = this.dialog.open(BookItemDialogComponent, {
      data: this.bookItem,
    });
  }





}
