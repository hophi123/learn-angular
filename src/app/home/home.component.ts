import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CallApiService } from '../call-api.service';
import { userInfo } from 'os';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private callApi: CallApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const info = localStorage.getItem("token");
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    // const phone_number = userInfo.
    console.log(userInfo);

  }

  // getTrans(){
  //   const body = {
  //     phone_number: userInfo.
  //   }
  //   this.callApi.getListTrans().subscribe(res =>{
  //     console.log(res);


  //   })
  // }

}
