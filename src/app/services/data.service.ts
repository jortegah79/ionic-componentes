import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Componente } from '../interfaces/Componente';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private http = inject(HttpClient);
  constructor() { }

  getUsuarios() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  getAlbums() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums')
  }
  getMenuOpts(){
    return this.http.get<Componente[]>('/assets/data/menu-opts.json');
  }
  getHeroes(){
    return this.http.get<Componente[]>('/assets/data/superheroes.json')
    .pipe(
      delay( 1500)
    );
  }


}
