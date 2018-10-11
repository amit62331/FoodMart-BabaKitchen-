import { Order } from './../model/order';
import { OrderService } from './../services/order.service';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCart } from './../model/shooping-cart';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit {
  @Input('cart') cart:ShoppingCart;
  shipping={};
  userId: string;
  userSubscription: Subscription;

  constructor(
    private router: Router,
    private authService: AuthService,
    private orderService: OrderService) { }

  async ngOnInit(){
    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid); 
  }

  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }

  async placeOrder(){ 
    let order = new Order(this.userId, this.shipping, this.cart);
    let result = await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success',result.key]); 
  }

}
