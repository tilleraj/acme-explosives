import axios from 'axios';

// const getProductsForEachType = types => new Promise((resolve, reject) => {
//   axios.get('../db/products.json')
//     .then((resp) => {
//       const { products } = resp.data;
//       const typesWithProducts = types.map((type) => {
//         const newType = type;
//         const matchingProducts = products.filter(product => product.type === type.id);
//         newType.products = matchingProducts;
//         return newType;
//       });

//       resolve(typesWithProducts);
//     })
//     .catch(err => reject(err));
// });


// const getProductsForEachType = categoriesWithTypes => new Promise((resolve, reject) => {
//   axios.get('../db/products.json')
//     .then((resp) => {
//       const { products } = resp.data;
//       const categoriesWithTypesWithProducts = categoriesWithTypes.map((category) => {
//         const newCategory = category;
//         newCategory.types.forEach((type) => {
//           console.error('from newCategory.types.forEach', type);
//           console.error(products);
//         });
//         return newCategory;
//       });

//       resolve(categoriesWithTypesWithProducts);
//     })
//     .catch(err => reject(err));
// });

const getProductsForEachType = categoriesWithTypes => new Promise((resolve, reject) => {
  axios.get('../db/products.json')
    .then((resp) => {
      const { products } = resp.data;
      console.error('inside getProductsForEachType', products);
      console.error('inside getProductsForEachType', categoriesWithTypes);
      resolve(products);
    })
    .catch(err => reject(err));
});

export default { getProductsForEachType };
