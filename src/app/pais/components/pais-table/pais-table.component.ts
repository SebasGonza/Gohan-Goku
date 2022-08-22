import { Component, Input} from '@angular/core';
import { Paises } from '../../interfaces/paisDto';

@Component({
  selector: 'app-pais-table',
  templateUrl: './pais-table.component.html',
  styleUrls: ['./pais-table.component.css']
})
export class PaisTableComponent{

  @Input() paises: Paises[] = []
  constructor() { }

}
