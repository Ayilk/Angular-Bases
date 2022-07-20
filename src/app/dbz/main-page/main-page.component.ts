import { Component } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  
})
export class MainPageComponent  {

  // agregar(event: any){
  //   event.preventDefault();
  //   console.log('Hey')
  // }

  nuevo = {
    nombre: 'Trunks',
    poder: 14000
  }

  agregar(){ 
    console.log(this.nuevo)
  }

  cambiarNombre(event: any){
    console.log(event.target.value)
  }

}
