import { NumberValueAccessor } from "@angular/forms";

export interface IFilme {
  nome: string;
  lancamento: string;
  duracao: string;
  classificacao: number;
  cartaz: string;
  generos: string[];
}
