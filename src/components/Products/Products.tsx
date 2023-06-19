import { useEffect, useState } from "react";
import Product from "./Product";
import axiosInstance from "../../utils/axiosInstance";
import { ProductType } from "../../utils/type";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axiosInstance.get("/getproducts").then((res) => {
      if (res.status === 200) {
        setProducts(res.data.data);
      }
    });
  }, []);
  console.log(products);
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-16">Products</h1>
      <div className="flex ">
        {products.map((product: ProductType) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
