import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class SegurancaService {
  constructor(private http: HttpClient) { }

  GerarToken(_param: string) {

    var Objtoken = new Seguranca();
    Objtoken.token = _param;
    let _headers = new HttpHeaders();
    _headers.append('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
    _headers.append('Access-Control-Allow-Methods', 'POST, DELETE, POST, GET, OPTIONS');
    _headers.append('Access-Control-Allow-Origin', '*');
   
    const httpOptions = {
      headers: _headers
    };

   
    this.http.post("api/Seguranca/GerarToken",Objtoken, httpOptions ).subscribe(o=>{
    //  console.log("iiiii"+ o)
    });
       
  }
  public CallAPI(url: string, _token: string, type: string) {

   return this.http.get<any[]>(url, {
     headers: new HttpHeaders()
       .set('app_token', _token)
    
   });
  }

}
export class Seguranca {
  public token: string
}
