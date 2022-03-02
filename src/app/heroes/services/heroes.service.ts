import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environment.baseUrl;
  constructor(
    private http: HttpClient
  ) { }

  getHeroes(){
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`);
  }

  getHeroePorId( id: string ) {
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${ id }`);
  }

  getSugerencias( termino: string ) {
    return this.http.get<Heroe[]>(`${ this.baseUrl }/heroes?q=${ termino }&_limit=6`);
  }

  agregarHeroe( heroe: Heroe ) {
    return this.http.post<Heroe>(`${ this.baseUrl }/heroes`, heroe );
  }

  actualizarHeroe( heroe: Heroe ) {
    return this.http.put<Heroe>(`${ this.baseUrl }/heroes/${ heroe.id }`, heroe );
  }

  borrarHeroe( id: string) {
    return this.http.delete<any>(`${ this.baseUrl }/heroes/${ id }`);
  }

}
