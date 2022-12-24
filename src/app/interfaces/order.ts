import { CartLine } from "./cart-line";
import { ShippingInfo } from "./shipping-info"

export class Order {
  sub_total_price:number;
  shipping: number;
  total_price:number;
  user_id: string;
  order_date: string;
  order_details: CartLine [];
  shipping_info: ShippingInfo;

  constructor(sub_total_price:number,shipping:number,total_price:number,user_id:string,
    order_date:string,order_details:CartLine[],shipping_info:any){

        this.shipping_info=shipping_info;
        this.shipping=shipping;
        this.sub_total_price=sub_total_price;
        this.order_date=order_date;
        this.total_price=total_price;
        this.user_id=user_id;
        this.order_details=order_details;

  }



}
