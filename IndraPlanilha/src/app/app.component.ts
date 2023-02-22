import { Component } from '@angular/core';
import { LoginService } from './core/service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IndraPlanilha';

  mostrarHeader: boolean = false

  constructor(private loginService: LoginService) {
    
  }

  ngOnInit() {
    this.loginService.mostrarHeader.subscribe(
      mostrar => this.mostrarHeader = mostrar
    );
  }
}
