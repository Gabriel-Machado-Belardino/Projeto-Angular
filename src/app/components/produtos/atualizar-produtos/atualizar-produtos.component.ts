import { ActivatedRoute, Router } from '@angular/router';
import { IProduto } from 'src/app/Model/IProduto.model';
import { ProdutosService } from 'src/app/services/produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atualizar-produtos',
  templateUrl: './atualizar-produtos.component.html',
  styleUrls: ['./atualizar-produtos.component.css']
})
export class AtualizarProdutosComponent implements OnInit {

  produto: IProduto = {
    nome: '',
    validade: new Date(),
    precoProduto: 0
  };

  constructor(
    private produtosService:ProdutosService,
    private router: Router,
    private activateRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.activateRouter.snapshot.paramMap.get('id'));
    this.produtosService.buscarPorId(id).subscribe(retorno =>{
      this.produto = retorno;
    });
  }

  salvarProduto(): void{
    this.produtosService.atualizar(this.produto).subscribe(retorno =>{
      this.produto = retorno;
      this.produtosService.exibirMensagem(
        'Sistema',
        `${this.produto.nome} foi atualizado com sucesso.`,
        'toast-success'
      );
      this.router.navigate(['/produtos'])
    });
  }

}
