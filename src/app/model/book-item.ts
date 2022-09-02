export class BookSearchResult {
  items: BookItem[];
  totalItems: number;
}

export class BookItem {
  id: string;
  title: string;
  subtitle: string;
  pageCount: number;
  imageLinks: {thumbnail: string, smallThumbnail: string}
  description: string;

  constructor(book: BookItem) {
    this.id = book.id;
    this.title = book.title;
    this.subtitle = book.subtitle;
    this.pageCount = book.pageCount;
    this.imageLinks = book.imageLinks;
    this.description = book.description;
  }
}
