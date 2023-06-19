import { FC } from "react";
import { ProductType } from "../../../utils/type";

type ProductProp = {
  product: ProductType;
};
const ProductListItem: FC<ProductProp> = ({ product }) => {
  const { name, price, imageUrl, quantityInStock } = product;
  return (
    <tr className="border-b border-gray6 last:border-0 text-start mx-9">
      <td className="pr-8 py-5 whitespace-nowrap border border-slate-300">
        <a href="#" className="flex items-center space-x-5">
          <img
            className="w-[60px] h-[60px] rounded-md"
            src={imageUrl[0]}
            alt=""
          />
          <span className="font-medium text-heading text-hover-primary transition">
            {name}
          </span>
        </a>
      </td>
      <td className="px-3 py-3 font-normal text-end border border-slate-300">
        {quantityInStock}
      </td>
      <td className="px-3 py-3 font-normal text-end border border-slate-300">
        ${price}
      </td>

      <td className="px-9 py-3 border border-slate-300">
        <div className="flex items-center space-x-2 text-xl">
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Edit
          </button>

          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductListItem;
