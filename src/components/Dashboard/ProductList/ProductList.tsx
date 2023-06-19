import { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axiosInstance";
import ProductListItem from "./ProductListItem";
import { ProductType } from "../../../utils/type";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axiosInstance.get("/getproducts").then((res) => {
      if (res.status === 200) {
        setProducts(res.data.data);
      }
    });
  }, []);
  return (
    <div className="body-content px-8 py-8">
      <div className="flex justify-between mb-10">
        <div className="page-title">
          <h3 className="mb-0 text-[28px]">Products</h3>
          <ul className=" font-medium flex items-center space-x-3 text-text3">
            <li className="breadcrumb-item text-muted">
              <a href="./product-list.html" className="text-hover-primary">
                Home
              </a>
            </li>
            <li className="breadcrumb-item flex items-center">
              <span className="inline-block bg-text3/60 w-[4px] h-[4px] rounded-full"></span>
            </li>
            <li className="breadcrumb-item text-muted">Product List</li>
          </ul>
        </div>
      </div>

      {/* <!-- table --> */}
      <div className=" rounded-t-md rounded-b-md shadow-xs py-4">
        <div className="relative overflow-x-auto  mx-8">
          <table className="w-full table-fixed text-left border-collapse border border-slate-400">
            <thead className="">
              <tr className="">
                <th className="pr-8 py-3  uppercase font-semibold border border-slate-300">
                  Product
                </th>

                <th className="px-3 py-3  uppercase font-semibold w-[170px] text-end border border-slate-300">
                  QTY
                </th>
                <th className="px-3 py-3  uppercase font-semibold w-[170px] text-end border border-slate-300">
                  Price
                </th>

                <th className="px-9 py-3  uppercase  font-semibold w-[15%] text-end border border-slate-300">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product: ProductType) => (
                <ProductListItem key={product._id} product={product} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
