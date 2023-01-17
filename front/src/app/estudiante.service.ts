import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  /*   estudiantes = this.socket.fromEvent<any[]>('estudiantes'); */

    headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    httpOptions = {
      headers: this.headers_object
    };

    constructor(private http: HttpClient
     /*  private socket:Socket */) {}


    guardarEstudiante(estudiante:any){
      return this.http.post('http://localhost:3000/api/estudiante',{estudiante},this.httpOptions);
    }

    eliminarEstudiante(_id:string){
      console.log(_id);
      return this.http.delete('http://localhost:3000/api/estudiante/'+_id,this.httpOptions);
    }

    searchEstudiante(cedula_estudiante:string){
      return this.http.post('http://localhost:3000/api/estudiante/searchCedula',{cedula_estudiante},this.httpOptions);
    }
    searchEmail(email_estudiante:string){
      return this.http.post('http://localhost:3000/api/estudiante/searchEmail',{email_estudiante},this.httpOptions);
    }
    editarEstudiante(estudiante:any){
      return this.http.patch('http://localhost:3000/api/estudiante/'+estudiante._id,{estudiante},this.httpOptions);
    }
  }
