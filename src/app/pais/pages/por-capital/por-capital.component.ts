import { Component } from '@angular/core';
import { Paises } from '../../interfaces/paisDto';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

    // termino: string = "";
    flag: boolean = false;
    paises: Paises[] =[];
    placeholder_:string = "Buscar Capital..."
  
    constructor(private servicioPais: PaisService) { }
  
    buscar(termino:string): void {
      if (termino === "") {
        this.flag = true;
      }
      else {
        this.flag = false;
        this.servicioPais.buscarCapital(termino).subscribe(resp =>{
          this.paises = resp;
        });
      }
  
  
  
    }
  
  
  
  }
