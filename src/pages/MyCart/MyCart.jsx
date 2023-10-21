import { useLoaderData } from "react-router-dom";
import CartCard from "../../components/CartCard/CartCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyCart = () => {
  const loadedCartData = useLoaderData();
  const [products, setProducts] = useState(loadedCartData);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const userProducts = loadedCartData.filter(
      (product) => product.email === user.email
    );
    setProducts(userProducts);
  }, [loadedCartData, user]);

  return (
    <div className="flex flex-wrap justify-center">
      {products && products?.length > 0 ? (
        products?.map((product) => (
          <CartCard
            key={product._id}
            product={product}
            products={products}
            setProducts={setProducts}
          />
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
