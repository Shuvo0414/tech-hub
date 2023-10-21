const AddProduct = () => {
  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const brandname = form.brandname.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const shortDescription = form.shortDescription.value;

    // console.log(photo, name, brandname, type, price, rating, shortDescription);
    const newProducts = {
      photo,
      name,
      brandname,
      type,
      price,
      rating,
      shortDescription,
    };
    console.log(newProducts);

    // send data to server side

    fetch("https://assignment-10-server-side-eight-sigma.vercel.app/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newProducts),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className=" p-4 bg-gray-200">
      <h2 className="text-4xl font-bold text-center mb-4 mt-4">
        Add Your Product
      </h2>
      <form onSubmit={handleAddProduct}>
        {/* image and name */}
        <div className=" md:flex gap-4 ">
          <div className="form-control mb-4 md:w-1/2 ">
            <label htmlFor="image" className="label">
              Image
            </label>
            <input
              type="photo"
              name="photo"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control mb-4  md:w-1/2">
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* brand name and type  */}
        <div className=" md:flex gap-4">
          <div className="form-control mb-4 md:w-1/2">
            <label htmlFor="type" className="label">
              Brand Name
            </label>
            <select name="brandname" className="select select-bordered w-full">
              <option value="apple">Apple</option>
              <option value="samsung">SamSung</option>
              <option value="sony">Sony</option>
              <option value="lg">LG</option>
              <option value="google">Google</option>
              <option value="oneplus">OnePlus</option>
            </select>
          </div>
          <div className="form-control mb-4 md:w-1/2">
            <label htmlFor="type" className="label">
              Type
            </label>
            <select name="type" className="select select-bordered w-full">
              <option value="">Select Type</option>
              <option value="phone">Phone</option>
              <option value="laptop">Laptop</option>
              <option value="headphone">Headphone</option>
              <option value="watch">watch</option>
              <option value="tablet">Tablet</option>
              <option value="television">Television</option>
              <option value="watch">Watch</option>
              <option value="refrigerato">Refrigerato</option>
              <option value="camera">Camera</option>
              <option value="playStation">PlayStation</option>
              <option value="speaker">Speaker</option>
            </select>
          </div>
        </div>
        {/* price and   raiting  */}
        <div className=" md:flex gap-4">
          <div className="form-control mb-4 md:w-1/2">
            <label htmlFor="price" className="label">
              Price
            </label>
            <input
              type="text"
              name="price"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control mb-4 md:w-1/2">
            <label htmlFor="rating" className="label">
              Rating
            </label>
            <input
              type="text"
              name="rating"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* raiting and image  */}

        <div className="form-control mb-4 w-full">
          <label htmlFor="shortDescription" className="label">
            Short Description
          </label>
          <textarea
            name="shortDescription"
            className="textarea textarea-bordered w-full"
          />
        </div>
        <input
          className=" btn btn-block bg-[#0B99FF] hover:bg-[#1978bc]  text-white "
          type="submit"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddProduct;
