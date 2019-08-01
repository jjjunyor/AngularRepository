import { Component, OnInit } from '@angular/core';
import {ProdutoService} from './produto.service'
import { Observable } from 'rxjs';
import { Guid } from "guid-typescript";
import { SegurancaService } from '../seguranca.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})

export class ProdutoComponent implements OnInit {
  produto: string[];

private gridApi;
private gridColumnApi
private columnDefs;
private sortingOrder;

public token: Guid;

_Produto: Observable<any>[];
_strToken: string;
  private _produtoService: ProdutoService;
  private _segurancaService: SegurancaService;

  constructor(produtoService: ProdutoService, segurancaService: SegurancaService) { 
    this. _produtoService = produtoService;
    this. _segurancaService = segurancaService;
    
    this._produtoService.getProdutos(this._strToken).subscribe(x=>
      {
        this._Produto =  null;
      });
  }
  onGridReady(param){
    this.gridApi = param.api;
    this.gridColumnApi = param.columnApi;
    param.api.setRowData(this._Produto);
  }

  ngOnInit() {
    this.columnDefs = [
      {headerName: 'Código Produto', field: 'idProduto', sortingOrder:["asc","desc"]},
      {headerName: 'Produto', field: 'desProduto'},
      {headerName: 'Quantidade', field: 'quantidade'},
      {headerName: 'Preço', field: 'valor'}
  ];

 

  }

  GerarTokenFunc(){
    
    this._strToken =  Guid.create().toString();
    this._segurancaService.GerarToken(this._strToken);

  }
  PesquisarFunc(){

    
    this._produtoService.getProdutos(this._strToken).subscribe(x=>
      {
        this._Produto =  x;
      });



    console.log("pesquisar called" +  this._Produto);
  }

}
