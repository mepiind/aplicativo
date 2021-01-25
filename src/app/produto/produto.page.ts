import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {

  

  public data: any = {
    LINK_FOTO : null,
    CATEGORIA: null,
    DESCRICAO: null,
    NORMA: null,
    CODIGO: null,
    MARCA: null,
    INFORMACAO: null,
    ADICIONAIS: null,
    CARACTERISTICAS: null,
    APLICACAO: null,
    MENU_DESC: null,
    CA: null,
    PRODUTO: null

  }

  constructor(private route: ActivatedRoute, private router: Router,public apiService: ApiService) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        if(this.router.getCurrentNavigation().extras.state.id != null){
          apiService.acessorGet( 'produtos/' + this.router.getCurrentNavigation().extras.state.id,function(resp,este){
            console.log(resp);
            este.data = resp.resp;

            console.log(este.data );
  
          },null,this);//fim do remsoto
        } else {
          this.data = this.router.getCurrentNavigation().extras.state.produto;
        }
      
      }
      

    });
   }

  ngOnInit() {
  }

}
