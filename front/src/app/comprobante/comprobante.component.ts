import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comprobante',
  templateUrl: './comprobante.component.html',
  styleUrls: ['./comprobante.component.scss']
})
export class ComprobanteComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navegar(){
    this.router.navigate(['/comprobante'])
  }

}
