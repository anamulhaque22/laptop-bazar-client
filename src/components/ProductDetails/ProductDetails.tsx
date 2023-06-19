import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { ProductType } from "../../utils/type";
import { errorToast } from "../../utils/formValidation";

const minHeight = { minHeigth: "320px" } as React.CSSProperties;

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState({} as ProductType);
  useEffect(() => {
    axiosInstance.get(`/getProduct/${id}`).then((res) => {
      if (res.status === 200) {
        setProduct(res.data.data);
      } else {
        errorToast("Something went wrong");
      }
    });
  }, [id]);

  const { name, price, imageUrl, description } = product;

  return (
    <main className="flex items-center p-10 w-full h-full">
      <div className="border-t border-b pt-16 grid grid-cols-2 gap-8">
        <div className="flex content-center flex-col justify-start">
          <div
            className="flex flex-col w-full object-cover h-4/6 justify-items-start border rounded-lg overflow-hidden"
            style={minHeight}
          >
            <img
              className="w-full h-full object-cover"
              src={imageUrl?.length && imageUrl[0]}
              alt="product image"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col gap-4">
            <h1 className="capitalize text-4xl font-extrabold">{name}</h1>
            <h2 className="text-3xl text-white">${price}</h2>
            <p className="text-l	">{description}</p>
            <div className="flex items-center gap-4 my-6 cursor-pointer ">
              <div className="bg-blue-600 px-5 py-3 text-white rounded-lg w-2/4 text-center">
                Add to bag
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
