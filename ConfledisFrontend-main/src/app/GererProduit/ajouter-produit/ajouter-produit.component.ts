import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/app/Model/produit';
import { ProduitService } from 'src/app/service/produit.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent implements OnInit {
  constructor(private _service: ProduitService, private router: Router) { }
  produit!: Produit;
  nom!: String;
  prixUnitaire!: number;
  quantite!: number;

  ngOnInit(): void {

  }

  ajouterPorduit() {
    let body = {
      "nom": this.nom,
      "prixUnitaire": this.prixUnitaire,
      "quantite": this.quantite
    }

    this._service.ajouterProduit(body).subscribe(res => {
      if (res != null)
      Swal.fire({
        icon: 'success',
        title: 'Ajouter Produit',
        text: 'Votre Produit est bien sauvegarder'
      })
    })
    this.router.navigate(['/ListeProduit']);
  }
}
