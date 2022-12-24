import { CartLine } from './cart-line';

export class Cart {
  cartLines: CartLine[]=[];

  constructor(cartLines:CartLine[]) {
    this.cartLines = cartLines;
  }

  getTotal() : number{
    return this.getShipping() + this.getSubTotal();
  }

  getSubTotal(): number{
    return this.cartLines.map((x) => x.total).reduce((a, v) => (a += v), 0);
  }

  getShipping() : number{
    return (
      this.cartLines.map((x) => x.quantity).reduce((a, v) => (a += v), 0) * 2
    );
  }
}
