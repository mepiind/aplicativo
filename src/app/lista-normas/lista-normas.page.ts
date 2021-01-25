import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-lista-normas',
  templateUrl: './lista-normas.page.html',
  styleUrls: ['./lista-normas.page.scss'],
})
export class ListaNormasPage implements OnInit {

  public data:any = null;

  constructor(private router: Router,public apiService: ApiService) {
    var rota ='normas';
      apiService.acessorGet( rota,function(resp,este){
        console.log(resp);
        este.data = resp;
      },null,this);//fim do remsoto*/

  }

  ngOnInit() {
  }

  openDetailsWithState(rota, data) {
    let navigationExtras: NavigationExtras = {
      state: {
        data:data
      }
    };
    this.router.navigate([rota], navigationExtras);
  }

}
