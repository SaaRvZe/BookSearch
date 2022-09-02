import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import {RouterModule} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";



@NgModule({
    declarations: [
        ToolbarComponent
    ],
    exports: [
        ToolbarComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class ToolbarModule { }
