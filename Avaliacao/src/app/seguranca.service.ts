import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class SegurancaService {
  
  constructor(private http: HttpClient) { }

  GerarToken(_param: string){
 
   var Objtoken=new Param();
   Objtoken.token = _param;
   let _headers = new HttpHeaders();
   _headers.append('Access-Control-Allow-Headers', 'Content-Type');
   _headers.append('Access-Control-Allow-Methods', 'POST');
   _headers.append('Access-Control-Allow-Origin', '*');

   const httpOptions = {
    headers: _headers
    };

   console.log("Token",_param);

 
    this.http.post("http://localhost:51860/Seguranca/GerarToken",Objtoken, httpOptions)
        .subscribe(data => {
            console.log("CASSSSS"+data);
    });
  }
   public CallAPI(url:string, _token :string, type: string){
 
   var Objtoken=new Param();
   Objtoken.token = _token;
    let _headers = new HttpHeaders();
    
    
    _headers.append('Access-Control-Allow-Headers', 'Content-Type');
    _headers.append('Access-Control-Allow-Methods', 'GET');
    _headers.append('Access-Control-Allow-Origin', '*');
    _headers.append('app_token', 'test');
    console.log("Token",_token);

    
    const httpOptions = {
      headers: _headers
      };

    if(type.toLowerCase()=="get")
     return this.http.get<any[]>(url,  );
     else
     return this.http.post<any[]>(url,httpOptions)
  }

}
export class Param
{
  public token: string
}
