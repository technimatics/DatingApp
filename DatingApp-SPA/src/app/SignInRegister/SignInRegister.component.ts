import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
declare var $:any;
@Component({
  selector: 'app-SignInRegister',
  templateUrl: './SignInRegister.component.html',
  styleUrls: ['./SignInRegister.component.scss'],
})
export class SignInRegisterComponent implements OnInit {

  model: any ={};
  rmodel: any ={};

  constructor(private authService: AuthService) { }

  ngOnInit() {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");
    if(sign_up_btn&&container&&sign_in_btn){
    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });

    }
  }
  login(){
    this.authService.login(this.model).subscribe(next=>{
      console.log('Logged in successfully');
    }, error =>{
      console.log('Logging Failed')
    })
  }
  loggedIn(){
    const token = localStorage.getItem('token');
    return !!token;
  }
  logout(){
    localStorage.removeItem('token');
    console.log('logged out');
  }
  register(){
    this.authService.register(this.rmodel).subscribe(()=>{ console.log('Registration successful');}, error =>{
      console.log(error)
    });
  }
}
