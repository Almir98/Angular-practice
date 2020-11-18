import { Routes } from '@angular/router';


import { ProductDetailComponent } from './products/productDetail/productDetail.component';
import { ProductsComponent } from './products/products.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const appRoutes: Routes = [

    {path: 'home', component: WelcomeComponent},
    {path: 'products', component: ProductsComponent},
    //{path: 'productsDetails/:id', component: ProductDetailComponent},

    {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
]