"use client"
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useContext, useState } from "react";
import { Appcontext } from "../contexts/AppcontextProvider";

const MessageSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string()
    .min(1, "Too Short!")
    .max(1000, "Too Long!")
    .required("Message is required"),
});


type Props = {type : string}
const MessageForm = ({type}:Props) => {
  const [loading, setLoading] = useState(false);
  const { showpagemessage } = useContext(Appcontext);

  const addMessage = async (values: {name: string,email: string,message: string, type: string,}) => {
     try{
      let res = await fetch("/api/messages",{
        method:"POST",
        headers: {
          "Content-Type": "application/json",
          },
          body: JSON.stringify(values)
      })
    return res
     }catch(error){
      return {
        ok: false,
        status: 500,
        json: async () => ({ message: "Internal Server Error" }),
      };
     }
  
  }


  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
        type: type, // default type
      }}
      validationSchema={MessageSchema}
      onSubmit={async (values, { setSubmitting ,resetForm }) => {
        setLoading(true);
        try {
          let res = await addMessage(values); // replace with your message submission logic
          if (res.ok) {
            let data = await res.json();
            showpagemessage(`${type} sent successfully`, "success");
            setLoading(false);
            resetForm()
            
          } else {
            let errorData = await res.json();
            showpagemessage(` ${errorData.message}`, "error");
            setLoading(false);
            console.error("Message error:", errorData);
          }
        } catch (error) {
          console.error("Message error:", error);
          showpagemessage("An unexpected error occurred.", "error");
          setLoading(false);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="control">
            <small>{touched.name && errors.name && errors.name}</small>
            <Field name="name" />
            <label htmlFor="name"> Name</label>
          </div>

          <div className="control">
            <small>{touched.email && errors.email && errors.email}</small>
            <Field name="email" />
            <label htmlFor="email"> Email</label>
          </div>

          <div className="control">
            <small>{touched.message && errors.message && errors.message}</small>
            <Field name="message" as="textarea" />
            <label htmlFor="message"> Message</label>
          </div>

        

          <button
            className={`click ${loading && "inactive"}`}
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <div style={{ display: "flex", gap: ".65rem" }}>
                Sending<div className="lds-dual-ring"></div>
              </div>
            ) : (
              "Send Message"
            )}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default MessageForm;
