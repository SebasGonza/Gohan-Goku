import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paises } from '../interfaces/paisDto';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) { }

  private url: string = "https://restcountries.com/v3.1/";
  private peticion: string = "";

  buscarPais(argumento: string): Observable<Paises[]> {
    this.peticion = 'name/' + argumento;
    return this.http.get<Paises[]>(this.url + this.peticion);
  }

  buscarCapital(argumento: string): Observable<Paises[]> {
    this.peticion = 'capital/' + argumento;
    return this.http.get<Paises[]>(this.url + this.peticion);
  }

  buscarAlpha(argumento: string): Observable<Paises[]> {
    this.peticion= 'alpha/'+ argumento;
    return this.http.get<Paises[]>(this.url+this.peticion);
  }
}

