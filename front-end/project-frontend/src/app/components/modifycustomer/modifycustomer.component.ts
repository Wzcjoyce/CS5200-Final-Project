import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Customer } from 'src/app/common/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-modifycustomer',
  templateUrl: './modifycustomer.component.html',
  styleUrls: ['./modifycustomer.component.css']
})
export class ModifycustomerComponent implements OnInit {

  customers: Customer[];

  submit_status: string = "";

  constructor(private CustomerService: CustomerService) { }

  ngOnInit(): void {
  }

  ModifyCustomer()
  {
    const customer_id : string = (<HTMLInputElement>document.getElementById("ModifyCustomerid")).value;
    const firstName : string = (<HTMLInputElement>document.getElementById("CustomerFirstName")).value;
    const lastName : string = (<HTMLInputElement>document.getElementById("CustomerLastName")).value;
    const Company: string = (<HTMLInputElement>document.getElementById("CustomerCompany")).value;
    const Email: string = (<HTMLInputElement>document.getElementById("CustomerEmail")).value;
    const Description : string = (<HTMLInputElement>document.getElementById("CustomerDescription")).value;
    const idealPrice : string = (<HTMLInputElement>document.getElementById("CustomeridealPrice")).value;
    const ManagerId : string = (<HTMLInputElement>document.getElementById("CustomerManagerId")).value;


    if(customer_id && firstName && lastName && Company && Email && Description && ManagerId && idealPrice)
    {
      try{
      this.CustomerService.ModifyCustomerFromInput(customer_id, firstName, lastName,Company, Email, Description, idealPrice, ManagerId).subscribe(
        data => {
          this.customers = data;
        });

        window.location.reload();
        this.submit_status = "";
      }
      catch(err : unknown)
      {
        this.submit_status = "Failed due to bad connection to the backend";
      }
    }
    else
    {
      this.submit_status = "Failed to Modify.  Please make sure that all entries are not empty.";
    }
    


  }

}
