import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import AdvertisementSlider from "../AdvertisementSlider/AdvertisementSlider";

const BrandProducts = () => {
  const { brandName } = useParams();
  // console.log(brandName);
  const lowercaseBrandName = brandName.toLowerCase(); // Convert to lowercase

  // console.log("fetching products for brand:", lowercaseBrandName);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (lowercaseBrandName) {
      fetch(
        `https://assignment-10-server-side-eight-sigma.vercel.app/products/${lowercaseBrandName}`
      )
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
          // console.log("Received data for brand:", data);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    }
  }, [lowercaseBrandName]);

  return (
    <div>
      <AdvertisementSlider></AdvertisementSlider>
      <h1 className="text-4xl font-bold text-center mt-6">
        Products for {brandName ? brandName : "Selected Brand"}
      </h1>
      <div className="flex flex-wrap justify-center">
        {products?.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <div className="no-products-message h-[50vh] mt-24">
            <p className="text-2xl font-bold">
              No products available for {brandName}.
            </p>
            <p className="text-xl font-semibold">
              Check back later for more options!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandProducts;
