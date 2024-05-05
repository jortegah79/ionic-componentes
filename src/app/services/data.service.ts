import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Componente } from '../interfaces/Componente';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private http = inject(HttpClient);
  constructor() { }

  getUsuarios() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  getMenuOpts(){
    return this.http.get<Componente[]>('/assets/data/menu-opts.json');
  }

}
