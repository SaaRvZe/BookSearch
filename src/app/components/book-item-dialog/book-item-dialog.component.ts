import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {BookItem} from "../../model/book-item";
import {BookService} from "../../services/book.service";

@Component({
  selector: 'app-book-item-dialog',
  templateUrl: './book-item-dialog.component.html',
  styleUrls: ['./book-item-dialog.component.scss']
})
export class BookItemDialogComponent implements OnInit {
  isFavorite: boolean;
  constructor(public dialogRef: MatDialogRef<BookItemDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: BookItem,
              private bookService: BookService) {
  }

  ngOnInit(): void {
    this.isFavorite = this.bookService.isFavorite(this.data.id);
  }

  setFavorites(isFavorite: boolean) {
    this.bookService.setFavorite(this.data, isFavorite);
    this.isFavorite = isFavorite;
  }
}
