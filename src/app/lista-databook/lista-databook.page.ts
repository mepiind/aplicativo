import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-lista-databook',
  templateUrl: './lista-databook.page.html',
  styleUrls: ['./lista-databook.page.scss'],
})
export class ListaDatabookPage implements OnInit {

  public data:any = [];

  public setor;
  public nomeSetor;

  constructor(private route: ActivatedRoute, private router: Router,public apiService: ApiService,public alertController: AlertController) {
   
    
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.setor = this.router.getCurrentNavigation().extras.state.setor;
        this.nomeSetor = this.router.getCurrentNavigation().extras.state.nomeSetor;
      }

      var jwt = window.localStorage.getItem("jwt");

      var rota ='dataBooks/setores' ;

      this.apiService.acessorPost( rota, {jwt:jwt, setor: this.setor},function(resp,este){
        este.data = resp.resp;
        console.log(este.data);
      },null,this);
      

    });
    
   
  }

  sair(){
    window.localStorage.setItem("jwt", "");
    this.router.navigate(['/home']);
  }

  loaddatabook(rota,databook,titulo){
      let navigationExtras: NavigationExtras = {
        state: {
          datagroup: databook,
          titulo: titulo
        }
      };
      this.router.navigate([rota], navigationExtras);
    }

    ngOnInit() {
    }
}
