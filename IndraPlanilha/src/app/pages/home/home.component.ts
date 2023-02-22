import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/core/interface/usuario';
import { LoginService } from 'src/app/core/service/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  usuario = {} as Usuario;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  fazerLogin() {
    this.loginService.fazerLogin(this.usuario);
  }

}
