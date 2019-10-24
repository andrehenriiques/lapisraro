import { ItensService } from './itens.service';
import { Item } from './itens.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.scss']
})
export class ItensComponent implements OnInit {

  //Array de Itens que serão recuperados nas categorias.
  @Input() public itens: Item[] = []
  @Input() public itens2: Item[] = []
  @Input() public itens3: Item[] = []

  //emissor de variável, passará as variáveis selecionadas para as Categorias
  @Output() public emitValores = new EventEmitter<number>();
  @Output() public emitValores2 = new EventEmitter<number>();
  @Output() public emitValores3 = new EventEmitter<number>();

  constructor(
  ) { }

  ngOnInit() {
  }

  selectValores(valores: number, numero: number) {
    if (numero == 1) {
      this.emitValores.emit(valores)
    } else if (numero == 2) {
      this.emitValores2.emit(valores)
    } else if (numero == 3) {
      this.emitValores3.emit(valores)
    }
  }

}
