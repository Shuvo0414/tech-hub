import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import GoogleLogin from "../Login/GoogleLogin";

const Register = () => {
  const { creatUser, userUpdateProfile, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const [showPassword, setPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    //get input field value
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");
    // console.log(name, email, photo, password);

    // password validation

    if (password.length < 6) {
      toast.error("Password must be at least 6 character's");
      return;
    }

    // Password must be at least one capital letter
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must be at least one capital letter");
      return;
    }
    // Password must be at least one special character
    if (!/[^a-zA-Z0-9]/.test(password)) {
      toast.error("Password must be at least one special character");
      return;
    }

    // creat a user
    creatUser(email, password)
      .then(() => {
        userUpdateProfile(name, photo).then(() => {
          toast.success("User created successfully");
          navigate("/");
          updateUserProfile();
        });
      })
      .catch(() => {
        toast.error("Email already in use");
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className=" text-xl lg:text-5xl font-bold">
            Please Register Here!
          </h1>
        </div>
        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Full name"
                className="input input-bordered focus:outline-none focus:border-[#0B99FF]"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                required
                className="input input-bordered focus:outline-none focus:border-[#0B99FF]"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image Url</span>
              </label>
              <input
                type="text"
                placeholder="image url"
                name="photo"
                className="input input-bordered focus:outline-none focus:border-[#0B99FF]"
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                name="password"
                required
                className="input input-bordered focus:outline-none focus:border-[#0B99FF]"
              />
              <span
                className=" absolute top-[50px] left-[170px] lg:top-[50px] lg:left-[360px] text-xl"
                onClick={() => setPassword(!showPassword)}
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
                ) : (
                  <AiOutlineEye></AiOutlineEye>
                )}
              </span>
            </div>
            <div className="form-control mt-6 p-0">
              <button className="btn  bg-[#0B99FF] text-white">Register</button>
            </div>
            <label className="label">
              Have an account?
              <Link to="/login" className="label-text-alt link link-hover">
                Please Login
              </Link>
            </label>
            <GoogleLogin></GoogleLogin>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
