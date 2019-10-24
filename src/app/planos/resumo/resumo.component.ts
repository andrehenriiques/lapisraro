import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.scss']
})
export class ResumoComponent implements OnInit {

  //Variáveis dos itens selecionados das Categorias no Resumo
  @Input() public receiveResumo: number;
  @Input() public receiveResumo2: number;
  @Input() public receiveResumo3: number;

  //Variáveis que serão deletadas no resumo, serão emitidas para as Categorias
  @Output() public deleteNumber = new EventEmitter<number>();
  @Output() public deleteNumber2 = new EventEmitter<number>();
  @Output() public deleteNumber3 = new EventEmitter<number>();

  public empty : boolean = true;
  
  public somarResumo: number;

  constructor() { }

  /**
   * Variáveis incializadas com zero
   */
  ngOnInit() {
    this.receiveResumo = 0
    this.receiveResumo2 =0
    this.receiveResumo3 = 0
    this.somarResumo = 0
  }
  
  /**
   * Cada vez que um item é adicionado o metódo somará os itens automaticamente e caso não tenha 
   * nenhum, chamará o método de inicialização.
   */
  ngOnChanges() {
    if(this.receiveResumo !== 0 || this.receiveResumo2 !== 0 || this.receiveResumo3 !==0){
      this.somaResumo()
    }else{
      this.ngOnInit();
    }
  }
  /**
   * Soma todos os itens
   */
  somaResumo(){
    this.somarResumo =  this.receiveResumo + this.receiveResumo2 + this.receiveResumo3
  }

  /**
   * Método que irá emitir o evento para as categorias de qual item foi removido
   * @param numero 
   */
  excluir(numero: number){
    if (numero == 1) {
      this.deleteNumber.emit(0)
    } else if (numero == 2) {
      this.deleteNumber2.emit(0)
    } else if (numero == 3) {
      this.deleteNumber3.emit(0)
    }
  }

}
