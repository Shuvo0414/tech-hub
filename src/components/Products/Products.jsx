import LgV40 from "../../assets/LG-V40-ThinQ-3.jpg";
import s10 from "../../assets/s10.jpg";
import xboxone from "../../assets/xboxone.jpg";

const Products = () => {
  const lgV40Style = {
    backgroundImage: `url(${LgV40})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };
  const s10Style = {
    backgroundImage: `url(${s10})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };
  const xboxOneStyle = {
    backgroundImage: `url(${xboxone})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };
  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 container mx-auto gap-6 mb-6 mt-6">
      <div className="  text-primary-content " style={lgV40Style}>
        <div className="card-body">
          <h2 className="card-title text-3xl text-white">LG V40</h2>
          <p className=" text-3xl font-medium text-white">Full Vision</p>
          <small className=" text-white text-base">
            Your Life, Through Your Lens
          </small>
          <div className="card-actions justify-end">
            <button className="p-2 rounded-sm text-white bg-[#0B99FF]">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="  text-primary-content " style={s10Style}>
        <div className="card-body">
          <h2 className="card-title text-3xl text-white">GALAXY S10 PLUS</h2>
          <p className=" text-3xl font-medium text-white">SamSung</p>
          <small className=" text-white text-base">
            4 Different Color High Resolution
          </small>
          <div className="card-actions justify-end">
            <button className="p-2 rounded-sm text-white bg-[#0B99FF]">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="  text-primary-content " style={xboxOneStyle}>
        <div className="card-body">
          <h2 className="card-title text-3xl text-white">XBOX ONE</h2>
          <p className=" text-3xl font-medium text-white">
            controller wireless
          </p>
          <small className=" text-white text-base">Save Up to 30% Off</small>
          <div className="card-actions justify-end">
            <button className="p-2 rounded-sm text-white bg-[#0B99FF]">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
