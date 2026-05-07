import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';
import { Admin } from './components/admin';
import { Dashboard } from './components/dashboard/dashboard';
import { AdminProducts } from './components/admin-products/admin-products';
import { OrdersTable } from './components/orders-table/orders-table';
import { Customers } from './components/customers/customers';
import { CreateProduct } from './components/create-product/create-product';

@NgModule({
  declarations: [Admin, Dashboard, AdminProducts, OrdersTable, Customers, CreateProduct],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
