import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishlistRoutingModule } from './wishlist-routing.module';
import {WishlistComponent} from "./wishlist.component";
import {BookItemModule} from "../book-item/book-item.module";


@NgModule({
  declarations: [
    WishlistComponent
  ],
  imports: [
    CommonModule,
    WishlistRoutingModule,
    BookItemModule
  ]
})
export class WishlistModule { }
