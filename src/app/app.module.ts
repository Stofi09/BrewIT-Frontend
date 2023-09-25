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
import { FormsModule } from '@angular/forms';
//Material
import { MatIconModule } from '@angular/material/icon';
import { BeerListComponent } from './components/beer-list/beer-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

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
    MatDialogModule,FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,MatIconModule, MatTableModule
  ],exports: [MatIconModule,MatTableModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
