import products from './products.js';
console.log(products);

const productDescriptionsMap = cosmeticsProducts.reduce((accumulator, product) => {
  accumulator[product.title] = product.description;
  
  return accumulator;
}, {}); 

console.log(productDescriptionsMap);



function createCompositionList(compositionArray) {
  return compositionArray
    .map(item => `<li>${item}</li>`)
    .join('');
}


function createProductCardTemplate(product) {
 
  const cardModifierClass = product.isRecommended ? 'product-card--recommended' : '';

  return `
    <article class="product-card ${cardModifierClass}">
      <div class="product-card__image-wrapper">
        <img src="${product.imageUrl}" alt="${product.title}" class="product-card__image">
      </div>
      
      <div class="product-card__content">
        <span class="product-card__skin-type">${product.skinType}</span>
        <h3 class="product-card__title">${product.title}</h3>
        <p class="product-card__description">${product.description}</p>
        
        <div class="product-card__composition">
          <h4 class="product-card__composition-heading">Состав:</h4>
          <ul class="product-card__composition-list">
            ${createCompositionList(product.composition)}
          </ul>
        </div>
        
        <div class="product-card__footer">
          <span class="product-card__price-label">Цена</span>
          <span class="product-card__price-value">${product.price.toLocaleString()} ${product.currency}</span>
        </div>
      </div>
    </article>
  `;
}


const catalogContainer = document.querySelector('.catalog-grid'); 

if (catalogContainer) {
  catalogContainer.innerHTML = cosmeticsProducts
    .map(product => createProductCardTemplate(product))
    .join('');
}