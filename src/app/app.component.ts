import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string = 'Diego';
  age: number = 22;
  img: string = 'https://source.unsplash.com/random';
  btnDisabled: boolean = true;
  person = {
    name: 'Diego',
    age: 22,
    avatar: 'https://source.unsplash.com/random'
  }

  names: String[] = ['Diego', 'Julian', 'Pedro','Santiago', 'César'];
  emojis: String[] = [ '😂' , '🐦', '🐳','🌮', '💚']

  newName: String = '';
  deleteNameIndex: number = -1;

  widthImg: number = 10;

  box = {
    width: 100,
    height: 100,
    background: 'red'
  };

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  ageIncrease() {
    this.person.age++;
  }

  ageDecrease() {
    this.person.age--;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }

  // Sección de My Store
  products: Product[] = [
    {
      name : 'Hojas de Menta',
      price : 200,
      image : './assets/images/mint-leaf-icon.png',
      category: 'Dolores de panza'
    },
    {
      name : 'Ramo de Hierba Buena',
      price : 500,
      image : './assets/images/hierbabuena-icon.png'
    },
    {
      name : 'Flor de Calendula',
      price : 150,
      image : './assets/images/calendula-icon.png'
    },
  ]
}
