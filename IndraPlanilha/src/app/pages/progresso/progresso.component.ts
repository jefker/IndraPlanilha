import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/core/interface/usuario';
import { UsuarioService } from 'src/app/core/service/usuario.service';


@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css'],
})

export class ProgressoComponent implements OnInit {

  usuario: Usuario[] = [];

  metaAtingida: number = 0;
  metaNaoAtingida: number = 0;

  loading: boolean = false;

  activityValues: number[] = [0, 100];

  currentDate = new Date();

  
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.loading = true;
    this.usuarioService.listarColaboradores().subscribe(colaboradores => {
      this.usuario = colaboradores;
      console.log(this.usuario)
      this.loading = false;

      this.usuario.forEach(value => {
        if(value.porcentagem === 100) {
          this.metaAtingida++;
        } else {
          this.metaNaoAtingida++;
        }
      });
    });
  }
}
