import { Component, OnInit } from '@angular/core';
import { CallApiService } from '../call-api.service';

@Component({
  selector: 'app-call-api',
  templateUrl: './call-api.component.html',
  styleUrls: ['./call-api.component.css']
})
export class CallApiComponent implements OnInit {

  constructor(
    private callApi: CallApiService
  ) { }

  ngOnInit(): void {
    this.callApi.getData().subscribe(res => {
      console.log(res);
    }, err => {
    })
  }



}
