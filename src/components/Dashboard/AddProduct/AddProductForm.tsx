import { useState } from "react";
import axiosInstance from "../../../utils/axiosInstance";
import {
  errorToast,
  isEmpty,
  successToast,
} from "../../../utils/formValidation";
import { getToken } from "../../../utils/sessionHelper";

const AddProductForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [quantityInStock, setquantityInStock] = useState<number>(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [productImage, setProductImage] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setProductImage(e.target.files[0]);
      console.log(e.target.files);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!productImage) {
      errorToast("Please select an image");
    } else if (isEmpty(name)) {
      errorToast("Please enter product name");
    } else if (price === 0) {
      errorToast("Please enter product price");
    } else {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", price);
      formData.append("quantityInStock", quantityInStock);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("productImage", productImage);

      axiosInstance
        .post("/addProduct", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            token: getToken(),
          },
        })
        .then((res) => {
          if (res.status === 200) {
            successToast("Product added successfully");
            resetForm();
          } else {
            errorToast("Something went wrong");
          }
        });
    }
  };
  const resetForm = () => {
    setName("");
    setPrice(0);
    setquantityInStock(0);
    setDescription("");
    setCategory("");
    setProductImage(null);
  };

  return (
    <div className="lg:w-1/2 md:w-[70%] mx-auto mt-20 pb-10 mb:mt-0 md:col-span-8 space-y-2.5">
      {/* <!-- content form --> */}
      <form
        className="shadow-md rounded border-solid	border-2 border-[#212425] px-5 py-5 md:px-16 md:py-9"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-white text-base font-medium mb-2"
            htmlFor="name"
          >
            Product Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Product Title"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-white text-base font-medium mb-2"
            htmlFor="price"
          >
            Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            placeholder="Price"
            value={price || ""}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-white text-base font-medium mb-2"
            htmlFor="quantity"
          >
            Quantity
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            placeholder="Quantity"
            onChange={(e) => setquantityInStock(parseInt(e.target.value))}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-white text-base font-medium mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-white text-base font-medium mb-2"
            htmlFor="category"
          >
            Category
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Category"
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-white text-base font-medium mb-2"
            htmlFor="productimage"
          >
            Product Image
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="file"
            name="image"
            placeholder="Product Image"
            multiple
            onChange={handleFileChange}
          />
        </div>

        <div className="flex items-center justify-between">
          <button className="px-8 py-3 rounded font-medium text-lg text-white mt-6 active">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
