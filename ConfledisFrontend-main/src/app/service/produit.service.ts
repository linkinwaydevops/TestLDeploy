import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../Model/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http:HttpClient) {}

  
ajouterProduit(produit:any){
  return this.http.post<any>("http://localhost:8083/addProduit",produit);
    }

  getAllProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>("http://localhost:8083/GetAllProduits");
  }

   SupprimerProduit(id:any):Observable<any> {
    return this.http.delete<any>("http://localhost:8083/deleteProduit/"+`${id}`);
  }

  getProduitById(id:any):Observable<any> {
    return this.http.get<any>("http://localhost:8083/GetProduitById/"+`${id}`);
  }
  ModifierProduit(produit:any){
    return this.http.put<any>("http://localhost:8083/updateProduit",produit);
      }

    rechercheProduit(nom:String): Observable<Produit[]> {
      return this.http.get<Produit[]>("http://localhost:8083/rechercheProduit/"+`${nom}`);
    }
}
