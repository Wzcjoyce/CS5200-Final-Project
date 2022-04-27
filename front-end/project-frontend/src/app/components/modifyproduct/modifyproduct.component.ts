import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-modifyproduct',
  templateUrl: './modifyproduct.component.html',
  styleUrls: ['./modifyproduct.component.css']
})
export class ModifyproductComponent implements OnInit {

  products: Product[];

  submit_status: string = "";

  constructor(private ProductService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  ModifyProduct()
  {

    const Product_id : string = (<HTMLInputElement>document.getElementById("modfiyproductid")).value;
    const Date : string = (<HTMLInputElement>document.getElementById("ProductDate")).value;
    const Website : string = (<HTMLInputElement>document.getElementById("ProductWebsite")).value;
    const IsDemo: string = (<HTMLInputElement>document.getElementById("ProductIsDemo")).value;
    const Description : string = (<HTMLInputElement>document.getElementById("ProductDescription")).value;
    const ProviderId : string = (<HTMLInputElement>document.getElementById("ProductProviderId")).value;


    if(Product_id && Date && Website && IsDemo && Description && ProviderId)
    {
      try{
      this.ProductService.ModifyProductFromInput(Product_id, Date, Website, IsDemo, Description, ProviderId).subscribe(
        data => {
          this.products = data;
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
