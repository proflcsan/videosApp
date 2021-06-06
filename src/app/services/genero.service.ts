import { IListaGenero } from './../models/IGenero.models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  lingua = 'pt-BR';

  private apiUrl = "https://api.themoviedb.org/3/";
  private key = "?api_key=ae43a89aa1fccc9f48785ef7451bbbe7";

  constructor(private http: HttpClient, public toastController: ToastController) { }

  buscarGeneros(tipo: string):Observable<IListaGenero>{
    const url = `${this.apiUrl}genre/${tipo}/list${this.key}&language=${this.lingua}`;

    return this.http.get<IListaGenero>(url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  async exibirErro(erro) {
    const toast = await this.toastController.create({
      message: 'Erro ao consultar a API!',
      duration: 2000,
      color: 'danger',
      position: 'middle'
    });
    toast.present();
    return null;
  }
}
