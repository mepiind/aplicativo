import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-lista-normas',
  templateUrl: './lista-normas.page.html',
  styleUrls: ['./lista-normas.page.scss'],
})
export class ListaNormasPage implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  openDetailsWithState(rota, tipo, titulo) {
    let navigationExtras: NavigationExtras = {
      state: {
        tipo: tipo,
        titulo:titulo
      }
    };
    this.router.navigate([rota], navigationExtras);
  }

}
