import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Product } from 'src/app/common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = `http://127.0.0.1:8000/api/product`;

  constructor(private httpClient: HttpClient) { }

  getProductsList() : Observable<Product[]>
  {
    // need to build URL based on product id
    const providerUrl = `${this.baseUrl}/show`;

    return this.httpClient.get<Product[]>(providerUrl);
  }

  getProductById(id : number) : Observable<Product[]>
  {

    // need to build URL based on product id
    const productUrl = `${this.baseUrl}/getbyid/`;

    // console.log(`productUrl=${productUrl}`);
    // console.log(id);

    return this.httpClient.post<Product[]>(productUrl, {"productId" : id.toString()});
  }

  AddProductFromInput(date : string, Website : string, IsDemo : string, Description : string, ProviderId : string) : Observable<Product[]>
  {

    // need to build URL based on product id
    const productUrl = `${this.baseUrl}/add/`;

    if(IsDemo == "true" || IsDemo == "True")
    {
      IsDemo = "1";
    }
    if(IsDemo == "false" || IsDemo == "False")
    {
      IsDemo = "0";
    }

    console.log(`test = ${date}`);

    return this.httpClient.post<Product[]>(productUrl, {"Date" : date, "Website" : Website,  "isDemo" : +IsDemo, "Description" : Description, "providerId" : +ProviderId});
  }

  DeleteProductFromInput( product_id: string) : Observable<Product[]>
  {

    // need to build URL based on product id
    const productUrl = `${this.baseUrl}/delete/`;

    

    return this.httpClient.post<Product[]>(productUrl, {"productId" : +product_id});
  }

  ModifyProductFromInput(product_id : string, date : string, Website : string, IsDemo : string, Description : string, ProviderId : string) : Observable<Product[]>
  {

    // need to build URL based on product id
    const productUrl = `${this.baseUrl}/modify/`;

    if(IsDemo == "true" || IsDemo == "True")
    {
      IsDemo = "1";
    }
    if(IsDemo == "false" || IsDemo == "False")
    {
      IsDemo = "0";
    }

    // console.log(`test = ${date}`);

    return this.httpClient.post<Product[]>(productUrl, {"productId": +product_id, "Date" : date, "Website" : Website,  "isDemo" : +IsDemo, "Description" : Description, "providerId" : +ProviderId});
  }
}
