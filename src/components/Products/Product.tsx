import { FC } from "react";
import { ProductType } from "../../utils/type";
import { Link } from "react-router-dom";

type ProductProps = {
  product: ProductType;
};
const Product: FC<ProductProps> = ({ product }) => {
  console.log(product);
  const { _id, name, price, imageUrl } = product;
  return (
    <div className="basis-4/12">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="p-8 rounded-t-lg"
            src={imageUrl[0]}
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <Link to={`/product/${_id}`}>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </Link>
          <div className="flex mt-5 items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${price}
            </span>
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
