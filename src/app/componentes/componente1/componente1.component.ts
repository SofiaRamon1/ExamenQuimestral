import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  constructor(private router:Router) { }
nombre: any
apellido: any
direccion: any
celular: number
edad: number

  ngOnInit(): void {
  }

  navegar(){
 this.router.navigate(['componente2'])
  }
datos(){
  localStorage.setItem('nombre', this.nombre.toString())
  localStorage.setItem('apellido', this.apellido.toString())
  localStorage.setItem('direccion', this.direccion.toString())
  localStorage.setItem('celular', this.celular.toString())
  localStorage.setItem('edad', this.edad.toString())
}


}
