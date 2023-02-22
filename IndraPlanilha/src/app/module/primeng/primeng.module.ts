import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],

  exports: [
    InputTextModule,
    ButtonModule,
    TableModule,
    BrowserModule,
    BrowserAnimationsModule
  ]

})

export class PrimengModule { }
