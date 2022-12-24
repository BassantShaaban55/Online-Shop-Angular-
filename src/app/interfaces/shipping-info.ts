
export class ShippingInfo{
  first_name: string='';
  last_name: string='';
  email: string='';
  mobile_number: string='';
  address1: string ='';
  address2: string ='';
  country: string='';
  city: string='';
  state: string='';
  zip_code: string='';

  constructor(first_name:string, last_name:string,email:string,mobile_number:string,
  address1: string,address2: string,country: string,city: string,state: string,
  zip_code: string){
    this.address1=address1
    this.address2=address2;
    this.city=city
    this.country=country
    this.first_name=first_name
    this.last_name=last_name;
    this.email=email
    this.mobile_number=mobile_number;
    this.zip_code=zip_code;
    this.state=state;

  }

}