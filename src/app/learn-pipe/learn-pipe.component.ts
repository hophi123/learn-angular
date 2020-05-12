import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-pipe',
  templateUrl: './learn-pipe.component.html',
  styleUrls: ['./learn-pipe.component.css']
})
export class LearnPipeComponent implements OnInit {
  birthday = new Date(2020, 5, 12);
  person = { name: 'Nguyen Hoang Phi', age: 22};
  address = Promise.resolve('54 Nguyen Luong Bang');
  constructor() { }

  ngOnInit(): void {
  }

}
