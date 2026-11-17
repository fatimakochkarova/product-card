export class BeautyProduct {
  constructor(name, category, price) {
    this.name = name;
    this.category = category;
    this.price = price;
  }

  getInfo() {
    return `${this.name} (${this.category}) — ${this.price} ₽`;
  }
}

export class SkincareProduct extends BeautyProduct {
  constructor(name, category, price, ingredients) {
    super(name, category, price);
    this.ingredients = ingredients;
  }

  getFullDescription() {
    return `${this.getInfo()} | Состав: ${this.ingredients.join(', ')}`;
  }
}

export class GiftSet extends BeautyProduct {
  constructor(name, category, price, itemsCount) {
    super(name, category, price);
    this.itemsCount = itemsCount;
  }

  getSetInfo() {
    return `${this.getInfo()} | Количество средств в наборе: ${this.itemsCount} шт.`;
  }
}
