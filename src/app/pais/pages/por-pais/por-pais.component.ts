import { Component } from '@angular/core';
import { Paises } from '../../interfaces/paisDto';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  // termino: string = "";
  flag: boolean = false;
  paises: Paises[] =[];
  placeholder_:string = 'Buscar Pais...'

  constructor(private servicioPais: PaisService) { }

  buscar(termino:string): void {
    if (termino === "") {
      this.flag = true;
    }
    else {
      this.flag = false;
      this.servicioPais.buscarPais(termino).subscribe(resp =>{
        this.paises = resp;
      });
    }



  }



}
