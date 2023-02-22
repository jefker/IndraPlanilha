import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../interface/usuario';
import { BehaviorService } from './behavior.service';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private usuarioAutenticado: boolean = false;

  mostrarHeader = new EventEmitter<boolean>();

  constructor(private router: Router, private behaviorSubject: BehaviorService) { }

  fazerLogin(usuario: Usuario){

    if (usuario.email === 'usuario@gmail.com' && usuario.senha === '123456') {
      this.usuarioAutenticado = true;

      this.mostrarHeader.emit(true);

      this.router.navigate(['progresso']);

      usuario.nome = 'Usuario';

      this.behaviorSubject.setUsuario(usuario);
    }
    
    else {
      this.usuarioAutenticado = false;
      
      this.mostrarHeader.emit(false);
    }

  }

}
