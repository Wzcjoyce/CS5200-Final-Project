import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Orders } from 'src/app/common/orders';
import {MatDialog} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private baseUrl = `http://127.0.0.1:8000/api/orders`;

  constructor(private httpClient: HttpClient) { }

  getOrdersList() : Observable<Orders[]>
  {
    // need to build URL based on product id
    const ordersUrl = `${this.baseUrl}/show`;

    return this.httpClient.get<Orders[]>(ordersUrl);
  }

  getOrdersById(id : number) : Observable<Orders[]>
  {

    // need to build URL based on product id
    const ordersUrl = `${this.baseUrl}/getbyid/`;

    // console.log(`ordersUrl=${ordersUrl}`);
    // console.log(id);

    return this.httpClient.post<Orders[]>(ordersUrl, {"orderId" : id.toString()});
  }

  getCompleteOrders() : Observable<Orders[]>
  {

    // need to build URL based on product id
    const ordersUrl = `${this.baseUrl}/complete/`;


    return this.httpClient.get<Orders[]>(ordersUrl);
  }

  getInCompleteOrders() : Observable<Orders[]>
  {

    // need to build URL based on product id
    const ordersUrl = `${this.baseUrl}/notcomplete/`;


    return this.httpClient.get<Orders[]>(ordersUrl);
  }

  getMaxOrder() : Observable<Orders[]>
  {

    // need to build URL based on product id
    const ordersUrl = `${this.baseUrl}/max/`;


    return this.httpClient.get<Orders[]>(ordersUrl);
  }

  AddOrdersFromInput(Price : string, OrderDate  : string, IsComplete  : string, ApplicationType  : string, 
    Platform  : string, MachineLearning  : string, DataMining  : string, Maintenance  : string, Saas  : string, BackStage  : string, 
    ProviderId  : string,  ManagerId : string) : Observable<Orders[]>
  {

    // need to build URL based on product id
    const ordersUrl = `${this.baseUrl}/add/`;

    if(MachineLearning == "true" || MachineLearning == "True")
    {
      MachineLearning = "1";
    }
    if(MachineLearning == "false" || MachineLearning == "False")
    {
      MachineLearning = "0";
    }

    
    if(IsComplete == "true" || IsComplete == "True")
    {
      IsComplete = "1";
    }
    if(IsComplete == "false" || IsComplete == "False")
    {
      IsComplete = "0";
    }

    if(DataMining == "true" || DataMining == "True")
    {
      DataMining = "1";
    }
    if(DataMining == "false" || DataMining == "False")
    {
      DataMining = "0";
    }

  
    if(Saas == "true" || Saas == "True")
    {
      Saas = "1";
    }
    if(Saas == "false" || Saas == "False")
    {
      Saas = "0";
    }

    if(BackStage == "true" || BackStage == "True")
    {
      BackStage = "1";
    }
    if(BackStage == "false" || BackStage == "False")
    {
      BackStage = "0";
    }

    // let input_date = new Date(OrderDate);


    return this.httpClient.post<Orders[]>(ordersUrl, 
      {"Price" : Price, "Time" : OrderDate,  "isComplete" : +IsComplete, "applicationType" : ApplicationType, "Platform" : Platform,
      "machineLearning": +MachineLearning, "dataMining": +DataMining, "Maintenance":Maintenance,
      "SaaS": +Saas, "Backstage": +BackStage, "providerId":+ProviderId, "managerId" : +ManagerId});
  }

  DeleteOrdersFromInput( order_id: string) : Observable<Orders[]>
  {

    // need to build URL based on product id
    const ordersUrl = `${this.baseUrl}/delete/`;

  

    return this.httpClient.post<Orders[]>(ordersUrl, {"orderId" : +order_id});
  }


  ModifyOrdersFromInput(order_id: string, Price : string, OrderDate  : string, IsComplete  : string, ApplicationType  : string, 
    Platform  : string, MachineLearning  : string, DataMining  : string, Maintenance  : string, Saas  : string, BackStage  : string, 
    ProviderId  : string,  ManagerId : string) : Observable<Orders[]>
  {

    // need to build URL based on product id
    const ordersUrl = `${this.baseUrl}/modify/`;

    if(MachineLearning == "true" || MachineLearning == "True")
    {
      MachineLearning = "1";
    }
    if(MachineLearning == "false" || MachineLearning == "False")
    {
      MachineLearning = "0";
    }

    
    if(IsComplete == "true" || IsComplete == "True")
    {
      IsComplete = "1";
    }
    if(IsComplete == "false" || IsComplete == "False")
    {
      IsComplete = "0";
    }

    if(DataMining == "true" || DataMining == "True")
    {
      DataMining = "1";
    }
    if(DataMining == "false" || DataMining == "False")
    {
      DataMining = "0";
    }

  
    if(Saas == "true" || Saas == "True")
    {
      Saas = "1";
    }
    if(Saas == "false" || Saas == "False")
    {
      Saas = "0";
    }

    if(BackStage == "true" || BackStage == "True")
    {
      BackStage = "1";
    }
    if(BackStage == "false" || BackStage == "False")
    {
      BackStage = "0";
    }

    // let input_date = new Date(OrderDate);


    return this.httpClient.post<Orders[]>(ordersUrl, 
      {"orderId": +order_id,"Price" : Price, "Time" : OrderDate,  "isComplete" : +IsComplete, "applicationType" : ApplicationType, "Platform" : Platform,
      "machineLearning": +MachineLearning, "dataMining": +DataMining, "Maintenance":Maintenance,
      "SaaS": +Saas, "Backstage": BackStage, "providerId": +ProviderId, "managerId" : +ManagerId});
  }


}

