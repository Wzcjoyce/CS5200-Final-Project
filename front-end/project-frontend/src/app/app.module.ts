import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ManagerListComponent } from './components/manager-list/manager-list.component';

import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { SearchComponent } from './components/search/search.component';
import { TableMenuComponent } from './components/table-menu/table-menu.component';
import { ProviderListComponent } from './components/provider-list/provider-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddmamagerComponent } from './components/addmamager/addmamager.component';
import { AddcustomerComponent } from './components/addcustomer/addcustomer.component';
import { AddproviderComponent } from './components/addprovider/addprovider.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { AddorderComponent } from './components/addorder/addorder.component';
import { DeletecustomerComponent } from './components/deletecustomer/deletecustomer.component';
import { DeletemanagerComponent } from './components/deletemanager/deletemanager.component';
import { DeleteproductComponent } from './components/deleteproduct/deleteproduct.component';
import { DeleteorderComponent } from './components/deleteorder/deleteorder.component';
import { DeleteproviderComponent } from './components/deleteprovider/deleteprovider.component';
import { ModifycustomerComponent } from './components/modifycustomer/modifycustomer.component';
import { ModifymanagerComponent } from './components/modifymanager/modifymanager.component';
import { ModifyordersComponent } from './components/modifyorders/modifyorders.component';
import { ModifyproductComponent } from './components/modifyproduct/modifyproduct.component';
import { ModifyproviderComponent } from './components/modifyprovider/modifyprovider.component';



const routes: Routes = [
  {path: 'api/orders/complete/', component: OrdersListComponent},
  {path: 'api/provider/getbyid/:id', component: ProviderListComponent},
  {path: 'api/product/getbyid/:id', component: ProductListComponent},
  {path: 'api/orders/getbyid/:id', component: OrdersListComponent},
  {path: 'api/manager/getbyid/:id', component: ManagerListComponent},
  {path: 'api/customer/getbyid/:id', component: CustomerListComponent},
  {path: 'api/product/show', component: ProductListComponent},
  {path: 'api/orders/show', component: OrdersListComponent},
  {path: 'api/provider/show', component: ProviderListComponent},
  {path: 'api/customer/show', component: CustomerListComponent},
  {path: 'api/manager/show', component: ManagerListComponent},
  {path: '', redirectTo: 'api/customer/show', pathMatch: 'full'},
  {path: '**', redirectTo:  'api/customer/show', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    ManagerListComponent,
    CustomerListComponent,
    SearchComponent,
    TableMenuComponent,
    ProviderListComponent,
    ProductListComponent,
    OrdersListComponent,
    AddmamagerComponent,
    AddcustomerComponent,
    AddproviderComponent,
    AddproductComponent,
    AddorderComponent,
    DeletecustomerComponent,
    DeletemanagerComponent,
    DeleteproductComponent,
    DeleteorderComponent,
    DeleteproviderComponent,
    ModifycustomerComponent,
    ModifymanagerComponent,
    ModifyordersComponent,
    ModifyproductComponent,
    ModifyproviderComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
