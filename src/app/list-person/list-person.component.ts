import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  arrPeople = [
    {name: 'Phi', age: 22},
    {name: 'Tài', age: 22},
    {name: 'Duy', age: 22}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
