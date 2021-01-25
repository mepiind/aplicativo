import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { DomSanitizer } from  '@angular/platform-browser';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {

  public iframe;
  public produtos;

  constructor(private route: ActivatedRoute, private router: Router, public domSanitizer: DomSanitizer) { 

    

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.iframe = this.router.getCurrentNavigation().extras.state.data;
        this.produtos = this.router.getCurrentNavigation().extras.state.produto;
        console.log(this.iframe);
      }
    });

  }

  openDetailsWithState(rota,  produto) {
    let navigationExtras: NavigationExtras = {
      state: {
        produto:produto
      }
    };
    this.router.navigate([rota], navigationExtras);
  }

  ngOnInit() {
  }

}
