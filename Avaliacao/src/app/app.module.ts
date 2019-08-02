import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoComponent } from './produto/produto.component';
import { AgGridModule } from 'ag-grid-angular/main';
import { BindingsComponent } from './bindings/bindings.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    BindingsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents(null),
    HttpClientModule
  ],

  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {

}
