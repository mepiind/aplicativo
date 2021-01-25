import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-databook',
  templateUrl: './databook.page.html',
  styleUrls: ['./databook.page.scss'],
})
export class DatabookPage implements OnInit {

  public data:any;
  public produtos:any;
  public databook:any;

  constructor(private route: ActivatedRoute, private router: Router,public apiService: ApiService,public alertController: AlertController) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.databook = this.router.getCurrentNavigation().extras.state.databook;
    }
    var rota = 'itensDatabooks/' +  this.databook;
    var jwt = window.localStorage.getItem("jwt");
    apiService.acessorPost( rota, {databook:this.databook.DATABOOK,jwt:jwt} ,function(resp,este){
      este.databook = resp.resp;
    },null,this);//fim do remsoto
  }

  ngOnInit() {
  }

 
  sair(){
    window.localStorage.setItem("jwt", "");
    this.router.navigate(['/home']);
  }
}
