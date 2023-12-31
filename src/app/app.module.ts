import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ResidencesComponent } from './pages/residences/residences.component';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './pages/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ResidencesComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
