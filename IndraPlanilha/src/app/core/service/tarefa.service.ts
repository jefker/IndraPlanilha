import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class TarefaService {

  api = `${environment.api}/Tarefas`;

  constructor(private http: HttpClient) { }

  listarTarefas() {
    return this.http.get<any>(this.api)
  }

  listarTarefasId(id:number) {
    return this.http.get<any>(`${this.api}/${id}`)
  }
}
