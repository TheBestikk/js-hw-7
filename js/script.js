import { products } from './data.js';

const container = document.querySelector('#products-container');
const searchInput = document.querySelector('#search-box');
function createProductListTemplate(items) {
    return `
    <ul class="product-list">
      ${items.map(product => `
        <li class="product-item" data-id="${product.id}"> 
          <h2 class="name">${product.name}</h2> 
          <p class="price">Price: $${product.price}</p> 
          <p class="description">${product.description}</p> 
        </li>
      `).join('')}
    </ul>
  `;
}

function renderProducts(items) {
    if (items.length === 0) {
        container.innerHTML = '<p>Нічого не знайдено</p>';
        return;
    }
    container.innerHTML = createProductListTemplate(items);
}

renderProducts(products);

searchInput.addEventListener('input', (e) => {
    const searchQuery = e.target.value.toLowerCase().trim();

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery)
    );

    renderProducts(filteredProducts);
});