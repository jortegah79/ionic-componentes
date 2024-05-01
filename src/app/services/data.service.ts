import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private http = inject(HttpClient);
  constructor() { }

  getUsuarios() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
}
