import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { IProduto } from 'src/app/Model/IProduto.model';
import { ProdutosService } from 'src/app/services/produtos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  produto: IProduto = {
    nome: '',
    validade: new Date(),
    precoProduto: 0
  };

  constructor(private produtosService:ProdutosService, private router: Router) { }

  ngOnInit(): void {
  }

  salvarProduto(): void{
    this.produtosService.cadastrar(this.produto).subscribe(retorno =>{
      this.produto = retorno;
      this.produtosService.exibirMensagem(
        'Sistema',
        `${this.produto.nome} foi cadastrado com sucesso. ID: ${this.produto.id}`,
        'toast-success'
      );
      this.router.navigate(['/produtos'])
    });
  }
}
