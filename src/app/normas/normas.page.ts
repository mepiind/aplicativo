import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { InAppBrowser,InAppBrowserOptions  } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-normas',
  templateUrl: './normas.page.html',
  styleUrls: ['./normas.page.scss'],
})


export class NormasPage implements OnInit {

  public data:any = null;

  options : InAppBrowserOptions = {
      location : 'no',//Or 'no'
      hidden : 'no', //Or  'yes'
      clearcache : 'yes',
      clearsessioncache : 'yes',
      zoom : 'yes',//Android only ,shows browser zoom controls
      shouldPauseOnSuspend : 'no' //Android only

  };

  constructor(private route: ActivatedRoute, private router: Router, private theInAppBrowser: InAppBrowser) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.data;
        console.log(this.data);
      }
    });
  }

  ngOnInit() {
  }

  public openWithSystemBrowser(url : string){
      let target = "_system";
      this.theInAppBrowser.create(url,target,this.options);
  }

  /*  public openWithSystemBrowser(url : string){
      let title = url.substring(
        url.lastIndexOf("/") + 1,
        url.lastIndexOf(".pdf")
      );

      let path =  this.file.dataDirectory;

      const transfer = this.fileTransfer.create();
      transfer.download(url, path + title + '.pdf').then(entry => {
        let url = entry.toURL();
        this.fileOpener.open(url, 'application/pdf');
      });
    }*/


}
