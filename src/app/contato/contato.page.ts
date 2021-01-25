import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {

  public data:any = {estado:"",corpo:"",cidade:"",empresa:"",email:"",nome:"",celular:""}

  constructor(public apiService: ApiService,public alertController: AlertController ) {
  }

  sendEmail(){

    if(this.data.corpo == "" || this.data.nome == "" || this.data.email == ""){
      this.presentAlert("Por favor preencha os campos obrigatórios: Nome, email e assunto.");
    } else {
      var rota ='mail/send';
      this.apiService.acessorPost( rota, this.data ,function(resp,este){
        if(resp == 'ok'){
              este.presentAlert("Obrigado por entrar em contato, responderemos seu email assim que possível.");
        } else {
              este.presentAlert("Não foi possível enviar seu contato, tente novamente mais tarde.");
        }
      },null,this);//fim do remsoto
    }


  }

  ngOnInit() {
  }

  async presentAlert(mensagem) {
     const alert = await this.alertController.create({
     message: mensagem,

     buttons: ['ok']
    });
    await alert.present();
  }



}
