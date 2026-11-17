import { Drink } from "./Drink.js";

export class Tea extends Drink {
  constructor(name, size, price, sort, withLemon) {
    super(name, size, price, 20);
    this.sort = sort;
    this.withLemon = withLemon;
  }

  getInfo() {
    return `${super.getInfo()}, сорт: ${this.sort}, лимон: ${this.withLemon ? "да" : "нет"}`;
  }

  makeSteps() {
    console.log(`[${this.name}] заваруем ${this.sort} чай`);
    this.setTemperature(90);
    if (this.withLemon) console.log(`[${this.name}] добавляем лимон`);
  }
}