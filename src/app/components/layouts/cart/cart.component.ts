import { Component } from '@angular/core';
import { Cart } from 'src/app/interfaces/cart';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  
  cart= new Cart(this.storageService.getCartLines());

  constructor(private storageService: StorageService) {
  
  }


  getTotal(): number {
    return this.cart.getTotal()
  }
  getSubTotal(): number {
    return this.cart.getSubTotal()
  }
  getShipping(): number {
   return this.cart.getShipping()
  }
}
