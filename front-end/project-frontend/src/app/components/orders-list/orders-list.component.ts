import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Orders } from 'src/app/common/orders';
import { OrdersService } from 'src/app/services/orders/orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list-table.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  orders: Orders[];
  Mode: string = "show";
  currentOrdersId: number;


  constructor(private OrdersService: OrdersService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.listOrders();
  }


  listOrders()
  {
    const hasId: boolean = this.route.snapshot.paramMap.has('id');


    if(hasId)
    {
      this.currentOrdersId = +this.route.snapshot.paramMap.get('id');
      
      this.OrdersService.getOrdersById(this.currentOrdersId ).subscribe(
        data => {
          this.orders = data;
        }
        
      )
    }
    else
    {

      this.GetAllOrders();
    
    }

  }

  GetAllOrders()
  {
    this.OrdersService.getOrdersList().subscribe(
      data => {
        this.orders = data;
      }
      
    )
  
  }


  Switch_to_showMode()
  {

    this.Mode = "show";
    this.GetAllOrders();
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

  GetCompleteOrders()
  {

    this.OrdersService.getCompleteOrders().subscribe(
      data => {
        this.orders = data;
      }
      
    )
  }


  GetInCompleteOrders()
  {

    this.OrdersService.getInCompleteOrders().subscribe(
      data => {
        this.orders = data;
      }
      
    )
  }

  GetMaxOrder()
  {

    this.OrdersService.getMaxOrder().subscribe(
      data => {
        this.orders = data;
      }
      
    )
  }

}
