import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterProduitComponent } from './GererProduit/ajouter-produit/ajouter-produit.component';
import { ProduitsIndexComponent } from './GererProduit/produits-index/produits-index.component';
import { ModifierProduitsComponent } from './GererProduit/modifier-produits/modifier-produits.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AjouterProduitComponent,
    ProduitsIndexComponent,
    ModifierProduitsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
