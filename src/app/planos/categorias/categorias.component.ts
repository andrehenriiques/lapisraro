import { CategoriasService } from './categorias.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from './itens/itens.model';
import { ItensService } from './itens/itens.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  public categoria: string[];

  //Emitirá o evento para o Resumo, recuperando os itens selecionados nas Categorias
  @Output() public outputValueCat = new EventEmitter<number>();
  @Output() public outputValueCat2 = new EventEmitter<number>();
  @Output() public outputValueCat3 = new EventEmitter<number>();

  public itens: Item[]
  public itens2: Item[]
  public itens3: Item[]

  /**
   * Serviço que retornarão os itens e categorias
   * @param categoriaService 
   * @param itensService 
   */
  constructor(
    private categoriaService: CategoriasService,
    private itensService: ItensService
  ) { }

  /**
   * Método de incialização dos itens, recuperados do serviço
   */
  ngOnInit() {
    this.categoria = this.categoriaService.getCategoria()
    this.itens = this.itensService.getItens(1);
    this.itens2 = this.itensService.getItens(2);
    this.itens3 = this.itensService.getItens(3)
  }

  /**
   * Recupera os itens selecionados nas categorias
   * @param event 
   * @param numero 
   */
  receiveValue(event, numero: number) {
    if (numero == 1) {
      this.outputValueCat = event;
    } else if (numero == 2) {
      this.outputValueCat2 = event;
    } else if (numero == 3) {
      this.outputValueCat3 = event;
    }
  }

  /**
   * Quando for excluído do resumo, o item é setado como 0
   * @param event 
   * @param numero 
   */
  excluirNumero(event, numero:number){
    if (numero == 1) {
      this.outputValueCat = event;
    } else if (numero == 2) {
      this.outputValueCat2 = event;
    } else if (numero == 3) {
      this.outputValueCat3 = event;
    }
  }

}
