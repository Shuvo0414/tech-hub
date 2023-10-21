import { useLoaderData } from "react-router-dom";
import CartCard from "../../components/CartCard/CartCard";

const MyCart = () => {
  const loadedCartData = useLoaderData();
  return (
    <div className="flex flex-wrap justify-center">
      {loadedCartData?.length > 0 ? (
        loadedCartData.map((product) => (
          <CartCard key={product._id} product={product} />
        ))
      ) : (
        <div className="no-products-message h-[50vh] mt-24">
          <p className="text-2xl font-bold">Your cart is empty.</p>
          <p className="text-xl font-semibold">
            Add some products to your cart.
          </p>
        </div>
      )}
    </div>
  );
};

export default MyCart;
