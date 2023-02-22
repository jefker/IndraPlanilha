import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-step03',
  templateUrl: './step03.component.html',
  styleUrls: ['./step03.component.css']
})

export class Step03Component implements OnInit {

  constructor( private router: Router ) {}

  ngOnInit(): void {
  }

  returnPage() {
    this.router.navigate(['step02']);
  }
}
