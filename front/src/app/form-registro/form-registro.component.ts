import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EstudianteService } from '../estudiante.service';


@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.scss']
})
export class FormRegistroComponent implements OnInit{
  ngOnInit(): void {
  }
  title = 'formValidate';
  constructor(
    private formBuilder: FormBuilder,
    private estudianteService: EstudianteService, private router:Router
    ){
    this.FormValidate = this.formBuilder.group({
      nombre_estudiante: ['', Validators.required ],
      cedula_estudiante: ['',[ Validators.required,Validators.minLength(10),Validators.maxLength(10),CustomValidator.numeric ]],
      correo_estudiante: ['', [Validators.required, Validators.email ]],
      telefono_estudiante: ['',[ Validators.required,Validators.minLength(10),Validators.maxLength(10),CustomValidator.numeric ] ],
      tipo_estudiante: ['', Validators.required ],
      curso_estudiante: ['', Validators.required ],
   });
  }

  FormValidate: FormGroup;
  setType(eleccion:any){
    this.FormValidate.get('tipo_estudiante')?.setValue(eleccion);
  }

  setCourse(eleccion:any){
    this.FormValidate.get('curso_estudiante')?.setValue(eleccion);
  }
  navegar(){
    this.router.navigate(['/login'])
  }
  enviar(){
    console.log(this.FormValidate.value);
    this.estudianteService.guardarEstudiante(this.FormValidate.value).subscribe(res=>{
      this.navegar();
    },
    (err) => console.log(err)
    );
  }
}


export class CustomValidator{
  // Number only validation
  static numeric(control: AbstractControl) {
    let val = control.value;

    if (val === null || val === '') return null;

    if (!val.toString().match(/^[0-9]+(\.?[0-9]+)?$/)) return { 'invalidNumber': true };

    return null;
  }
}
