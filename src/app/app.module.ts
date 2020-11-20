import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


// Angular materials
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatExpansionModule} from '@angular/material/expansion';




// Components
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { NavComponent } from './Nav/Nav.component';
import { ProductDetailComponent } from '../app/products/productDetail/productDetail.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { appRoutes } from './routes';
import { EmployeeFormComponent } from './employeeForm/employeeForm.component';
import { AboutComponent } from './about/about.component';
import { ProductEditComponent } from './products/productEdit/productEdit.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogDetailsComponent } from './dialog/dialogDetails/dialogDetails.component';

DialogDetailsComponent
@NgModule({
  declarations: [							
    AppComponent,
      ProductsComponent,
      NavComponent,
      ProductDetailComponent,
      WelcomeComponent,
      EmployeeFormComponent,
      AboutComponent,
      ProductEditComponent,
      DialogComponent,
      DialogDetailsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    
    // material
    MatButtonModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    MatChipsModule,
    MatExpansionModule
    
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
