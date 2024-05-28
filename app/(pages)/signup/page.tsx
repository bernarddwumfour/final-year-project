import Link from "next/link";
import React from "react";

const Signup = () => {
  return (
    <main id="loginpage">
      <div className="page">
        <div className="form">
          <p className="label">Signup For An Account</p>
          <form action="">
            <div className="control">
              <input type="text" name="firstname" />
              <label htmlFor="firstname"> Firstname</label>
            </div>

            <div className="control">
              <input type="text" name="surname" />
              <label htmlFor="surname"> Surname</label>
            </div>

            <div className="control">
              <input type="text" name="email" />
              <label htmlFor="email"> Email</label>
            </div>

            <div className="control">
              <input type="password" name="password" />
              <label htmlFor="password"> Password</label>
            </div>

            <div className="control">
              <input type="password" name="password" />
              <label htmlFor="password">Confirm Password</label>
            </div>

            <button className="click">Signup</button>

            <p className="redirect">
              Already have an account ? <Link href="/login"> Login here</Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Signup;
