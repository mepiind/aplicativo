import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-area-cliente',
  templateUrl: './area-cliente.page.html',
  styleUrls: ['./area-cliente.page.scss'],
})
export class AreaClientePage implements OnInit {

  public senha;
  public usuario;
  public jwt ;
  public databook;

  constructor(private route: ActivatedRoute, private router: Router,public apiService: ApiService,public alertController: AlertController) {

    this.jwt =  window.localStorage.getItem('jwt');

    if(this.jwt != null && this.jwt != ""){

      if (this.router.getCurrentNavigation().extras.state) {
        this.databook = this.router.getCurrentNavigation().extras.state.databook;
      }

      if( this.databook != null){
        this.openDetailsWithState('/databook', {databook:  this.databook});
      } else {
        this.openDetailsWithState('/lista-setor', {});
      }

    }

  }

  ngOnInit() {
   

  }



  login(){
   var rota ='users/login';
    this.apiService.acessorPost( rota, {usuario: this.usuario, senha: this.senha} ,function(resp,este){
      if(resp.jwt != undefined){
          window.localStorage.setItem('jwt', resp.jwt);
          console.log(window.localStorage.getItem('jwt'));
          window.localStorage.setItem('usuario', este.usuario );
          if( este.databook != null){
            este.openDetailsWithState('/databook', {databook:  this.databook});
          } else {
            este.openDetailsWithState('/lista-setor', {});
          }
          

      } else {
          este.presentAlert(resp.error);

      }
    },null,this);//fim do remsoto
  }

  openDetailsWithState(rota, state) {
    let navigationExtras: NavigationExtras = {
      state: state
    };
    this.router.navigate([rota], navigationExtras);
  }

  async presentAlert(mensagem) {
     const alert = await this.alertController.create({
     message: mensagem,

     buttons: ['ok']
    });
    await alert.present();
  }

}
