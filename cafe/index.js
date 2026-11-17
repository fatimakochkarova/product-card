import { Cafe } from "./Cafe.js";
import { Coffee } from "./Coffee.js";
import { Tea } from "./Tea.js";
import { Lemonade } from "./Lemonade.js";
import { Drink } from "./Drink.js";

const cafe = new Cafe("Уютное место", "Франкфурт, Zeil 1");
console.log(cafe.getInfo());

const drinks = [
  new Coffee("Латте", 300, 250, "арабика", "овсяное"),
  new Tea("Чай", 400, 180, "зелёный", true),
  new Lemonade("Лимонад", 500, 220, "мята", true),
];

drinks.forEach((d) => console.log(d.getInfo()));
drinks.forEach((d) => cafe.orderDrink(d));

// Проверки принципов
try { new Drink("x", 1, 1, 1); } catch (e) { console.log("Абстракция:", e.message); }
console.log("Приватное поле снаружи:", drinks[0].temperature); // undefined
try { drinks[0].setTemperature(-50); } catch (e) { console.log("Валидация:", e.message); }