import { Product } from './product';

export class CartLine {
  product: Product;
  product_id:string='';
  quantity:number=1;
  price: number;

  constructor (product:Product){
    this.product = product;
    this.quantity = 1;
    this.price = product.price;
    this.product_id=product._id
  }

  get total() {
    return this.price * this.quantity;
  }


  increaseQuantity(q:number) {
    this.quantity += q;
  }

  decreaseQuantity(q:number) {
    if (this.quantity > q) this.quantity -= q;
  }

}
