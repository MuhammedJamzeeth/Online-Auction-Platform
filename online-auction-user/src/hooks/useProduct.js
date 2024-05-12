import axios from "axios";

const useProduct = () => {
  const getProduct = async () => {
    const response = await axios.get("http://localhost:8080/products");
    console.log(response.data);
    return response.data;
  };
  const getCategory = async () => {
    const response = await axios.get("http://localhost:8080/category");
    console.log(response.data);
    return response.data;
  };

  return { getProduct, getCategory };
};

export default useProduct;
