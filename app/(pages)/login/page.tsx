import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <main id="loginpage">
      <div className="page">
        <div className="form">
          <p className="label">Login To my account</p>
          <form action="">
            <div className="control">
              <input type="text" name="email" />
              <label htmlFor="mail"> Email</label>
            </div>

            <div className="control">
              <input type="password" name="password" />
              <label htmlFor="password"> Password</label>
            </div>

            <button className="click">Login</button>

            <p className="redirect">
              Don't have an account ?{" "}
              <Link href="/signup"> Create one here</Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
