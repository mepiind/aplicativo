import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  acessorGet(rota,sucesso,erro,este){

    var resposta = null;

      //cria os parametros
      /*var ob:any={
            parametros:parametros,
      };

      //converte em url
      var param = JSON.stringify(ob);
      var headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');*/
      //  this.http.post('https://mepi.ind.br/framework/' + rota ,param,{headers: headers})
      this.http.get('https://mepi.ind.br/framework/' + rota)
      .subscribe( data => {
        resposta = data;
        sucesso(resposta,este);
      }, error => {
       console.log(error)
      },() => {} );
    }

}
