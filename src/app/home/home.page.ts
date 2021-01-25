import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage {

  public data:any;

  constructor(private router: Router,public apiService: ApiService) {
      var rota ='noticias';
      apiService.acessorGet( rota,function(resp,este){

        este.data = resp;
        console.log(este.data);


      },null,this);//fim do remsoto

  }

  ngOnInit() {
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
