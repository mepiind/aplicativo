import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage {

  public data = [''];

  constructor(private router: Router,public apiService: ApiService) {
      var rota ='noticias';
      apiService.acessorGet( rota,function(resp,este){
        console.log(resp);
        este.data = resp;
      },null,this);//fim do remsoto

  }

  openDetailsWithState(rota, tipo, titulo, data) {
    let navigationExtras: NavigationExtras = {
      state: {
        tipo: tipo,
        titulo:titulo,
        data: data
      }
    };
    this.router.navigate([rota], navigationExtras);
  }

}
