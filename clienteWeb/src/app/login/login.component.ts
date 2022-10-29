import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id: number = 0;
  password:string = "";

  constructor(private route:Router, private aoth:UserService, private cookie: CookieService, private router: Router, private httpClient:HttpClient) { }

  ngOnInit(): void {

  }
  onSubmit(){
    this.httpClient.get<boolean>("http://25.55.195.113:4500/api/Login/cliente/"+this.id+"/"+this.password).
    subscribe({next: (data) => {
      console.log(data)
      if(data){
      this.cookie.set("token", this.id.toString(),4,"/");
      console.log(this.id);
      this.route.navigate(["gestion-citas",this.id]);
    }}});
  }
}
