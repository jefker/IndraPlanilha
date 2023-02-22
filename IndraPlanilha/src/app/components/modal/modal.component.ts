import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Usuario } from 'src/app/core/interface/usuario';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {

  usuario = {} as Usuario;

  items: MenuItem[] = [];

  activeIndex: number = 0;

  stepRotas = [{index: 0, rota: '/step01'}, {index: 1, rota: '/step02'}, {index: 2, rota: '/step03'}];

  
  constructor(
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.router.navigate(['step01'])

    this.items = [
    {
      command: (event: any) => {
        this.activeIndex = 0;
        this.router.navigate([this.stepRotas[0].rota])
      }
    },
    
    {
      command: (event: any) => {
        this.activeIndex = 1;
        this.router.navigate([this.stepRotas[1].rota])
      }
    },
    
    {
      command: (event: any) => {
        this.activeIndex = 2;
        this.router.navigate([this.stepRotas[2].rota])
      }
    }];
  }

  returnPage() {
    const filtroStep = this.stepRotas.filter((rota) => rota.rota === this.router.url);

    if(filtroStep.length) {
      let novaRota = filtroStep[0].index - 1;
      const rotaSelecionada = this.stepRotas.filter((rota) => rota.index == novaRota)

      this.activeIndex = rotaSelecionada[0].index;
      this.router.navigate([rotaSelecionada[0].rota])
    }
  }

  nextPage() {
    const filtroStep = this.stepRotas.filter((rota) => rota.rota === this.router.url);

    if(filtroStep.length) {
      let novaRota = filtroStep[0].index + 1;
      const rotaSelecionada = this.stepRotas.filter((rota) => rota.index == novaRota)

      this.activeIndex = rotaSelecionada[0].index;
      this.router.navigate([rotaSelecionada[0].rota])
    }
  }
  
  enviar() {
    this.confirmationService.confirm({
        message: 'Você tem certeza que deseja enviar as informações para lista de tarefas?',
        accept: () => {
          this.messageService.add({severity:'success', summary: 'Enviado', detail: 'A atividade foi enviada com sucesso!'});
        },
    });
  }
}

