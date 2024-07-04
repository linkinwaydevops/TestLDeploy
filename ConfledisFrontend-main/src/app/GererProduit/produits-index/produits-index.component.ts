import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/app/Model/produit';
import { ProduitService } from 'src/app/service/produit.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-produits-index',
  templateUrl: './produits-index.component.html',
  styleUrls: ['./produits-index.component.css']
})
export class ProduitsIndexComponent implements OnInit {
  constructor(private _service: ProduitService, private router: Router) { }
  ListeProduits!: Produit[];
  prod!:Produit;
  test:boolean=false;
  nom!:String;
  ngOnInit(): void {
    this._service.getAllProduits().subscribe(res => {
      this.prod=res[0];
      this.ListeProduits = res
    })

  }
  SupprimerProduit(id:number){
    this._service.SupprimerProduit(id).subscribe(res=> {

      console.log(res)
      if(res==null){
        this.getAllPorduit();
        Swal.fire({
          icon: 'success',
          title: 'Supprimer Produit',
          text: 'Votre Produit est bien supprimer '
        })
      }
    })
  }
  getProduitById(id:number){
this._service.getProduitById(id).subscribe(res=>{
  console.log(res)
  this.prod=res
  this.test=true
})
  }
  recherchPub(nom:String){
    if( this.nom == "" ){
      this.getAllPorduit();
    }
    else if(this.nom !="" ){
    this._service.rechercheProduit(nom).subscribe(res=>{
      this.ListeProduits=res
    })}
  }

  getAllPorduit(){
    this._service.getAllProduits().subscribe(res => {
      this.ListeProduits = res
    })
  }
}
