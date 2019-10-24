import { Injectable } from '@angular/core';
import { Item } from './itens.model';

@Injectable({
  providedIn: 'root'
})
export class ItensService {

  constructor() { }

  /**
   * Serviço de Itens, contendo o ID do item e o Valor
   * @param valor 
   */
  getItens(valor: number): Item[] {
    if (valor == 1) {
      return [
        { id: "ITEM 1", valor: 150 },
        { id: "ITEM 2", valor: 110 },
        { id: "ITEM 3", valor: 185.67 }
      ]
    }
    else if(valor ==2){
      return [
        { id: "ITEM 1", valor: 150 },
        { id: "ITEM 2", valor: 110 },
        { id: "ITEM 3", valor: 185.67 },
        { id: "ITEM 4", valor: 251.14 },
      ]
    }
    else if(valor ==3){
      return [
        { id: "ITEM 1", valor: 150 },
        { id: "ITEM 2", valor: 110.50 }
      ]
    }
  }
}
