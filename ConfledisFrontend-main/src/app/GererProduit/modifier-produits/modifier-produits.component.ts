import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/Model/produit';
import { ProduitService } from 'src/app/service/produit.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-modifier-produits',
  templateUrl: './modifier-produits.component.html',
  styleUrls: ['./modifier-produits.component.css']
})
export class ModifierProduitsComponent  implements OnInit {
  constructor(private _service: ProduitService, private router: Router, private route: ActivatedRoute) { }

  idProduit!:any;
  produit!:Produit
  ngOnInit(): void {
       this.idProduit = this.route.snapshot.paramMap.get('id');
       this._service.getProduitById(this.idProduit).subscribe(res=>{
        this.produit=res
       })
  }

  ModifierProduit() {
    let body = {
      "id":this.produit.id,
      "nom": this.produit.nom,
      "prixUnitaire": this.produit.prixUnitaire,
      "quantite": this.produit.quantite
    }

    this._service.ModifierProduit(body).subscribe(res => {
      if (res != null)
      Swal.fire({
        icon: 'success',
        title: 'Modification Produit',
        text: 'Votre Produit est bien modifier'
      })
    })
    this.router.navigate(['/ListeProduit']);
  }

}
