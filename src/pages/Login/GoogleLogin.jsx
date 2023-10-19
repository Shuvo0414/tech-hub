import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  //   console.log(name);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("User login successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        toast.error("Invailed User");
      });
  };
  return (
    <>
      <div className="divider">continue with</div>
      <div className=" flex justify-around items-center">
        <button
          onClick={handleLogin}
          className="btn btn-sm bg-[#0B99FF] text-white"
        >
          Google
        </button>
      </div>
    </>
  );
};

export default GoogleLogin;
