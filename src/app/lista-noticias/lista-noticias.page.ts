import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-lista-noticias',
  templateUrl: './lista-noticias.page.html',
  styleUrls: ['./lista-noticias.page.scss'],
})
export class ListaNoticiasPage implements OnInit {

  public data:any = null;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.data;
        console.log(this.data);
      }
    });
  }

  ngOnInit() {
  }

  openDetailsWithState(rota,data) {
    let navigationExtras: NavigationExtras = {
      state: {
        data: data
      }
    };
    this.router.navigate([rota], navigationExtras);
  }

}
