import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { NavContent } from './navbar/nav-content/nav-content';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ProductCard } from './product-card/product-card';

@NgModule({
  declarations: [Navbar, Footer, NavContent, ProductCard],
  imports: [CommonModule, MatIconModule, MatButtonModule, MatMenuModule],
  exports: [Navbar, Footer,ProductCard],
})
export class SharedModule {}
