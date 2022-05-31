import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  listaStrings: string[] = ['Primeiro','Segundo','Terceiro'];
  listaNumeros: Number[] = [15, 15.18, 100];

  objetoModel = {
    nome: 'Gabriel',
    idade: 17,
    altura: 1.75,
    graduado: false

  };

  listaProdutos: any[] = [
    {nome: 'Curso de Angular', precoProduto: 35.56, validade: '2022-06-30', id: 1},
    {nome: 'Curso de Ionic', precoProduto: 50, validade: '2022-06-30', id: 2, promocao: true},
    {id: 3, nome: 'Curso de Ionic Avançado', precoProduto: 50, validade: '2022-06-30'}
    //{nome: '', precoProduto: 0, validade: '0000-00-00', id: 2}
  ];

  constructor() {
    
    for(let item of this.listaStrings)
    {
      console.log(item);
    }

    for(const item of this.listaNumeros)
    {
      console.log(item);
    }

    console.log(this.objetoModel);

   }

  ngOnInit(): void {
  }

}
