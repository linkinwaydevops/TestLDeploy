import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterProduitComponent } from './GererProduit/ajouter-produit/ajouter-produit.component';
import { ProduitsIndexComponent } from './GererProduit/produits-index/produits-index.component';
import { ModifierProduitsComponent } from './GererProduit/modifier-produits/modifier-produits.component';

const routes: Routes = [
  {  path:'',  redirectTo :'ListeProduit' , pathMatch: 'full', },
  {  path:'ListeProduit',  component:ProduitsIndexComponent},
  {  path:'AjouterProduit',  component:AjouterProduitComponent},
  {  path:'ModifierProduit/:id',  component:ModifierProduitsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
