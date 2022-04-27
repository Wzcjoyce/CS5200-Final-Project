import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Provider } from 'src/app/common/provider';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  private baseUrl = `http://127.0.0.1:8000/api/provider`;

  constructor(private httpClient: HttpClient) { }

  getProviderList() : Observable<Provider[]>
  {
    // need to build URL based on product id
    const providerUrl = `${this.baseUrl}/show`;

    return this.httpClient.get<Provider[]>(providerUrl);
  }

  getProviderById(id : number) : Observable<Provider[]>
  {

    // need to build URL based on product id
    const providerUrl = `${this.baseUrl}/getbyid/`;

    // console.log(`providerUrl=${providerUrl}`);
    // console.log(id);

    return this.httpClient.post<Provider[]>(providerUrl, {"providerId" : id.toString()});
  }

  AddProviderFromInput(CompanyName: string, type: string, teamSize: string, quotedPrice: string, OfficialWebsite: string,
    FrontEnd: string, BackEnd: string, Data_analysis: string, UI: string, Logo: string, Illustration: string) : Observable<Provider[]>
  {

    // need to build URL based on product id
    const providerUrl = `${this.baseUrl}/add/`;

    if(FrontEnd == "true" || FrontEnd == "True")
    {
      FrontEnd = "1";
    }
    if(FrontEnd == "false" || FrontEnd == "False")
    {
      FrontEnd = "0";
    }

    if(Data_analysis == "true" || Data_analysis =="True")
    {
      Data_analysis = "1";
    }
    if(Data_analysis == "false" || Data_analysis =="False")
    {
      Data_analysis = "0";
    }

    if(UI == "true" || UI == "True")
    {
      UI = "1";
    }
    if(UI == "false" || UI =="False")
    {
      UI = "0";
    }

    if(Logo == "true" || Logo == "True")
    {
      Logo = "1";
    }
    if(Logo == "false" || Logo =="False")
    {
      Logo = "0";
    }


    if(BackEnd == "true" || BackEnd == "True")
    {
      BackEnd = "1";
    }
    if(BackEnd == "false" || BackEnd == "False")
    {
      BackEnd = "0";
    }


    if(Illustration == "true" || Illustration == "True")
    {
      Illustration = "1";
    }
    if(Illustration == "false" || Illustration == "False")
    {
      Illustration = "0";
    }

    console.log(teamSize);


    return this.httpClient.post<Provider[]>(providerUrl, {"companyName" : CompanyName, "Type" : type,  "teamSize" : +teamSize, "quotedPrice" : +quotedPrice,
                                                           "officialWebsite" : OfficialWebsite, "Frontend": +FrontEnd, "Backend":+BackEnd, "dataAnalysis": +Data_analysis,
                                                            "Ui":+UI, "Logo":+Logo, "Illustration": +Illustration});
  }

  DeleteProviderFromInput( provider_id: string) : Observable<Provider[]>
  {

    // need to build URL based on product id
    const providerUrl = `${this.baseUrl}/delete/`;

    

    return this.httpClient.post<Provider[]>(providerUrl, {"providerId" : +provider_id});
  }


  ModifyProviderFromInput(provider_id:string, CompanyName: string, type: string, teamSize: string, quotedPrice: string, OfficialWebsite: string,
    FrontEnd: string, BackEnd: string, Data_analysis: string, UI: string, Logo: string, Illustration: string) : Observable<Provider[]>
  {

    // need to build URL based on product id
    const providerUrl = `${this.baseUrl}/modify/`;

    if(FrontEnd == "true" || FrontEnd == "True")
    {
      FrontEnd = "1";
    }
    if(FrontEnd == "false" || FrontEnd == "False")
    {
      FrontEnd = "0";
    }

    if(Data_analysis == "true" || Data_analysis =="True")
    {
      Data_analysis = "1";
    }
    if(Data_analysis == "false" || Data_analysis =="False")
    {
      Data_analysis = "0";
    }

    if(UI == "true" || UI == "True")
    {
      UI = "1";
    }
    if(UI == "false" || UI =="False")
    {
      UI = "0";
    }

    if(Logo == "true" || Logo == "True")
    {
      Logo = "1";
    }
    if(Logo == "false" || Logo =="False")
    {
      Logo = "0";
    }


    if(BackEnd == "true" || BackEnd == "True")
    {
      BackEnd = "1";
    }
    if(BackEnd == "false" || BackEnd == "False")
    {
      BackEnd = "0";
    }


    if(Illustration == "true" || Illustration == "True")
    {
      Illustration = "1";
    }
    if(Illustration == "false" || Illustration == "False")
    {
      Illustration = "0";
    }

    // console.log(teamSize);


    return this.httpClient.post<Provider[]>(providerUrl, { "providerId": +provider_id,"companyName" : CompanyName, "Type" : type,  "teamSize" : +teamSize, "quotedPrice" : +quotedPrice,
                                                           "officialWebsite" : OfficialWebsite, "Frontend": +FrontEnd, "Backend":+BackEnd, "dataAnalysis": +Data_analysis,
                                                            "Ui":+UI, "Logo":+Logo, "Illustration": +Illustration});
  }
}
