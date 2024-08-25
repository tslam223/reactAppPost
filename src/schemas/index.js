import * as Yup from "yup";
export const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, "Username Too Short!")
    .required("Required"),
  
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(5, "Password too weak")
});