"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInAction } from "@/action/auth";
import Button from "../Button";
import Input from "../Input";
import { toast } from "react-toastify";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const clientAction = async (formData) => {
    try {
      const username = formData.get("username");
      const password = formData.get("password");
      const response = await signInAction(formData);
      toast.success("Logged in successfully");

      if (response.error) {
        throw new Error(response.error);
      }

      router.push(response.path);

    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen px-4 md:px-8 lg:px-16">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          await clientAction(formData);
        }}
        className="flex flex-col gap-6 border-2 border-blue-600 rounded-2xl p-6 w-full sm:w-96 max-w-lg bg-white shadow-lg"
      >
        <h2 className="text-2xl text-center font-semibold text-blue-600 mb-4">Login</h2>

        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="font-medium text-gray-700">Username</label>
          <Input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="font-medium text-gray-700">Password</label>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <Button
          type="submit"
          name="Login"
          className="bg-cyan-800 text-white rounded-xl py-3 mt-4 hover:bg-cyan-700 transition"
        />

        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
      </form>

      <div className="flex flex-col gap-6 mt-6 text-center text-gray-600">
        <div>
          <p className="font-medium">Mock user credentials</p>
          <p>User name: <span className="text-indigo-600">user</span></p>
          <p>Password: <span className="text-indigo-600">user</span></p>
        </div>

        <div>
          <p className="font-medium">Mock admin credentials</p>
          <p>User name: <span className="text-indigo-600">admin</span></p>
          <p>Password: <span className="text-indigo-600">admin</span></p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
