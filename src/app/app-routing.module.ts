import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./auth.guard";
import {AuthService} from "./services/auth.service";

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'book-search',
    loadChildren: () => import('./components/book-search/book-search.module').then(m => m.BookSearchModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },
  {
    path: 'wishlist',
    loadChildren: () => import('./components/wishlist/wishlist.module').then(m => m.WishlistModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },

  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, AuthService]
})
export class AppRoutingModule { }
