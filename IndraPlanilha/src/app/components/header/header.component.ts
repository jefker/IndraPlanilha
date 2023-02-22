import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/core/interface/usuario';
import { BehaviorService } from 'src/app/core/service/behavior.service';
import { LoginService } from 'src/app/core/service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuario = {} as Usuario;

  constructor(private loginService: LoginService, private behaviorSubject: BehaviorService) { }

  ngOnInit(): void {

    this.behaviorSubject.getUsuario().subscribe(usuario => {
      this.usuario.nome = usuario.nome;
    });
  }

}
