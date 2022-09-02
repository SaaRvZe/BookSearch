import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookItemDialogComponent} from "./book-item-dialog.component";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";



@NgModule({
  declarations: [
    BookItemDialogComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class BookItemDialogModule { }
