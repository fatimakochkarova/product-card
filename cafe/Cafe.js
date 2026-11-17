import { Drink } from "./Drink.js";

export class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getInfo() {
    return `Кафе "${this.name}", адрес: ${this.location}`;
  }

  orderDrink(drink) {
    if (!(drink instanceof Drink)) {
      throw new Error("Заказать можно только напиток");
    }
    console.log(`[${this.name}] новый заказ: ${drink.name}`);
    drink.serve(); 
  }
}
