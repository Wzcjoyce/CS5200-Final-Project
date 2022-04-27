import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/common/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-deletecustomer',
  templateUrl: './deletecustomer.component.html',
  styleUrls: ['./deletecustomer.component.css']
})
export class DeletecustomerComponent implements OnInit {

  customers: Customer[];

  submit_status: string = "";

  constructor(private CustomerService: CustomerService) { }

  ngOnInit(): void {
  }

  DeleteCustomer()
  {
    const customer_id : string = (<HTMLInputElement>document.getElementById("DeleteCustomerId")).value;

    if(customer_id)
    {
      try{
        this.CustomerService.DeleteCustomerFromInput(customer_id).subscribe(
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

      this.submit_status = "Failed to Delete.  Please make sure that all entries are not empty.";
    }
  }

  
}
