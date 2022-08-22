import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent{

  @Output() enviar = new EventEmitter<string>();
  termino: string = "";
  @Input() placeholder:string = "";
  constructor() { }


  buscar():void{
    this.enviar.emit(this.termino);
  }

}
