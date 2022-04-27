import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/app/common/orders';
import { OrdersService } from 'src/app/services/orders/orders.service';

@Component({
  selector: 'app-deleteorder',
  templateUrl: './deleteorder.component.html',
  styleUrls: ['./deleteorder.component.css']
})
export class DeleteorderComponent implements OnInit {

  orders: Orders[];

  submit_status: string = "";

  constructor(private OrdersService: OrdersService) { }

  ngOnInit(): void {
  }

  DeleteOrder()
  {
    const order_id : string = (<HTMLInputElement>document.getElementById("DeleteOrder_id")).value;

    if(order_id)
    {
      try{
      this.OrdersService.DeleteOrdersFromInput(order_id).subscribe(
        data => {
          this.orders = data;
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
