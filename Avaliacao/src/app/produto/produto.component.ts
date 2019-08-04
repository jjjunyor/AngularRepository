import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './produto.service'
import { Observable } from 'rxjs';
import { Guid } from "guid-typescript";
import { SegurancaService } from '../seguranca.service';
import { stringify } from 'querystring';

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
    this._produtoService = produtoService;
    this._segurancaService = segurancaService;
    var rowData = [];
    this.columnDefs = [
      { headerName: 'Código Produto', field: 'idProduto', sortingOrder: ["asc", "desc"] },
      { headerName: 'Produto', field: 'desProduto' },
      { headerName: 'Quantidade', field: 'quantidade' },
      { headerName: 'Preço', field: 'valor' }
    ];
    this._Produto = null;
    this._Produto = rowData;


  }


  ngOnInit() {
  }

  GerarTokenFunc() {

    this._strToken = Guid.create().toString().substr(0, 17);
    this._segurancaService.GerarToken(this._strToken);
    this._Produto = null;
    console.log("pesquisar called" + this._strToken);
  }
  PesquisarFunc() {



    if (this._strToken == "" || this._strToken == null) {
      alert("deve gerar o token primeiro");
    } else {
      this._produtoService.getProdutos(this._strToken).subscribe(x => {
        this._Produto = x;
      });
      this._strToken = "";

    }
  }

}
