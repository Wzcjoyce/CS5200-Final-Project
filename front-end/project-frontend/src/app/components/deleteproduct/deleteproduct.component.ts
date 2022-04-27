import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {

  products: Product[];

  submit_status: string = "";

  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
  }

  DeleteProduct()
  {
    const product_id : string = (<HTMLInputElement>document.getElementById("DeleteProduct_id")).value;

    if(product_id)
    {
      try{
        this.ProductService.DeleteProductFromInput(product_id).subscribe(
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
      this.submit_status = "Failed to Delete.  Please make sure that all entries are not empty.";

    }


  }

}
