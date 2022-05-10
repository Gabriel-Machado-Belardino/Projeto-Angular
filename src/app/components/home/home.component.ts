import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  nomeProduto: string = 'Curso de Angular';
  anuncio: string = `O ${this.nomeProduto} está em promoção`;
  idProduto: number = 123;
  precoProduto: number = 2.59;
  promocao: boolean = true;

  constructor() {
    //Variaveis de string com concatenação
    //this.anuncio = 'O ' + this.nomeProduto + 'está em promoção';

    console.log('Nome do Produto: ', this.nomeProduto);
    console.log('Anuncio: ', this.anuncio);
    console.log('Id do Produto: ', this.idProduto);
    console.log('Preço do Produto: ', this.precoProduto);
    console.log('Promoção: ', this.promocao);


    var variavel1;
    let variavel2;
    // const variavel3;

    var idade = 10;
    console.log('Minha idade é ', idade);

    /*
    function ImprimirIdade()
    {
      var idade = 50
      console.log('Minha idade é ', idade);
    }
    ImprimirIdade();
    */


    function ImprimirIdade()
    {
      for(let idade = 30; idade <= 40; idade++)
      {
        console.log('Minha idade dentro do for é', idade);
      }
      console.log('Minha idade fora do for é ', idade);

    }
    ImprimirIdade();

  }

  ngOnInit(): void {
  }

}
