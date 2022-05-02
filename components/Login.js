import React from "react";
import { signIn } from "next-auth/react";

function Login() {
  return (
    <div>
      <h1
        className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer"
        onClick={signIn}
      >
        Login to Facebook
      </h1>
    </div>
  );
}

export default Login;
