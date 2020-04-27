import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  en = 'Hello';
  vn = 'Xin chao';
  imageUrl = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
  forgot = false;

  toggleForgot(){
    this.forgot = !this.forgot;
  }
}
