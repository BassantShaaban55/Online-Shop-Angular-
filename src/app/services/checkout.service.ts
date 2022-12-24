import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environment/environment'

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  constructor(private httpClient: HttpClient) {}

  addOrder(order:any,token:string): any {
    let headers= new HttpHeaders()
    headers=headers.set("x-access-token",token)
    return this.httpClient.post(`${environment.apiUrl}orders`,order,{headers:headers});
  }
}
