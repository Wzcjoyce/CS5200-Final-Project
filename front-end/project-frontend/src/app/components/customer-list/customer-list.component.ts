import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Customer } from 'src/app/common/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list-table.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[];
  Mode: string = "show";
  currentCustomerId: number;

  constructor(private CustomerService: CustomerService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listCustomer();
  }

  listCustomer()
  {
    const hasId: boolean = this.route.snapshot.paramMap.has('id');


    if(hasId)
    {
      this.currentCustomerId = +this.route.snapshot.paramMap.get('id');
      this.CustomerService.getCustomerById(this.currentCustomerId ).subscribe(
        data => {
          this.customers = data;
        }
        
      )
    }
    else
    {

      this.GetAllCustomers();
    
    }

  }

  GetAllCustomers()
  {
    this.CustomerService.getCustomerList().subscribe(
      data => {
        this.customers = data;
      }
      
    )
  
  }

  GetMaxCustomer()
  {
    this.CustomerService.GetMaxCustomer().subscribe(
      data => {
        this.customers = data;
      }
      
    )
  
  }


  Switch_to_showMode()
  {

    this.Mode = "show";
    this.GetAllCustomers();
  }

  Switch_to_addMode()
  {

    this.Mode = "add";
  }

  Switch_to_deleteMode()
  {

    this.Mode = "delete";
  }

  Switch_to_modifyMode()
  {

    this.Mode = "modify";
  }
  



}
