import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookItemComponent } from './book-item.component';
import {MatButtonModule} from "@angular/material/button";
import {BookItemDialogModule} from "../book-item-dialog/book-item-dialog.module";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";



@NgModule({
  declarations: [
    BookItemComponent,
  ],
  exports: [
    BookItemComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    BookItemDialogModule,
    MatIconModule,
    MatTooltipModule,
  ]
})
export class BookItemModule { }
