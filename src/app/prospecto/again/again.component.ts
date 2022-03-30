import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-again',
  templateUrl: './again.component.html',
  styleUrls: ['./again.component.css']
})
export class AgainComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  continuar(){
    this.router.navigate(['form'])
  }

}
