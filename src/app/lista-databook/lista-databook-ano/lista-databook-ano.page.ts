import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-lista-databook-ano',
  templateUrl: './lista-databook-ano.page.html',
  styleUrls: ['./lista-databook-ano.page.scss'],
})
export class ListaDatabookAnoPage implements OnInit {
  public data:any;
  public dados:any = [];
  public titulo;

  public datagroup;

  public databook = {
    DATABOOK : null,
    VALIDADE : null,
    TITULO: null,
    STATUS: null,
    SETOR: null,
    ITENS: []
  }

  public anos = [];

  constructor(private route: ActivatedRoute, private router: Router,public apiService: ApiService,public alertController: AlertController) {
   
    
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.datagroup = this.router.getCurrentNavigation().extras.state.datagroup;
        this.titulo = this.router.getCurrentNavigation().extras.state.titulo;
      }

      var jwt = window.localStorage.getItem("jwt");

      apiService.acessorPost( 'itensDatabooks/databook', {'databook' : this.datagroup, jwt:jwt} ,function(resp,este){
        este.databook['ITENS'] = resp.resp;



        console.log(resp);

          var result = este.databook['ITENS'].reduce(function (r, a) {
              r[a.ANO] = r[a.ANO] || [];
              r[a.ANO].push(a);
              return r;
          }, Object.create(null));

      console.log(result);

          este.anos = Object.keys(result).sort((a,b)=> {
            return parseInt(b) -  parseInt(a);
          });;
          este.dados= result;



      },null,this);//fim do remsoto
    });
    
   
  }

  

  sair(){
    window.localStorage.setItem("jwt", "");
    this.router.navigate(['/home']);
  }

  loaddatabook(rota,databook){
      let navigationExtras: NavigationExtras = {
        state: {
          databook: databook
        }
      };
      this.router.navigate([rota], navigationExtras);
    }

    ngOnInit() {
    }
}
