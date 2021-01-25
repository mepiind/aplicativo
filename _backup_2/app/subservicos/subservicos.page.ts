import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-subservicos',
  templateUrl: './subservicos.page.html',
  styleUrls: ['./subservicos.page.scss'],
})
export class SubservicosPage implements OnInit {

  data: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state;
      }
    });
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

  ngOnInit() {
  }

}
