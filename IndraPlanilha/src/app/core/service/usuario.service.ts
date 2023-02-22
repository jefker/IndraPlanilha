import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  api = `${environment.api}/Colaboradores`;

  constructor(private http: HttpClient) { }

  listarColaboradores() {
    return this.http.get<any>(this.api);
  }

  listarColaboradorId(id: number) {
    return this.http.get<any>(`${this.api}/${id}`);
  }
}