import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Angular materials
import { MatSliderModule } from '@angular/material/slider';

// Components
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { NavComponent } from './Nav/Nav.component';

@NgModule({
  declarations: [		
    AppComponent,
      ProductsComponent,
      NavComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
