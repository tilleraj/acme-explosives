import products from '../products/products';

const bindEvents = () => {
  document.getElementById('fireworks').addEventListener('click', () => {
    products.initProducts('Fireworks');
  });
  document.getElementById('demolition').addEventListener('click', () => {
    products.initProducts('Demolition');
  });
};

const select = () => {
  bindEvents();
};

export default { select };
