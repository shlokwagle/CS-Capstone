import { Component, OnInit } from '@angular/core';
import { MessengerService} from '../../../services/messenger.service';
import {Product} from '../../../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
  //  {id: 1, productId: 1, productName: 'test 1', qty: 4, price: 100},
  //  {id: 2, productId: 2, productName: 'test 2', qty: 2, price: 50},
  //  {id: 3, productId: 3, productName: 'test 3', qty: 5, price: 120},
  //  {id: 4, productId: 4, productName: 'test 4', qty: 6, price: 150},
  ];
  cartTotal = 0;
  constructor(private msg: MessengerService) { }

  ngOnInit(): void {

    this.msg.getMsg().subscribe((product: Product) =>
    {
      this.addProductToCart(product);
    });
  }

  addProductToCart(product: Product){

    let productExists = false;

    for (const i in this.cartItems) {
      if (this.cartItems[i].productId === product.id) {
        this.cartItems[i].qty++;
        productExists = true;
        break;
      }
    }
    if (!productExists) {
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        qty: 1,
        price: product.price
      });
    }

    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price);
    });
  }
}
