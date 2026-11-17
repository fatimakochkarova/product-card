import { Drink } from "./Drink.js";

export class Coffee extends Drink { 
  constructor(name, size, price, beans, milk) {
    super(name, size, price, 20);
    this.beans = beans;
    this.milk = milk;
  }

  getInfo() {
    return `${super.getInfo()}, зёрна: ${this.beans}, молоко: ${this.milk}`;
  }

  makeSteps() {
    console.log(`[${this.name}] молотим ${this.beans} и заливаем кипятком`);
    this.setTemperature(85);
  }
}