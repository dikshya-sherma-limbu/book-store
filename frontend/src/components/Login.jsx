import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [message, setMessage] = useState("");
  const { loginUser, signInWithGoogle } = useAuth();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await loginUser(data.email, data.password);
      alert("User logged in successfully");
      navigate("/");
    } catch (error) {
      setMessage("Error while log in : " + error.message);
    }
  };
  console.log(watch("email")); // watch input value by passing the name of it
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      alert("User logged in successfully");
      navigate("/");
    } catch (error) {
      setMessage("Error while log in with google : " + error.message);
    }
  };
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="h-[calc(100vh-120px)] border flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-secondary shadow-xl inset-shadow-sm rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold text-center">Please Login</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-black text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            {/* register your input into the hook by invoking the "register" function */}
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className=" shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-favourite"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-black text-sm font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className=" shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-favourite"
            />
          </div>
          {message && <p className="text-red-500 text-xs mb-3">{message}</p>}

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-primary hover:bg-favourite font-bold px-8 py-2 focus:outline-none rounded-md items-center"
            >
              Login
            </button>
          </div>
        </form>
        <p className="align-baseline font-medium mt-4 text-sm">
          Haven't an account ? Please{" "}
          <Link to="/register" className="text-favourite hover:text-primary">
            Register
          </Link>
        </p>
        {/*Google Sign In */}
        <div className="mt-4">
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex flex-wrap gap-1 items-center justify-center bg-primary hover:bg-favourite text-black font-semiboldpx-4 py-2 focus:outline-none rounded-md"
          >
            <FaGoogle className="text-2xl" />
            Sign In With Google
          </button>
        </div>
        <p className="mt-5 text-center text-favourite text-xs">
          @2025 Book Store. All rights reversed.
        </p>
      </div>
    </div>
  );
}

export default Login;
