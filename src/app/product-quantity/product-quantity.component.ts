import { ShoppingCartService } from './../services/shopping-cart.service';
import { Product } from './../model/product';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent  {

  @Input('product') product:Product;
  @Input('shopping-cart') shoppingCart;

  constructor(private cartServices: ShoppingCartService) { }

  addToCart(){
   this.cartServices.addToCart(this.product); 
  }

  removeFromCart(){
    this.cartServices.removeFromCart(this.product);
  }
 
  

}
