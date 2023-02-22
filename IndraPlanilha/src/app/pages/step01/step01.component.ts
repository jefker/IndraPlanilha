import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';


interface Cidades {
  name: string
}

@Component({
  selector: 'app-step01',
  templateUrl: './step01.component.html',
  styleUrls: ['./step01.component.css']
})

export class Step01Component implements OnInit {

  formGroup: FormGroup;
  cidades: Cidades[] = [];


  constructor(private fb: FormBuilder, private router: Router) {
    
    this.formGroup = this.fb.group({
      nome: this.fb.control(''),
      cpf: this.fb.control(''),
      nascimento: this.fb.control(''),
      cidade: this.fb.control(''),

      desabilitar: [{value: '', disabled: true}],
    });

    this.cidades = [
      {name: ''},
      {name: 'João Pessoa'},
      {name: 'Guarabira'},
      {name: 'Lucena'},
      {name: 'Santa Rita'},
      {name: 'Mamanguape'},
      {name: 'Jacumã'}
    ];
  }

  ngOnInit() {}

  nextPage() {
    this.router.navigate(['step02']);
  }

}
