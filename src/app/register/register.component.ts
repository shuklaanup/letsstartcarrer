import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private ser:ServiceService) { }

  ngOnInit(): void {
  }
  title = 'task1';
  page="register";
  regi(){
    this.page="register";
  }
  login(){
    this.page="login";
  }
  signUp(data:any){
    this.ser.signUp(data)
  }
  userlogin(data:any){
    this.ser.userlogin(data)
  }

}
