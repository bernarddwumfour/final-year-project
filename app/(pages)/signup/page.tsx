"use client";
import Link from "next/link";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

const DisplayingErrorMessagesSchema = Yup.object().shape({
  firstname: Yup.string()
    .required("Please enter your firsname")
    .min(3, "Firstname must be at least 3 characters long"),
  surname: Yup.string()
    .required("Please enter your lastname")
    .min(3, "Lastname must be at least 3 characters long"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: Yup.string().required("password is required"),
  confirmpassword: Yup.string().required("Password Confirmation is required"),
});

const createuser = async (data: {
  firstname: string;
  surname: string;
  email: string;
  password: string;
}) => {

  let url : string = process.env.API_URL as string

  try {
    const res = await fetch(`${url}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return res;
  } catch (error) {
    console.error('Error during sign up:', error);
    return { ok: false, status: 500, json: async () => ({ message: 'Internal Server Error' }) };
  }

 };

const Signup = () => {
  const router = useRouter();
  return (
    <main id="loginpage">
      <div className="page">
        <div className="form">
          <p className="label">Signup For An Account</p>
          <Formik
            initialValues={{
              firstname: "",
              surname: "",
              email: "",
              password: "",
              confirmpassword: "",
            }}
            validationSchema={DisplayingErrorMessagesSchema}
            onSubmit={async (values , { setSubmitting }) => {
              try {
                let res = await createuser(values);
                if (res.ok) {
                  let data = await res.json();
                  console.log(data);
                  router.push("/login");
                } else {
                  // Display error message
                  let errorData = await res.json();
                  alert(`Error: ${errorData.message}`);
                }
              } catch (error) {
                console.error('Sign up error:', error);
                alert('An unexpected error occurred.');
              } finally {
                setSubmitting(false);
              }
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="control">
                  {touched.firstname && errors.firstname && (
                    <small>
                      {errors.firstname}
                    </small>
                  )}
                  <Field name="firstname" />
                  <label htmlFor="firstname"> Firstname</label>
                </div>

                <div className="control">
                  {touched.surname && errors.surname && (
                    <small>
                      {errors.surname}
                    </small>
                  )}
                  <Field name="surname" />
                  <label htmlFor="surname"> Surname</label>
                </div>

                <div className="control">
                  {touched.email && errors.email && (
                    <small>
                      {errors.email}
                    </small>
                  )}
                  <Field name="email" />
                  <label htmlFor="email"> Email</label>
                </div>

                <div className="control">
                  {touched.password && errors.password && (
                    <small>
                      {errors.password}
                    </small>
                  )}
                  <Field name="password" />
                  <label htmlFor="password"> Password</label>
                </div>

                <div className="control">
                  {touched.confirmpassword && errors.confirmpassword && (
                    <small>
                      {errors.confirmpassword}
                    </small>
                  )}
                  <Field name="confirmpassword" />
                  <label htmlFor="confirmpassword"> Confirm Password</label>
                </div>

                <button className="click" type="submit">
                  Login
                </button>

                <p className="redirect">
                  Already have an account ?<Link href="/login">login Here</Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </main>
  );
};

export default Signup;
