import Api from "./baseApi";

const url = "/products";

const getAllProducts = () => {
  return Api.get(url);
};

const deleteProductsById = (productId) => {
  const requestParams = {
    productId,
  };
  return Api.delete(url, { params: requestParams });
};
const createProduct = (productName, description, cost, quantity, insurance) => {
  const body = {
    productName: productName,
    description: description,
    cost: cost,
    quantity: quantity,
    insurance: insurance,
  };
  return Api.post(url, body);
};

const productApi = {
  getAllProducts,
  deleteProductsById,
  createProduct,
};
export default productApi;
