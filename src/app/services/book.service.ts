import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, of, tap} from "rxjs";
import {BookItem, BookSearchResult} from "../model/book-item";
import {environment} from "../../environments/environment";
import {favoriteBooksLS, historyLS, pageSize} from "../constants/constants";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private _favoriteBooks: {[id: string]: BookItem} = {};
  constructor(private http: HttpClient) {
    let favorites = localStorage.getItem(favoriteBooksLS);
    if (!!favorites) {
      this._favoriteBooks = JSON.parse(favorites);
    } else {
      this._setFavoritesToLS()
    }
  }

  search(search: string = '', page: number = 0, itemsPerPage: number = pageSize): Observable<BookSearchResult> {
    let history = this.getHistory(search, page, itemsPerPage);
    if(history) {
      return of(history);
    }

    let maxResults = `maxResults=${pageSize}`;
    let startIndex = `startIndex=${page * itemsPerPage}`
    let fields = `fields=totalItems,items(id,volumeInfo/title,volumeInfo/subtitle,volumeInfo/description, volumeInfo/imageLinks,volumeInfo/pageCount)`
    return this.http.get<BookSearchResult>
    (`${environment.googleBooksHost}?q=+intitle:${search}&${maxResults}&${startIndex}&${fields}`)
      .pipe(map(result => {
        let bookResult = new BookSearchResult();
        bookResult.totalItems = result.totalItems;
        bookResult.items = result.items?.map((item: any) => {
          return new BookItem({
            id: item.id,
            title: item.volumeInfo.title,
            subtitle: item.volumeInfo.subtitle,
            description: item.volumeInfo.description,
            imageLinks: item.volumeInfo.imageLinks,
            pageCount: item.volumeInfo.pageCount
          });
        })
        return bookResult;
      }), tap(result => {
        this.saveHistory(result, search, page, itemsPerPage);
      }));
  }

  get favorites() {
    return this._favoriteBooks;
  }

  setFavorite(book: BookItem, isFavorite: boolean) {

    if (!book.id) {
      console.error('No id provided', book);
      return;
    }

    if (isFavorite){
      this._favoriteBooks[book.id] = book;
    } else {
      delete this._favoriteBooks[book.id];
    }

    this._setFavoritesToLS();
  }

  isFavorite(bookId: string) {
    return !!this._favoriteBooks[bookId];
  }

  private _setFavoritesToLS() {
    localStorage.setItem(favoriteBooksLS, JSON.stringify(this._favoriteBooks));
  }

  saveHistory(result: BookSearchResult, search: string, page: number, itemsPerPage: number) {
    let history = JSON.parse(localStorage.getItem(historyLS) ?? '{}');
    history[`${search}${page}${itemsPerPage}`] = result;
    localStorage.setItem(historyLS, JSON.stringify(history));
  }

  getHistory(search: string, page: number, itemsPerPage: number) {
    let history = JSON.parse(localStorage.getItem(historyLS) ?? '{}');
    return history[`${search}${page}${itemsPerPage}`]
  }
}
