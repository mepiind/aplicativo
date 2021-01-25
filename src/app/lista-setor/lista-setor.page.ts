import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-setor',
  templateUrl: './lista-setor.page.html',
  styleUrls: ['./lista-setor.page.scss'],
})
export class ListaSetorPage implements OnInit {

  public setores = [];

  constructor(private router: Router,public apiService: ApiService) { 
    var rota ='setores/cliente/users' ;
    var jwt = window.localStorage.getItem("jwt");
    this.apiService.acessorPost( rota, {user:  window.localStorage.getItem("usuario"),jwt: jwt} ,function(resp,este){
      este.setores = resp.resp;
      console.log(este.data);

      if(este.setores.length == 1){
        if( este.setores[0].SETOR.toUpperCase() == 'GLOBAL'){
          este.openDetailsWithState('/lista-databook', este.setores[0].ID);
        }
      }

    },null,this);
   }

  ngOnInit() {
  }

  sair(){
    window.localStorage.setItem("jwt", "");
    this.router.navigate(['/home']);
  }

  openDetailsWithState(rota, setor, nomeSetor) {
    let navigationExtras: NavigationExtras = {
      state: {
        setor: setor,
        nomeSetor:nomeSetor
      }
    };
    this.router.navigate([rota], navigationExtras);
  }

}
