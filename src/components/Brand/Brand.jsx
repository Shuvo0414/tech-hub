import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Brand = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("https://assignment-10-server-side-eight-sigma.vercel.app/brands")
      .then((response) => response.json())
      .then((data) => {
        setBrands(data);
      })
      .catch((error) => {
        console.error("Error fetching brands:", error);
      });
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-24">Shop By Brands</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {brands.map((brand) => (
          <div key={brand._id} className="m-4">
            <Link
              to={`/brandProducts/${brand.name}`}
              style={{ textDecoration: "none" }}
            >
              <h2 className="text-xl font-semibold">{brand.name}</h2>
              <img src={brand.brand_image} alt={brand.name} width="150" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;
