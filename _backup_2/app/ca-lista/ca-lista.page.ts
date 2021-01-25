import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-ca-lista',
  templateUrl: './ca-lista.page.html',
  styleUrls: ['./ca-lista.page.scss'],
})
export class CaListaPage implements OnInit {

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
