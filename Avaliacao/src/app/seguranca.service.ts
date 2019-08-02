import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class SegurancaService {
  constructor(private http: HttpClient) { }

  GerarToken(_param: string) {

    var Objtoken = new Param();
    Objtoken.token = _param;
    let _headers = new HttpHeaders();
    _headers.append('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
    _headers.append('Access-Control-Allow-Methods', 'POSTDELETE, POST, GET, OPTIONS');
    _headers.append('Access-Control-Allow-Origin', '*');

    const httpOptions = {
      headers: _headers
    };


    this.http.post(AppSettings.API_ENDPOINT + "/Seguranca/GerarToken", Objtoken)
      .subscribe(data => {
        console.log("TK" + data);
      });
  }
  public CallAPI(url: string, _token: string, type: string) {

    var Objtoken = new Param();
    Objtoken.token = _token;
    let _headers = new HttpHeaders();


    _headers.append('Access-Control-Allow-Headers', 'Content-Type');
    _headers.append('Access-Control-Allow-Methods', 'GET');
    _headers.append('Access-Control-Allow-Origin', '*');
    _headers.append('app_token', 'test');
    console.log("Token", _token);


    const httpOptions = {
      headers: _headers
    };

    if (type.toLowerCase() == "get")
      return this.http.get<any[]>(url);
    else
      return this.http.post<any[]>(url, httpOptions)
  }

}
export class Param {
  public token: string
}
export class AppSettings {
  public static API_ENDPOINT = 'http://localhost:51860/';
}