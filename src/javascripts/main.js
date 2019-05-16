import 'bootstrap';
import '../styles/main.scss';
import products from './components/products/products';

const init = () => {
  console.error('hello from main.js');
  products.initProducts();
};

init();
