exports.Category = {
  products: ({ id: categoryId }, { filter }, { db }) => {
    const categoryProduct = db.products.filter(
      (product) => product.categoryId === categoryId
    );
    let filteredCategoryProducts = categoryProduct;
    if (filter) {
      if (filter.onSale === true) {
        filteredCategoryProducts = filteredCategoryProducts.filter(
          (product) => {
            return product.onSale;
          }
        );
      }
    }
    return filteredCategoryProducts;
  },
};
