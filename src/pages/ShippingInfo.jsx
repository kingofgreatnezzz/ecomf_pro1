import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AnimatedBackground from "../components/common/AnimatedBackground";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  address: Yup.string().required("Street Address is required"),
  phone: Yup.string().required("Phone No is required"),
  city: Yup.string().required("City is required"),
});

export default function ShippingInfo() {
  return (
    <div className="z-10">
      <AnimatedBackground />

      <div className="flex flex-col justify-center items-center p-4 relative">
        <div className="text-center">
          <h1 className="text-zinc-900 md:text-5xl text-3xl font-bold pt-5">
            Shipping Address
          </h1>
          <p className="pt-4">
            Please make sure your Address & Contact information are correct.
            <strong className=" text-green-600 font-semibold"> Thank you!</strong>
          </p>
        </div>

        <div className="w-full md:w-2/3 lg:w-1/2">
          <Formik
            initialValues={{
              name: "",
              email: "",
              address: "",
              phone: "",
              city: "",
              zip: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="mt-10">
                <div className="flex flex-col gap-4 md:gap-6 px-2">
                  <div className="flex flex-col">
                    <Field
                      className="shadow-md outline-zinc-700 text-zinc-950 placeholder:text-zinc-600 rounded-none bg-slate-200 p-3"
                      type="text"
                      name="name"
                      placeholder="Name"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div className="flex flex-col">
                    <Field
                      className="shadow-md outline-zinc-700 text-zinc-950 placeholder:text-zinc-600 rounded-none bg-slate-200 p-3"
                      type="email"
                      name="email"
                      placeholder="Email@example.com"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div className="flex flex-col">
                    <Field
                      className="shadow-md outline-zinc-700 text-zinc-950 placeholder:text-zinc-600 rounded-none bg-slate-200 p-3"
                      type="text"
                      name="address"
                      placeholder="Street Address"
                    />
                    <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div className="flex flex-col">
                    <Field
                      className="shadow-md outline-zinc-700 text-zinc-950 placeholder:text-zinc-600 rounded-none bg-slate-200 p-3"
                      type="text"
                      name="phone"
                      placeholder="Phone No"
                    />
                    <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div className="flex flex-col">
                    <Field
                      className="shadow-md outline-zinc-700 text-zinc-950 placeholder:text-zinc-600 rounded-none bg-slate-200 p-3"
                      type="text"
                      name="city"
                      placeholder="City"
                    />
                    <ErrorMessage name="city" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div className="flex flex-col">
                    <Field
                      className="shadow-md outline-zinc-700 text-zinc-950 placeholder:text-zinc-600 rounded-none bg-slate-200 p-3"
                      type="text"
                      name="zip"
                      placeholder="Zip code (Optional)"
                    />
                  </div>

                  <button
                    className="bg-zinc-900 text-slate-100 p-3 hover:bg-zinc-700"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
