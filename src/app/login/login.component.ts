import { Component, OnInit } from '@angular/core';
import { CallApiService } from '../call-api.service';
import { Routes, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private callApi: CallApiService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  login(){
    const username = document.getElementById('username')['value'];
    const password = document.getElementById('password')['value'];
    if(username === '' || password === ''){
      alert('Please enter all field');
    }

    const body = {
      name: username,
      password: password
    }

    this.callApi.login(body).subscribe(res =>{
      const code = res['meta'].code;
      console.log(code);

      if(code === '200'){
        alert('Login Success');
        this.router.navigate(['home'])
        const token = res['data'].token;
        const userInfo = JSON.stringify(res['data'].user);
        // console.log(token,userInfo);
        localStorage.setItem("token", token);
        localStorage.setItem("userInfo", userInfo);

      }


    }, err =>{
      console.log(err);
      const messageErr = err.error.meta.message;
      alert(messageErr)

    })

  }


}
