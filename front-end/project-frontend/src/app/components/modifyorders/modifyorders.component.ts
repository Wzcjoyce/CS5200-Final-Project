import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Orders } from 'src/app/common/orders';
import { OrdersService } from 'src/app/services/orders/orders.service';

@Component({
  selector: 'app-modifyorders',
  templateUrl: './modifyorders.component.html',
  styleUrls: ['./modifyorders.component.css']
})
export class ModifyordersComponent implements OnInit {

  orders: Orders[];

  submit_status: string = "";

  constructor(private OrdersService: OrdersService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  ModifyOrders()
  {
    const order_id : string = (<HTMLInputElement>document.getElementById("modifyorder")).value;
    const Price : string = (<HTMLInputElement>document.getElementById("OrderPrice")).value;
    const OrderDate : string = (<HTMLInputElement>document.getElementById("OrderDate")).value;
    const IsComplete: string = (<HTMLInputElement>document.getElementById("OrderIsComplete")).value;
    const ApplicationType : string = (<HTMLInputElement>document.getElementById("OrderType")).value;
    const Platform : string = (<HTMLInputElement>document.getElementById("Orderplatform")).value;
    const MachineLearning : string = (<HTMLInputElement>document.getElementById("OrderMachineLearning")).value;
    const DataMining: string = (<HTMLInputElement>document.getElementById("OrderDataMining")).value;
    const Maintenance : string = (<HTMLInputElement>document.getElementById("OrderMaintenance")).value;
    const Saas : string = (<HTMLInputElement>document.getElementById("OrderSaaS")).value;
    const BackStage : string = (<HTMLInputElement>document.getElementById("OrderBackStage")).value;
    const ProviderId : string = (<HTMLInputElement>document.getElementById("OrderProviderId")).value;
    const ManagerId: string = (<HTMLInputElement>document.getElementById("OrderManagerId")).value;

    if(order_id && Price && OrderDate && IsComplete && ApplicationType && Platform && MachineLearning && DataMining && Maintenance
      && Saas && BackStage && ProviderId && ManagerId)
    {
      try{
        this.OrdersService.ModifyOrdersFromInput(order_id, Price, OrderDate, IsComplete, ApplicationType, 
                                            Platform, MachineLearning, DataMining, Maintenance, Saas, BackStage, ProviderId,  ManagerId).subscribe(
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
      this.submit_status = "Failed to Modify.  Please make sure that all entries are not empty.";
    }



  }

}
