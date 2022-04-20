import { Component } from '@angular/core';

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

}
