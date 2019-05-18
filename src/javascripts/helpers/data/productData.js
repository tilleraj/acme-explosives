import axios from 'axios';

const matchTypesWithProducts = (type, products) => {
  const newType = type;
  const matchingProducts = products.filter(product => product.type === type.id);
  newType.products = matchingProducts;
  return newType;
};

const flattenProducts = (tallArray) => {
  const flatArray = [];
  tallArray.forEach((product) => {
    flatArray.push(Object.values(product)[0]);
  });
  return flatArray;
};

const getProductsForEachType = categoriesWithTypes => new Promise((resolve, reject) => {
  axios.get('../db/products.json')
    .then((resp) => {
      const { products } = resp.data;
      const productsArray = flattenProducts(products);
      const newCategories = categoriesWithTypes;
      for (let c = 0; c < categoriesWithTypes.length; c += 1) {
        const newCategory = categoriesWithTypes[c];
        for (let t = 0; t < newCategory.types.length; t += 1) {
          const element = newCategory.types[t];
          const newType = matchTypesWithProducts(element, productsArray);
          // console.error('newType :', newType);
          newCategory.types[t] = newType;
          // console.error('newCategory inside loop: ', newCategory);
        }
        console.error('newCategories.types[category]: ', newCategories[c]);
      }
      console.error('newCategories: ', newCategories);
      resolve(newCategories);
    })
    .catch(err => reject(err));
});

export default { getProductsForEachType };
