import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EmployeeFormComponent } from './employeeForm/employeeForm.component';


import { ProductDetailComponent } from './products/productDetail/productDetail.component';
import { ProductsComponent } from './products/products.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const appRoutes: Routes = [

    {path: 'home', component: WelcomeComponent},
    {path: 'employee', component: ProductsComponent},
    {path: 'employeeDetail/:id', component: ProductDetailComponent},
    {path: 'newEmployee', component: EmployeeFormComponent},
    {path: 'about', component: AboutComponent},

    //{path: 'productsDetails/:id', component: ProductDetailComponent},

    {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
]