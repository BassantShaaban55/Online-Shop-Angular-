import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cart } from 'src/app/interfaces/cart';
import { Order } from 'src/app/interfaces/order';
import { AuthService } from 'src/app/services/auth.service';
import { CheckoutService } from 'src/app/services/checkout.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {

  cart= new Cart(this.storageService.getCartLines());
  error: string = '';
  token: string ='';
  countries=["Egypt","USA","Algeria"]
  country='';

  constructor(private storageService: StorageService,
    private authService:AuthService,private router:Router, 
    private checkOutService:CheckoutService) {
  
  }


  checkOutForm = new FormGroup(
    {
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,Validators.email]),
      address1: new FormControl('', [Validators.required]),
      address2: new FormControl('', [Validators.required]),
      mobile_number: new FormControl('', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{11}$"),Validators.maxLength(11)]),
      country: new FormControl('',[Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      zip_code: new FormControl('', [Validators.required]),
    }
  );

  get c() {
    return this.checkOutForm.controls;
  }

  public checkout() {

    if (this.checkOutForm.valid) {

      this.error = '';
      this.token=this.authService.getToken()
      let shipping= this.getShipping()
      let total = this.getTotal()
      let subTotal=this.getSubTotal()
      let order_date="2022-01-01";
      let user_id="6346ac23bb862e01fe4b6535";
      
      let shipping_info=this.checkOutForm.value

      console.log("Country: ",this.country)
      console.log("Shipping info: ",this.checkOutForm.value.country)
    

      let order:Order = new Order(subTotal,shipping,total,user_id,order_date,this.cart.cartLines, shipping_info);

      console.log("Order: ",order)
      
      this.checkOutService.addOrder(order,this.token).subscribe({
        next: (data: any) => {
          alert("Order Placed Successfully")
          console.log(data);
        },
        error: (error: any) => {
          this.error = error?.error;
        },
        complete: () => {
          console.log('complete');
        },
      });
    }
  }


  getTotal(): number {
    return this.cart.getTotal();
  }
  getSubTotal(): number {
    return this.cart.getSubTotal();
  }
  getShipping(): number {
    return this.cart.getShipping()
  }
}
