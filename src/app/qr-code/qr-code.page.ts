import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.page.html',
  styleUrls: ['./qr-code.page.scss'],
})
export class QrCodePage implements OnInit {

  constructor(public alertController: AlertController,private barcodeScanner: BarcodeScanner,private router: Router) {

      this.lerQr();
   }

  ngOnInit() {
  }

  lerQr(){

    
 

    this.barcodeScanner.scan().then(barcodeData => {
           
      console.log('Barcode data', barcodeData);
      var qrcode = barcodeData.text;
      var rota;
      var state = {};
      var params = [];
      params = qrcode.split("/");
      switch (params[3]) {
        case 'produtos_linha_vida':

        console.log('catalogo', params);

          rota = '/catalogos';
          state = {catalogo:params[4]}

           this.navegar(rota,state);

           break;
         
        case 'produto_linha_vida':
          console.log('´prod', params);
            rota = '/produto';
            state = {id:params[4]}
  
            this.navegar(rota,state);

        break;

        case 'databookGroup':
          console.log('grou', params);
          rota = '/lista-databook-ano';
          state = {datagroup:params[4], titulo: params[5]}

          this.navegar(rota,state);
        
        break;

        case 'databook':
          console.log('data', params);
          rota = '/databook';
          state = {databook:params[4]}

          this.navegar(rota,state);
          
        break;
      
        default:
          console.log('home', params);
          this.presentAlertMultipleButtons();
          break;
      }


     }).catch(err => {
         console.log('Error', err);
     });

  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Erro!',
      message: 'Não foi possível identificar o QR CODE, você retornará ao menu inicial',
      buttons: [
         {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');
            
  
            this.navegar('/home',{});
          }
        }
      ]
    });

    await alert.present();
  }

  navegar(rota,state){

    console.log(rota, state);
    
    let navigationExtrasP: NavigationExtras = {
      state: state
    };
    
    this.router.navigate([rota], navigationExtrasP);
  }
  

  
}
