import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { Usuario } from 'src/app/core/interface/usuario';
import { UsuarioService } from 'src/app/core/service/usuario.service';


@Component({
  selector: 'app-colaborador',
  templateUrl: './colaborador.component.html',
  styleUrls: ['./colaborador.component.css']
})

export class ColaboradorComponent implements OnInit {

  usuario = {} as Usuario;
  usuarioId: string | null = '';
  UstibbRestante: number = 0;
  currentDate = new Date();

  ref: DynamicDialogRef | undefined;


  constructor(
    private route: ActivatedRoute,
    private service: UsuarioService,
    public dialogService: DialogService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUsuario();
  }

  getUsuario(){
    this.usuarioId = this.route.snapshot.paramMap.get('id');
    this.service.listarColaboradorId(Number(this.usuarioId)).subscribe(response => {
      this.usuario = response;
      this.UstibbRestante = 100 - this.usuario.porcentagem;
    });
  }

  showDynamicDialog(){
    this.ref = this.dialogService.open(ModalComponent, {
      header: 'Adicionar Tarefa',
      width: 'auto',
      height: 'auto'
    });

    this.ref.onClose.subscribe(() => {
      this.router.navigate([`progresso/${this.usuario.id}`]);
    })
  }
}
