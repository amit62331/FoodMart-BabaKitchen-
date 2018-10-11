import { Observable } from 'rxjs/Observable';
import { ShoppingCartService } from './../services/shopping-cart.service';
import { AppUser } from './../model/app-user';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { auth } from 'firebase';
import { ShoppingCart } from '../model/shooping-cart';
@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  appUser: AppUser;
  cart$: Observable<ShoppingCart>
  constructor(
    private auth : AuthService ,
    private shoppingCartService: ShoppingCartService) {
    
   }

  async ngOnInit(){
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser); 

    this.cart$ = await this.shoppingCartService.getCart();
    
 }
  logOut(){
    this.auth.logOut();
  }

}
