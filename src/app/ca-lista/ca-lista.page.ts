import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-ca-lista',
  templateUrl: './ca-lista.page.html',
  styleUrls: ['./ca-lista.page.scss'],
})
export class CaListaPage implements OnInit {

  public codCa:any = "";
  public data:any;

  constructor(private route: ActivatedRoute, private router: Router,public apiService: ApiService,public alertController: AlertController) {



  }

  ngOnInit() {
  }

  cehcaCA(){
    var rota ='cadastro/' + this.codCa;
    this.apiService.acessorGet( rota,function(resp,este){
      console.log(resp);
      este.data = resp;
      if(resp['#NRRegistroCA'] != undefined ){
        este.openDetailsWithState('/ca-detalhes', este.data);
      } else {

        var mensagem = "";
        if(este.codCa == "") {
           mensagem = "Digite um CA e tente novamente.";
        } else {
          mensagem = 'Não foram encontrados dados sobre o CA: ' + este.codCa
        }
        este.presentAlert(mensagem);
      }
    },null,this);//fim do remsoto
  }

  async presentAlert(mensagem) {
     const alert = await this.alertController.create({
     message: mensagem,

     buttons: ['ok']
    });
    await alert.present();
  }

  openDetailsWithState(rota, ca) {
    let navigationExtras: NavigationExtras = {
      state: {
        ca: ca,
        codCa: this.codCa
      }
    };
    this.router.navigate([rota], navigationExtras);
  }

}
