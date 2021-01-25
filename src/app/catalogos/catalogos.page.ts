import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-catalogos',
  templateUrl: './catalogos.page.html',
  styleUrls: ['./catalogos.page.scss'],
})
export class CatalogosPage implements OnInit {

  public dataRota: any;
  public data =[];
  public catalogo;

  constructor(private route: ActivatedRoute, private router: Router,public apiService: ApiService) { 

    var rota ='catalogos';

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.catalogo = this.router.getCurrentNavigation().extras.state.catalogo;
      
      }

      apiService.acessorGet( rota,function(resp,este){
        console.log(resp);
        este.data = resp;
        console.log('entrou');

        if(este.catalogo != null){
            for (var i = 0 ; este.data.length; i++) {
              if(este.data[i].CATALOGO == este.catalogo ){
                console.log('cat');
                este.catalogo = null;
                este.openDetailsWithState('/catalogo', este.data[i].IFRAME, este.data[i].PRODUTOS)
              }
          }
        }
                
        },null,this);//fim do remsoto
    });
  }

  ngOnInit() {
  }

  openDetailsWithState(rota, iframe, produto) {
    let navigationExtras: NavigationExtras = {
      state: {
        data:iframe,
        produto:produto
      }
    };
    this.router.navigate([rota], navigationExtras);
  }

}
