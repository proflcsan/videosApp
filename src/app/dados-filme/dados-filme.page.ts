import { IFilmeApi } from './../models/IFilmeAPI.model';
import { DadosService } from './../services/dados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-filme',
  templateUrl: './dados-filme.page.html',
  styleUrls: ['./dados-filme.page.scss'],
})
export class DadosFilmePage implements OnInit {

  filme: IFilmeApi;

  generos: string[] = [];

  constructor(public dadosServive: DadosService) { }

  ngOnInit() {
    this.filme = this.dadosServive.pegarDados('filme');
    this.generos = this.dadosServive.pegarDados('generos');
    console.log('Filme Enviado',this.filme);
  }

}
