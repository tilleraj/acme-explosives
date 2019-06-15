// import util from '../../helpers/util';
import categoryData from '../../helpers/data/categoriesData';
import typeData from '../../helpers/data/typesData';
import productData from '../../helpers/data/productData';
import util from '../../helpers/util';

const writeCategoriesWithTypesWithProducts = (cWtWp) => {
  let domString = '';
  for (let c = 0; c < cWtWp.length; c += 1) {
    domString += `<h3>${cWtWp[c].name}</h3>`;
    domString += '<div class="row">';
    const currentCategory = cWtWp[c];
    for (let t = 0; t < currentCategory.types.length; t += 1) {
      const currentType = currentCategory.types[t];
      for (let p = 0; p < currentType.products.length; p++) {
        const currentProduct = currentType.products[p];
        domString += '<div class="col-12 col-sm-6 col-md-4 col-lg-3">';
        domString += `  <div class="card" id="${currentProduct.id}">`;
        domString += '    <div class="card-body">';
        domString += `      <h5 class="card-title">${currentProduct.name}</h5>`
        domString += `      <p class="p-category">Category: ${currentCategory.name}</p>`
        domString += `      <p class="p-type">Type: ${currentType.name}</p>`
        domString += `      <p class="p-sku">SKU: ${currentProduct.id}</p>`
        domString += `      <p>${currentProduct.description}</p>`
        domString += '    </div>';
        domString += '  </div>';
        domString += '</div>';
      }
    }
    domString += '</div>';
  }
  util.printToDom('products', domString);
};

const initProducts = () => {
  categoryData.loadCategories()
    .then(resp => typeData.getTypesForEachCategory(resp.data.categories))
    .then((categoriesWithTypes) => {
      productData.getProductsForEachType(categoriesWithTypes)
        .then((resp => {
          const cWtWp = resp;
          console.error('inside initProducts', cWtWp);
          writeCategoriesWithTypesWithProducts(cWtWp);
        }))
    })
    .catch(err => console.error('error from initBoards requests', err));
};

export default { initProducts };
