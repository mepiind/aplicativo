import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ApiService } from '../services/api.service';
import { InAppBrowser,InAppBrowserOptions  } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-lista-normas',
  templateUrl: './lista-normas.page.html',
  styleUrls: ['./lista-normas.page.scss'],
})
export class ListaNormasPage implements OnInit {

  public data:any = null;

  options : InAppBrowserOptions = {
    location : 'no',//Or 'no'
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls
    shouldPauseOnSuspend : 'no' //Android only

};

  constructor(private router: Router,public apiService: ApiService, private theInAppBrowser: InAppBrowser) {
    var rota ='normas';
      apiService.acessorGet( rota,function(resp,este){
        console.log(resp);
        este.data = resp;
      },null,this);//fim do remsoto*/

  }

  public openWithSystemBrowser(url : string){
    let target = "_system";
    this.theInAppBrowser.create(url,target,this.options);
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
