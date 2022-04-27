import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-table.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  currentProductId: number;
  Mode: string = "show";

  constructor(private ProductService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listProduct();
  }

  listProduct()
  {
    const hasId: boolean = this.route.snapshot.paramMap.has('id');


    if(hasId)
    {
      this.currentProductId = +this.route.snapshot.paramMap.get('id');
      
      this.ProductService.getProductById(this.currentProductId ).subscribe(
        data => {
          this.products = data;
        }
        
      )
    }
    else
    {

      this.GetAllProducts();
    
    }

  }


  GetAllProducts()
  {
    this.ProductService.getProductsList().subscribe(
      data => {
        this.products = data;
      }
      
    )
  
  }

  Switch_to_showMode()
  {

    this.Mode = "show";
    this.GetAllProducts();
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
