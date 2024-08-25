import React from "react";
import { Axios } from "../config";
import Request from "../lib/requests";
import { SignupSchema } from "../schemas";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };
  const onSubmit = async (payload, actions) => {
    try {
      const response = await Axios.post(Request.signup, payload);
      toast.success(response.data.message);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };
  const {
    handleChange,
    values,
    handleBlur,
    handleSubmit,
    // isSubmitting,
    errors,
    touched,
  } = useFormik({
    initialValues,
    validationSchema: SignupSchema,
    onSubmit,
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <br />
        <input
          value={values.username}
          onBlur={handleBlur}
          onChange={handleChange}
          // className={`border border-blue-800 $
          //   {errors.username && touched.username ? "border border-red-500" : "" }`}
          className={`border border-blue-800 ${
            errors.username && touched.username ? "border border-red-500" : ""
          }`}
          type="text"
          id="username"
          name="username"
        />
        {errors.username && touched.username && (
          <p className="text-red-500">{errors.username}</p>
        )}
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
          className={`border border-blue-800 ${
            errors.username && touched.username ? "border border-red-500" : ""
          }`}
          type="email"
          id="email"
          name="email"
        />
        {errors.email && touched.email && (
          <p className="text-red-500">{errors.email}</p>
        )}
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input
          value={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
          className={`border border-blue-800 ${
            errors.password && touched.password ? "border border-red-500" : ""
          }`}
          type="password"
          id="password"
          name="password"
        />
        {errors.password && touched.password && (
          <p className="text-red-500">{errors.password}</p>
        )}
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Signup;
