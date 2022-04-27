import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  products: Product[];
  
  submit_status: string = "";

  constructor(private ProductService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  AddProduct()
  {

    const Date : string = (<HTMLInputElement>document.getElementById("ProductDate")).value;
    const Website : string = (<HTMLInputElement>document.getElementById("ProductWebsite")).value;
    const IsDemo: string = (<HTMLInputElement>document.getElementById("ProductIsDemo")).value;
    const Description : string = (<HTMLInputElement>document.getElementById("ProductDescription")).value;
    const ProviderId : string = (<HTMLInputElement>document.getElementById("ProductProviderId")).value;


    if(Date && Website && IsDemo && Description && ProviderId)
    {
      try{
        this.ProductService.AddProductFromInput(Date, Website, IsDemo, Description, ProviderId).subscribe(
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
      this.submit_status = "Failed to Add.  Please make sure that all entries are not empty.";
    }

  }

}
