import { Component } from '@angular/core';
import { ProduitService } from '../service/produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private _service: ProduitService, private router: Router) { }

}
