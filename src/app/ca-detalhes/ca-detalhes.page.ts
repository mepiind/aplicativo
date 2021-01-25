import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-ca-detalhes',
  templateUrl: './ca-detalhes.page.html',
  styleUrls: ['./ca-detalhes.page.scss'],
})
export class CaDetalhesPage implements OnInit {

  public dataRota:any;

  constructor(private route: ActivatedRoute, private router: Router,public apiService: ApiService) {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.dataRota = this.router.getCurrentNavigation().extras.state;
        }
     });
   }

  ngOnInit() {
  }

}
