import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


interface Cidades {
  name: string
}

@Component({
  selector: 'app-step02',
  templateUrl: './step02.component.html',
  styleUrls: ['./step02.component.css']
})

export class Step02Component implements OnInit {

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

  ngOnInit(): void {
  }

  returnPage() {
    this.router.navigate(['step01']);
  }

  nextPage() {
    this.router.navigate(['step03']);
  }
}
