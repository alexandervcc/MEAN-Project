import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string;

  constructor(private router:Router) { }

  login() {
    console.log(this.email);
    console.log(this.password);
  }
  navegar(){
    this.router.navigate(['/Registro'])
  }


  ngOnInit(): void {
  }
}
