import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { BeerCardComponent } from './components/beer-card/beer-card.component';
import { CartComponent } from './components/cart/cart.component';
import { TruncatePipe } from './utility/truncate.pipe';

//Material
import { MatIconModule } from '@angular/material/icon';
import { BeerListComponent } from './components/beer-list/beer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    BeerCardComponent,
    CartComponent,
    TruncatePipe,
    BeerListComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,MatIconModule
  ],exports: [MatIconModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
