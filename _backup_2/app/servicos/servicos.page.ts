import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.page.html',
  styleUrls: ['./servicos.page.scss'],
})
export class ServicosPage implements OnInit {
  public dataRota: any;
  public data: any;

  constructor(private route: ActivatedRoute, private router: Router,public apiService: ApiService) {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.dataRota = this.router.getCurrentNavigation().extras.state;

        var rota ='menus/tipo/' + this.dataRota.tipo;
        apiService.acessorGet( rota,function(resp,este){
          console.log(resp);
          este.data = resp;
        },null,this);//fim do remsoto

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
