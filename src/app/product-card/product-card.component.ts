import { ShoppingCart } from './../model/shooping-cart';
import { Product } from './../model/product';
import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input('product') product:Product;
  @Input('show-actions') showActions ='true';
  @Input('shopping-cart') shoppingCart : ShoppingCart;

  constructor(private cartServices: ShoppingCartService) { }

  addToCart(){
   this.cartServices.addToCart(this.product); 
  }

  
}
