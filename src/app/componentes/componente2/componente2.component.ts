import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {

  constructor(private router:Router) { }
nombre: any
apellido: any
direccion: any
celular: any
edad: any
con:any
eda: any

  ngOnInit(): void {
  }
  recuperar(){
    this.nombre=localStorage.getItem('nombre')
    this.apellido=localStorage.getItem('apellido')
    this.direccion=localStorage.getItem('direccion')
    this.celular=localStorage.getItem('celular')
    this.edad=localStorage.getItem('edad')
  }
 
edades(){
  console.log(this.con)
  console.log(this.eda)
  this.con=localStorage.getItem('edad')

  if(this.con<= 17)
  {
   this.eda= "menor de edad"
  }else{
    this.eda= "mayor de edad"
  }
    }
  }