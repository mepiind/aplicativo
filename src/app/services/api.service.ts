import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ApiService  {

  constructor(private http: HttpClient) { }

  acessorPost(rota,parametros,sucesso,erro,este){
    var resposta = null;
    var param = JSON.stringify(parametros);
    var headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json; charset=UTF-8');
    this.http.post('https://mepi.ind.br/framework/' + rota ,param,{headers: headers})
    .subscribe( data => {
      resposta = data;
      sucesso(resposta,este);
    }, error => {
     console.log(error)
    },() => {} );
  }


  acessorGet(rota,sucesso,erro,este){

    var resposta = null;
    var headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json; charset=UTF-8');

      this.http.get('https://mepi.ind.br/framework/' + rota,{headers: headers})
      .subscribe( data => {
        resposta = data;
        sucesso(resposta,este);
      }, error => {
       console.log(error)
      },() => {} );
    }

}
