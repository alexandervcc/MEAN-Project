import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-register',
  templateUrl: './table-register.component.html',
  styleUrls: ['./table-register.component.scss']
})
export class TableRegisterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navegar(){
    this.router.navigate(['/registro-comprobante'])
  }

}
