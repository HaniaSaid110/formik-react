import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

export default function Login() {
  const schema = Yup.object({
    email: Yup.string().email("invalid email").required("email is required"),
    password: Yup.string()
      .min(6, "Min 6 char")
      .required("password is required"),
  });

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="flex flex-col justify-center items-center m-auto mt-6 p-6 border-2 rounded-xl w-fit md:w-lg border-blue-400">
      <h2 className="text-2xl">Login</h2>
      <form action="" className=" w-full">
        <div className="flex flex-col">
          <label htmlFor="" className="py-2">
            Email
          </label>
          <input
            className="outline-1 outline-blue-400 rounded-xl p-2"
            type="email"
            name="email"
            id=""
            placeholder="name@example.com"
            onChange={handleChange}
            value={values.email}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}

          <label htmlFor="" className="py-2">
            Password
          </label>
          <input
            className="outline-1 outline-blue-400 rounded-xl p-2"
            type="password"
            name="password"
            id=""
            placeholder="••••••••"
            onChange={handleChange}
            value={values.password}
          />
          {errors.password && <p className="error-text">{errors.password}</p>}

          <button
            className="self-center py-2 px-12 my-8 rounded-xl border-2 border-blue-400 cursor-pointer"
            onClick={handleSubmit}
            type="button"
          >
            Login
          </button>
          <p className="self-center ">
            or{" "}
            <Link to={"/"} className="underline">
              Sign up
            </Link>{" "}
            for new users
          </p>
        </div>
      </form>
    </div>
  );
}
