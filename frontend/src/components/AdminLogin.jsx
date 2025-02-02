import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import getBaseUrl from "../utils/getBaseUrl";
function AdminLogin() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${getBaseUrl()}/api/users/admin`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const auth = response.data;
      if (auth.token) {
        localStorage.setItem("token", auth.token);
        setTimeout(() => {
          localStorage.removeItem("token");
          alert("Session expired. Please login again");
          navigate("/");
        }, 3600000);
      }
      alert("Admin logged in successfully");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error while log in", error);
      setMessage("Error while log in : " + error.message);
    }
  };
  console.log(watch("username")); // watch input value by passing the name of it
  return (
    <div className="h-[calc(100vh-120px)] border flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-secondary shadow-xl inset-shadow-sm rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold text-center">Admin Login</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-black text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Username
            </label>
            {/* register your input into the hook by invoking the "register" function */}
            <input
              {...register("username", { required: "username is required" })}
              type="text"
              name="username"
              id="username"
              placeholder="Username"
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

        <p className="mt-5 text-center text-favourite text-xs">
          @2025 Book Store. All rights reversed.
        </p>
      </div>
    </div>
  );
}

export default AdminLogin;
