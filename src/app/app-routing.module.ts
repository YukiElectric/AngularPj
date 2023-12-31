import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { SearchComponent } from './pages/search/search.component';
import { CartComponent } from './pages/cart/cart.component';
import { SuccessComponent } from './pages/success/success.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SaleComponent } from './pages/sale/sale.component';
import { InfomationComponent } from './pages/infomation/infomation.component';
import { WarrantyComponent } from './pages/warranty/warranty.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'Category/:id', component: CategoryComponent},
  {path: 'ProductDetails/:id' , component: ProductDetailsComponent},
  {path: 'Search', component: SearchComponent},
  {path: 'Cart', component: CartComponent},
  {path: 'Success', component: SuccessComponent},
  {path: 'Sale', component: SaleComponent},
  {path: 'Information', component: InfomationComponent},
  {path: 'Warranty', component: WarrantyComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
