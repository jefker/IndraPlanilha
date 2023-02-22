import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Step01Component } from 'src/app/pages/step01/step01.component';
import { Step02Component } from 'src/app/pages/step02/step02.component';
import { Step03Component } from 'src/app/pages/step03/step03.component';


const routes: Routes = [
  { path: 'step01', component: Step01Component},
  { path: 'step02', component: Step02Component},
  { path: 'step03', component: Step03Component},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports: [RouterModule]
})

export class StepsRoutingModule { }
