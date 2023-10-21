import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ProductDetail = ({ product }) => {
  const [cart, setCart] = useState([]);
  const [productDetails, setProductDetails] = useState({});
  const lodadata = useLoaderData();
  console.log(lodadata);
  const { productId } = useParams();

  useEffect(() => {
    const productDetails = lodadata.find(
      (product) => product._id === productId
    );
    setProductDetails(productDetails);
  }, [productId, lodadata]);

  console.log("Product:", product);

  const addToCart = () => {
    setCart([...cart, product]);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="border rounded-lg p-4 w-96">
        <h1 className="text-4xl font-bold text-center">
          {productDetails.name}
        </h1>
        <img
          src={productDetails.photo}
          alt={productDetails.name}
          className="w-full"
        />
        <p className="text-center mt-2 font-bold text-2xl">
          {productDetails.brandname}
        </p>
        <p className="text-center text-xl font-semibold">
          ${productDetails.price}
        </p>
        <p className="text-center text-xl font-semibold">
          Rating: {productDetails.rating}
        </p>
        <p className="text-center text-base font-thin">
          {productDetails.shortDescription}
        </p>
        <button
          className="bg-blue-600 text-white py-2 px-4 rounded-md mt-4 w-full"
          onClick={addToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
