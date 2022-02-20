const products = [
  { name: "phone", model: "nokia 1100", prize: 5000 },
  { name: "watch", model: "huawei 201", prize: 15000 },
  { name: "camera", model: "nikon D32", prize: 35000 },
  { name: "phone", model: "samsung g21", prize: 15000 },
  { name: "laptop", model: "dell z762", prize: 6000 },
  { name: "phone", model: "xaimo note10", prize: 22500 },
  { name: "phone", model: "Lg t87", prize: 45000 },
  { name: "watch", model: "apple 102", prize: 65000 },
  { name: "laptop", model: "lenovo R541", prize: 29000 },
  { name: "camera", model: "canon 90", prize: 89000 },
  { name: "phone", model: "Oppo 45u", prize: 55000 },
];

function searchProduct(products, searchText, prize) {
  let emptyArr = [];
  for (const product of products) {
    if (
      product.model.includes(searchText) ||
      product.name.includes(searchText)
    ) {
      if (product.prize <= prize) {
        emptyArr = product;
      }
    }
  }
  return emptyArr;
}

const search = searchProduct(products, "laptop", 50000);
console.log(search);
