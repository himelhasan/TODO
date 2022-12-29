import { useContext } from "react";
// import google from "../public/icons/google.svg";
import logo from "../public/logo.png";
import { AuthContext } from "../Context/AuthProvider";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FiLogIn } from "react-icons/fi";

const Login = () => {
  const { googleSignIn, loginWithEmailPassword } = useContext(AuthContext);

  //   const navigate = useNavigate();
  //   const location = useLocation();
  //   const from = location.state?.from?.pathname || "/";

  const handleLoginWithEmailPassword = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email, password);

    loginWithEmailPassword(email, password)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        from.reset();
      })
      .then((err) => {
        console.error(err);
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        // if (user) {
        //   navigate(from, { replace: true });
        // }
      })
      .then((err) => {
        console.error(err);
      });
  };

  return (
    <div className="flex items-center  p-4 bg-gray-100 lg:justify-center px-10 justify-center">
      <div className="flex flex-col overflow-hidden bg-white shadow-2xl max md:flex-row md:flex-1 lg:max-w-screen-md rounded-lg p-10">
        <div className="p-5 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700">Account Login</h3>
          <form
            onSubmit={handleLoginWithEmailPassword}
            action="#"
            className="flex flex-col space-y-3 my-20 "
          >
            <div className="flex flex-col space-y-3 my-2">
              <label htmlFor="email" className="text-sm font-semibold text-gray-500">
                Email address
              </label>
              <input
                name="email"
                type="email"
                id="email"
                autoFocus
                required
                className="px-4 py-2 text-black dark:text-gray-200 transition duration-300 border border-violet-300 rounded-full focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex flex-col space-y-3 my-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-semibold text-gray-500">
                  Password
                </label>
                <Link
                  href="#"
                  className="text-sm text-primary hover:underline focus:text-yellow-800"
                >
                  Forgot Password?
                </Link>
              </div>
              <input
                name="password"
                type="password"
                id="password"
                required
                className="px-4 py-2 text-black dark:text-gray-200 transition duration-300 border border-violet-300 rounded-full focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex bg-pink-600 items-center justify-center px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-primary rounded-full shadow-xl hover:bg-violet-800 focus:outline-none focus:ring-blue-200 focus:ring-4 group"
              >
                Log in
                <FiLogIn className="text-xl group-hover:ml-[6px] transition-all ease-in-out duration-500" />
              </button>
            </div>
            <div className="flex flex-col space-y-5">
              <span className="flex items-center justify-center space-x-2">
                <span className="h-px bg-yellow-400 w-14"></span>
                <span className="font-normal text-gray-500">or login with</span>
                <span className="h-px bg-yellow-400 w-14"></span>
              </span>
              <div className="flex flex-col space-y-4">
                <Link
                  href="#"
                  onClick={handleGoogleLogin}
                  className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 group hover:bg-[#237539]  focus:outline-none  rounded-full"
                >
                  <button className="flex items-center text-sm font-medium text-[#319f4f] group-hover:text-white">
                    <FcGoogle className="text-xl mr-1" />
                    Google
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
