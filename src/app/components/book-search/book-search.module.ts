import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookSearchRoutingModule } from './book-search-routing.module';
import {BookSearchComponent} from "./book-search.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {BookItemModule} from "../book-item/book-item.module";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    BookSearchComponent
  ],
  imports: [
    CommonModule,
    BookSearchRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatPaginatorModule,
    BookItemModule,
    MatProgressSpinnerModule,
  ]
})
export class BookSearchModule { }
