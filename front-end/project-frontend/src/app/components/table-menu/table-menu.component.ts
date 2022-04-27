import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from '../search/search.component';


@Component({
  selector: 'app-table-menu',
  templateUrl: './table-menu.component.html',
  styleUrls: ['./table-menu.component.css']
})
export class TableMenuComponent implements OnInit {

  table_name: string;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  Switch_To_Manager()
  {
    SearchComponent.SearchType = "manager";
  }

  Switch_To_Customer()
  {
    SearchComponent.SearchType = "customer";
  }

  Switch_To_Provider()
  {
    SearchComponent.SearchType = "provider";
  }

  Switch_To_Product()
  {
    SearchComponent.SearchType = "product";
  }

  Switch_To_Orders()
  {
    SearchComponent.SearchType = "orders";
  }


}
