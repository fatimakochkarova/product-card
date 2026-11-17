import { Drink } from "./Drink.js";

export class Lemonade extends Drink {
  constructor(name, size, price, flavor, sparkling) {
    super(name, size, price, 20);
    this.flavor = flavor;
    this.sparkling = sparkling;
  }

  getInfo() {
    return `${super.getInfo()}, вкус: ${this.flavor}, газировка: ${this.sparkling ? "да" : "нет"}`;
  }

  makeSteps() {
    console.log(`[${this.name}] смешиваем сироп "${this.flavor}" и добавляем лёд`);
    this.setTemperature(5);
  }
}
