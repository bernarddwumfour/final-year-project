"use client";
import Link from "next/link";
import { signIn } from "next-auth/react";
import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Appcontext } from "@/app/contexts/AppcontextProvider";

// OTHER FUNCTIONS

const DisplayingErrorMessagesSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

 const signin = async (data: { email: string; password: string }) => {
  const url: string = process.env.API_URL as string;
  // alert(url)

  try {
    const res = await fetch(`/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return res;
  } catch (error) {
    console.error("Error during sign in:", error);
    return {
      ok: false,
      status: 500,
      json: async () => ({ message: "Internal Server Error" }),
    };
  }
};

const Login = () => {
  const { showpagemessage } = useContext(Appcontext);
  const router = useRouter();
  const [loading,setloading] = useState<boolean>(false)

  return (
    <main id="loginpage">
      <div className="page">
        <div style={{ margin: "2vh 0" }}></div>
        <div className="form">
          <p className="label">Login To my account</p>

          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={DisplayingErrorMessagesSchema}
            onSubmit={async (values, { setSubmitting }) => {
              setloading(true)
              try {
                let res = await signin(values);
                if (res.ok) {
                  let data = await res.json();
                  router.push("/");
                  showpagemessage(`Login Successful`, "success"); 
                  setloading(false)
                  // alert("Login succesful")
                } else {
                  // Display error message
                  let errorData = await res.json();
                  showpagemessage(` ${errorData.message}`, "error");
                  setloading(false)
                  console.error("Sign in error:", errorData);
                }
              } catch (error) {
                console.error("Sign in error:", error);
                showpagemessage("An unexpected error occurred.", "error");
                setloading(false)
              } finally {
                setSubmitting(false);
              }
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="control">
                  <small>{touched.email && errors.email && errors.email}</small>
                  <Field name="email" />
                  <label htmlFor="email"> Email</label>
                </div>

                <div className="control">
                  <small>
                    {touched.password && errors.password && errors.password}
                  </small>
                  <Field name="password" type="password"/>
                  <label htmlFor="password"> Password</label>
                </div>

                <button className={`click ${loading && "inactive"}`} type="submit" disabled = {loading} >
                  {loading ? <div style={{display : "flex",gap:".65rem"}}>signing in <div className="lds-dual-ring"></div></div> :"Login"}
                </button>

                <p className="redirect">
                  Don&apos;t have an account ?
                  <Link href="/signup"> Create one here</Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </main>
  );
};

export default Login;
