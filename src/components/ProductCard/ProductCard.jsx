import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 m-4 w-64">
      <img
        src={product.photo}
        alt={product.name}
        className="w-full h-40 object-cover"
      />
      <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
      <p>{product.brandname}</p>
      <p>${product.price}</p>
      <p>Rating: {product.rating}</p>
      <div className="mt-4">
        <Link
          to={`/product/${product._id}`}
          className="text-blue-600 font-semibold"
        >
          <button className="ml-4 bg-blue-600 text-white py-2 px-4 rounded-md">
            Details
          </button>
        </Link>
        <button className="ml-4 bg-green-600 text-white py-2 px-4 rounded-md">
          Update
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
