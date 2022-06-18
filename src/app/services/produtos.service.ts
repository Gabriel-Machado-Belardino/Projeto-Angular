import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EMPTY, Observable } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { IProduto } from '../Model/IProduto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private URL: string = 'http://localhost:3000/produtos'

  constructor(private http: HttpClient, private toaste: ToastrService) { }

  buscarTodos(): Observable<IProduto[]>
  {
    return this.http.get<IProduto[]>(this.URL).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro)))
  }

  cadastrar(produto: IProduto) : Observable<IProduto> 
  {
    return this.http.post<IProduto>(this.URL, produto).pipe(
    map(retorno => retorno),
    catchError(erro => this.exibirErro(erro)))
  }

  exibirErro(e: any): Observable<any>
  {
    this.exibirMensagem('Erro!!!', 'Não foi possivel realizar a operação', 'toast-error');
    return EMPTY;
  }

  exibirMensagem(titulo: string, mensagem: string, tipo: string): void 
  {
    this.toaste.show(mensagem, titulo, {closeButton:true, progressBar: true}, tipo);
  }
}
