const username: string | number = 'carubardd';
const sum = (a: number, b: number) => {
  return a + b;
}
sum(1,3);

class Person {
  constructor(public age: number, public lastName: string) {}
}

const diego = new Person(22, 'Hernandez');
diego.age;
