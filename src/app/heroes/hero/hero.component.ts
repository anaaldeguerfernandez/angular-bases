import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'lobezno';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {

    return `${ this.name } - ${ this.age }`;
  }

  changeHero(): void{
    // T O D O (letras y barras juntas) -> para anotar cosas pendientes por hacer.
    // throw 'Método no implementado'; // Para lanzar un mensaje de error en métodos aún no implementados.

    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 25;
  }

  resetForm(): void {
    this.name = 'lobezno';
    this.age = 45;

    // document.querySelector('h1')!.innerHTML = '<h1>Desde Angular</h1>'; -> Selecciona el 1er h1 que encuentra y cambia el texto a "Desde Angular".
    // document.querySelectorAll('h1')!.forEach( element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>';
    // }) // querySelectorAll() -> Lo mismo al anterior, pero seleccionando todos los h1 que encuentra.
  }
}
