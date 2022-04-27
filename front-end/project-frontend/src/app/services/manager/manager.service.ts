import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Manager } from 'src/app/common/manager';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {


  private baseUrl = `http://127.0.0.1:8000/api/manager`;

  constructor(private httpClient: HttpClient) { }

  getManagerList() : Observable<Manager[]>
  {
    // need to build URL based on product id
    const managerUrl = `${this.baseUrl}/show`;

    return this.httpClient.get<Manager[]>(managerUrl);
  }


  getManagerById(id : number) : Observable<Manager[]>
  {

    // need to build URL based on product id
    const managerUrl = `${this.baseUrl}/getbyid/`;

    // console.log(`managerUrl=${managerUrl}`);
    // console.log(id);

    return this.httpClient.post<Manager[]>(managerUrl, {"managerId" : id.toString()});
  }

  AddManagerFromInput( first_name:string, last_name : string, email: string, gender:string) : Observable<Manager[]>
  {

    // need to build URL based on product id
    const managerUrl = `${this.baseUrl}/add/`;

    return this.httpClient.post<Manager[]>(managerUrl, {"firstName" : first_name, "lastName" : last_name,  "Email" : email, "Gender" : gender});
  }

  DeleteManagerFromInput( manager_id: string) : Observable<Manager[]>
  {

    // need to build URL based on product id
    const managerUrl = `${this.baseUrl}/delete/`;


    return this.httpClient.post<Manager[]>(managerUrl, {"managerId" : +manager_id});
  }


  ModifyManagerFromInput( manager_id : string, first_name:string, last_name : string, email: string, gender:string) : Observable<Manager[]>
  {

    // need to build URL based on product id
    const managerUrl = `${this.baseUrl}/modify/`;

    return this.httpClient.post<Manager[]>(managerUrl, {"managerId": +manager_id, "firstName" : first_name, "lastName" : last_name,  "Email" : email, "Gender" : gender});
  }

}
