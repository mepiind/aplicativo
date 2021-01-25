import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.page.html',
  styleUrls: ['./servicos.page.scss'],
})
export class ServicosPage implements OnInit {
  public dataRota: any;
  public data =[];
  public titulo: any;
  public controleMenu = [];
  public produtoControle= [];

  constructor(private route: ActivatedRoute, private router: Router,public apiService: ApiService) {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.dataRota = this.router.getCurrentNavigation().extras.state;


        var rota ='menus/tipo/' + this.dataRota.tipo;
        this.titulo = this.dataRota.titulo;


        apiService.acessorGet( rota,function(resp,este){
          console.log(resp);
          este.data = resp;



        },null,this);//fim do remsoto

      }


    });



  }

  recarregaMenu(titulo, categoria){

    this.controleMenu.push({titulo:this.titulo,data:this.data, produtos: this.produtoControle });

    this.titulo = titulo;

      var rota ='menus/categoria/pai/' + categoria;

    this.apiService.acessorGet( rota,function(resp,este){
        console.log(resp);
        este.data = resp;

        var rota ='produtos/categoria/' + categoria;
        este.apiService.acessorGet( rota,function(resp,este){
          console.log(resp);
          este.produtoControle = resp;

        },null,este);//fim do remsoto

      },null,this);//fim do remsoto

  }

  voltaMenu(){

    var array = this.controleMenu.pop();

    this.data =array.data;
    this.titulo = array.titulo;
    this.produtoControle = array.produtos;



  }

  carregaProduto(rota, produto) {
    let navigationExtras: NavigationExtras = {
      state: {
        produto: produto

      }
    };
    this.router.navigate([rota], navigationExtras);
  }

  ngOnInit() {
  }

}
