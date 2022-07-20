import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {

  heroes:string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Capitan America']
  heroeBorrado: string = '';

  borrarHeroe(){
    console.log('borrando...')
    let heroeBorrado = this.heroes.shift()
    this.heroeBorrado = heroeBorrado || '';
  }
}
