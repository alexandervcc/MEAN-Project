import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EstudianteService } from '../estudiante.service';
import { Estudiante } from '../model/Estudiante';

@Component({
  selector: 'app-table-register',
  templateUrl: './table-register.component.html',
  styleUrls: ['./table-register.component.scss'],
})
export class TableRegisterComponent implements OnInit, OnDestroy {
  listaEstudiantes: Estudiante[] = [];
  observadorListaEstudiantes?: Subscription;

  constructor(
    private router: Router,
    private estudianteServicio: EstudianteService
  ) {}

  ngOnInit(): void {
    this.refrescarDatosTabla();
  }

  navegar() {
    this.router.navigate(['/registro-comprobante']);
  }

  rechazar(idEstudiante: string) {
    this.estudianteServicio.rechazarEstudiante(idEstudiante).subscribe({
      next: (r) => {
        this.refrescarDatosTabla();
      },
      error(err) {},
    });
  }

  ngOnDestroy(): void {
    this.observadorListaEstudiantes?.unsubscribe();
  }

  private refrescarDatosTabla() {
    this.observadorListaEstudiantes = this.estudianteServicio
      .obtenerEstudiantes('estado_inscripcion=true')
      .subscribe({
        next: (data) => {
          this.listaEstudiantes = data;
        },
        error: () => {},
      });
  }
}
