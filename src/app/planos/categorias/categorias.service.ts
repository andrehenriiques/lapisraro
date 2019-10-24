import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor() { }

  /**
   * Retorna um array de Categorias
   */
  getCategoria(): string[] {
    return ["Categoria 1", 
            "Categoria 2", 
            "Categoria 3"
          ]
  }

}
