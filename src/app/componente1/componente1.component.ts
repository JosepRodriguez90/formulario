import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  erDNI = '^[0-9]{8}[A-Za-z]{1}$';
  mostrarInfo ="";

  constructor() { }

  EnviarDatos(nombre, dni, mensaje){

    if(nombre.value ==""){
      alert("El nombre esta vacio");
    }

    if(dni.match(this.erDNI)){
      this.mostrarInfo="Correcto";
    }else{
      this.mostrarInfo="Incorrecto";
    }

    if(mensaje.value.length<2){
      this.mostrarInfo="textocorto";
    }

  }

  ngOnInit(): void {
  }

}
