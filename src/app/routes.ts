import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DialogDetailsComponent } from './dialog/dialogDetails/dialogDetails.component';
import { EmployeeFormComponent } from './employeeForm/employeeForm.component';


import { ProductDetailComponent } from './products/productDetail/productDetail.component';
import { ProductEditComponent } from './products/productEdit/productEdit.component';
import { ProductsComponent } from './products/products.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const appRoutes: Routes = [

    {path: 'home', component: WelcomeComponent},
    {path: 'employee', component: ProductsComponent},
    {path: 'employeeDetail/:id', component: ProductDetailComponent},
    {path: 'newEmployee', component: EmployeeFormComponent},
    {path: 'about', component: AboutComponent},
    {path: 'dialogDetails', component: DialogDetailsComponent},

    {path: 'employeeEdit/:id', component: ProductEditComponent},


    

    {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
]