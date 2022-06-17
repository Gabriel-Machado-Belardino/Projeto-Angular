import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  anuncio: string = `O Curso de Angular está em promoção`;

  nomeProduto: string = 'Curso de Angular';
  idProduto: number = 1;
  precoProduto: number = 35.56;
  promocao: boolean = true;
  foto: string = 'assets/img/crud.png';
  dataValidade: string = '2021-12-31';

  /*
  listaProdutos: any[] = [
    {
      nomeProduto: 'Curso de Angular',
      idProduto: 1,
      precoProduto: 35.56,
      promocao: true,
      foto: 'assets/img/crud.png',
      dataValidade: '2021-12-31'
    },
    {
      nomeProduto: 'Curso de Ionic',
      idProduto: 2,
      precoProduto: 50.00,
      promocao: false,
      foto: 'assets/img/ionic.jpeg',
      dataValidade: '2022-06-30'
    },
    {
      nomeProduto: 'Curso de Ionic Avançado',
      idProduto: 3,
      precoProduto: 50.00,
      promocao: true,
      foto: 'assets/img/ionic.jpeg',
      dataValidade: '2022-06-30'
    },
    {
      nomeProduto: 'Curso de SQL',
      idProduto: 4,
      precoProduto: 73.98,
      promocao: false,
      foto: 'assets/img/sql.png',
      dataValidade: '2022-12-31'
    },
    {
      nomeProduto: 'Curso de JavaScript',
      idProduto: 5,
      precoProduto: 98.73,
      promocao: true,
      foto: 'assets/img/JavaScript.png',
      dataValidade: '2022-12-31'
    },

  ]
  */
  constructor() {
    //Variaveis de string com concatenação
    //this.anuncio = 'O ' + this.nomeProduto + 'está em promoção';
    /*
    console.log('Nome do Produto: ', this.nomeProduto);
    console.log('Anuncio: ', this.anuncio);
    console.log('Id do Produto: ', this.idProduto);
    console.log('Preço do Produto: ', this.precoProduto);
    console.log('Promoção: ', this.promocao);
    */
  }



  ngOnInit(): void {
  }

}
