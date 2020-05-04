import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  login(){
    const username = document.getElementById('username')['value'];
    const password = document.getElementById('password')['value'];
    if(username === '' || password === ''){
      alert('Please enter all field');
    }
    const body = {
      username: username,
      password: password
    }

    console.log(JSON.stringify(body));

  }

  Redirect(){
    window.location.href = "http://www.w3schools.com";
    window.location.replace("http://www.w3schools.com");
  }

}
