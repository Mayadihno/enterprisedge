import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebaseConfig";
import { ICONS } from "../../static/icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");
  const [formErrors, setFormErrors] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Reset previous errors
    setFormErrors({ email: "", password: "" });
    setError("");

    let hasError = false;

    if (!email.trim()) {
      setFormErrors((prev) => ({ ...prev, email: "Email is required" }));
      hasError = true;
    }

    if (!password.trim()) {
      setFormErrors((prev) => ({ ...prev, password: "Password is required" }));
      hasError = true;
    }

    if (hasError) return;

    setLoading(true);
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("accessToken", user?.user?.accessToken);
      setLoading(false);
      navigate("/admin-dashboard", { replace: true });
    } catch (error) {
      if (
        error.code === "auth/wrong-password" ||
        error.code === "auth/user-not-found"
      ) {
        setError("Incorrect Email or Password");
      } else {
        setError("Something went wrong. Please try again.");
      }
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      <div className="flex justify-center items-center h-screen bg-[#F5F5F4]">
        <div className="relative w-[95%] md:w-[30%] h-[40vh] md:h-[55vh] bg-white rounded-md p-4 shadow-sm md:mt-0 mt-[-50px] ">
          <div className="pt-10">
            <h3 className="text-xl font-[500] text-center text-black">
              Admin Login
            </h3>
            <form onSubmit={handleLogin} className="pt-4">
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-3 outline-none rounded-md shadow-sm bg-[#F5F5F4] w-full"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
              )}
              <div className="relative pt-6">
                <input
                  type={!visible ? "password" : "text"}
                  autoComplete="current-password"
                  placeholder="Password"
                  className="px-4 py-3 outline-none rounded-md shadow-sm bg-[#F5F5F4] w-full"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {formErrors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.password}
                  </p>
                )}
                {visible ? (
                  <ICONS.eyelock
                    className="absolute top-9 right-2 cursor-pointer"
                    size={20}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <ICONS.eye
                    className="absolute top-9 right-2 cursor-pointer"
                    size={20}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
              {error && (
                <div className="text-red-500 text-sm py-1">{error}</div>
              )}
              <div className="flex justify-between items-center pt-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="checked"
                    className="md:mt-1 mt-0 w-[15px] h-[15px]"
                  />
                  <p className="pl-2 md:text-sm text-xs">Remember me</p>
                </div>
                <h3 className="text-sm cursor-pointer font-[500] text-[#DE324D]">
                  Forget Password?
                </h3>
              </div>
              <div className="md:mt-5 mt-6 flex justify-center">
                <button
                  type="submit"
                  className="px-8 uppercase py-3 bg-[#000] font-[500] cursor-pointer hover:bg-[#DC143C] rounded-sm text-white"
                >
                  {loading ? "Please wait..." : "Login"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
