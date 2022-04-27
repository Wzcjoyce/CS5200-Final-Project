import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Customer } from 'src/app/common/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = `http://127.0.0.1:8000/api/customer`;

  private NeedRefresh = false;

  constructor(private httpClient: HttpClient) { }

  getCustomerList() : Observable<Customer[]>
  {
    // need to build URL based on product id
    const customerUrl = `${this.baseUrl}/show`;

    return this.httpClient.get<Customer[]>(customerUrl);
  }

  GetMaxCustomer()
  {

    // need to build URL based on product id
    const customerUrl = `${this.baseUrl}/max`;

    return this.httpClient.get<Customer[]>(customerUrl);
  }

  getCustomerById(id : number) : Observable<Customer[]>
  {

    // need to build URL based on product id
    const customerUrl = `${this.baseUrl}/getbyid/`;
    // console.log(`customerUrl=${customerUrl}`);

    return this.httpClient.post<Customer[]>(customerUrl, {"customerId" : id});
  }

  AddCustomerFromInput( firstName: string, lastName : string,Company :string, Email : string, Description :string, idealPrice: string, ManagerId : string) : Observable<Customer[]>
  {

    // need to build URL based on product id
    const customerUrl = `${this.baseUrl}/add/`;

    
    console.log(firstName);

    return this.httpClient.post<Customer[]>(customerUrl, {"firstName" : firstName, "lastName" : lastName,  "Company" : Company, "Email" : Email,
                                                          "Description" : Description, "ideaPrice" : +idealPrice, "manager_id": +ManagerId});
  }

  DeleteCustomerFromInput( customer_id: string) : Observable<Customer[]>
  {

    // need to build URL based on product id
    const customerUrl = `${this.baseUrl}/delete/`;


    return this.httpClient.post<Customer[]>(customerUrl, {"customerId" : +customer_id});
  }

  ModifyCustomerFromInput(customer_id:string, firstName: string, lastName : string,Company :string, Email : string, Description :string, idealPrice: string, ManagerId : string) : Observable<Customer[]>
  {

    // need to build URL based on product id
    const customerUrl = `${this.baseUrl}/modify/`;

    
    // console.log(firstName);

    return this.httpClient.post<Customer[]>(customerUrl, {"customerId": +customer_id,"firstName" : firstName, "lastName" : lastName,  "Company" : Company, "Email" : Email,
                                                          "Description" : Description, "ideaPrice" : +idealPrice, "manager_id": +ManagerId});
  }


}

