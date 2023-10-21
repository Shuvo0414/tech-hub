import { useState } from "react";
import Swal from "sweetalert2";

const CartCard = ({ product }) => {
  const [remainingProduct, setRemainingProduct] = useState();
  const { _id } = product;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("delete confirm");
        fetch(`http://localhost:5001/addToCart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deleteCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your product has been deleted.",
                "success"
              );
              const remaining = product.filter(
                (products) => products._id !== _id
              );
              setRemainingProduct(remaining);
            }
          });
      }
    });
  };

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
        <button
          onClick={() => handleDelete(_id)}
          className="ml-4 bg-blue-600 text-white py-2 px-4 rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartCard;
