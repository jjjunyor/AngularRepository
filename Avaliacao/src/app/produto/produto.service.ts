import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SegurancaService } from '../seguranca.service';
import {AppSettings} from '../seguranca.service'

@Injectable({
  providedIn: 'root' 
})


export class ProdutoService {

  constructor(private http: HttpClient) { }

  getProdutos(_token: string){
    var seg =new SegurancaService(this.http); 
    return seg.CallAPI(AppSettings.API_ENDPOINT+"/api/produto",_token,"get");
  }



}
