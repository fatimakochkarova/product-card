export class Drink {
  #temperature; 

  constructor(name, size, price, temperature) {
    
    if (new.target === Drink) {
      throw new Error("Drink - абстрактный класс, создавать его напрямую нельзя");
    }
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  getInfo() {
    return `${this.name}, ${this.size} мл, ${this.price} руб., ${this.#temperature}°C`;
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(value) {
    if (typeof value !== "number" || Number.isNaN(value) || value < 0 || value > 100) {
      throw new Error("Температура должна быть числом от 0 до 100");
    }
    console.log(`[${this.name}] температура: ${this.#temperature}°C -> ${value}°C`);
    this.#temperature = value;
  }

 
  #prepare() {
    console.log(`[${this.name}] начинаем готовить...`);
    this.makeSteps(); 
    console.log(`[${this.name}] готово`);
  }

  
  makeSteps() {
    throw new Error("Метод makeSteps должен быть реализован в наследнике");
  }

  serve() {
    this.#prepare();
    console.log(`[${this.name}] подаём клиенту, температура ${this.#temperature}°C`);
  }
}