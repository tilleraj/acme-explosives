// import util from '../../helpers/util';
import categoryData from '../../helpers/data/categoriesData';
import typeData from '../../helpers/data/typesData';
import productData from '../../helpers/data/productData';

// const writeProducts = (products) => {
//   let domString = '';
//   products.forEach((product) => {
//     domString += '<div class="col-3">';
//     domString += `<div id='${product.id}' class="card p-2">`;
//     domString += '<div class="card-body">';
//     domString += `<h5 class="card-title">${product.name}</h5>`;
//     domString += `<button class="btn btn-warning see-pins">${product.pins.length} Pins</button>`;
//     domString += '</div>';
//     domString += '</div>';
//     domString += '</div>';
//   });
//   util.printToDom('products', domString);
// };

const initProducts = () => {
  categoryData.loadCategories()
    .then(resp => typeData.getTypesForEachCategory(resp.data.categories))
    .then((categoriesWithTypes) => {
      productData.getProductsForEachType(categoriesWithTypes);
    })
    // const productsResponse = productData.getProductsForEachType(categoriesWithTypes);
  // .then(resp => pinsData.getPinsForEachBoard(resp.data.boards))
  // .then((boardsWithPins) => {
  //   writeProducts(boardsWithPins);
  // })
  .catch(err => console.error('error from initBoards requests', err));
};

export default { initProducts };
