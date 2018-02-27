import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Titulo do livro',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glgjpRP'
  };

  livros: string[] = ['Angular 2', 'Java'];

  filtro: string;

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000);
  });

  valorAsync2 = Observable.interval(3000)
  .map(valor => 'Valor assíncrono 2');

  constructor() { }

  ngOnInit() {
  }

  addCurso(valor) {
    this.livros.push(valor);
  }

  obterCursos() {

    if (this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === '') {
      return this.livros;
    }

    return this.livros.filter((v) => {
      if (v.toLocaleLowerCase().indexOf(this.filtro.toLowerCase()) !== -1) {
        return true;
      }
      return false;
    });
  }

}
