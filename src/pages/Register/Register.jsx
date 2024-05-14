import { Helmet } from "react-helmet";
import { FormGroup } from "../../components/FormGroup/FormGroup";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useProvideAuth } from "../../../hooks/useProvideAuth";
import { toast } from "react-toastify";

export function Register() {
  const {
    firebaseAuth: {
      signUpWithEmailAndPassword,
      updateUserProfile,
      setUser,
      loginWithGoogle,
    },
  } = useProvideAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function onSubmit(data) {
    const { displayName, photoURL, email, password } = data;
    signUpWithEmailAndPassword(email, password)
      .then((res) => {
        updateUserProfile(displayName, photoURL).then((finalRes) => {
          axios
            .post(
              `${import.meta.env.VITE_BASE_URL}/jwt`,
              {
                email: res?.user?.email,
              },
              { withCredentials: true }
            )
            .then(() => {
              toast.success("Successfully Registered 😀");
              setUser(finalRes);
              reset();
            });
        });
      })
      .catch(() => {
        toast.error("Something went worng. Try Again!");
      });
  }

  function socialLogin(callback) {
    callback()
      .then((res) => {
        axios
          .post(
            `${import.meta.env.VITE_BASE_URL}/jwt`,
            {
              email: res?.user?.email,
            },
            { withCredentials: true }
          )
          .then(() => {
            toast.success("Successfully loggedIn 😀");
            setUser(res);
          });
      })
      .catch(() => {});
  }
  return (
    <div className="h-[90vh] flex flex-col justify-center items-center dark:bg-black">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="md:w-1/3 dark:border-2 dark:p-4">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <FormGroup errorMessage={errors?.displayName?.message}>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="name"
                {...register("displayName", {
                  required: { value: true, message: "Required" },
                })}
              />
            </label>
          </FormGroup>
          <FormGroup errorMessage={errors?.email?.message}>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="email"
                className="grow"
                placeholder="Email"
                {...register("email", {
                  required: { value: true, message: "Required" },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
              />
            </label>
          </FormGroup>
          <FormGroup errorMessage={errors?.photoURL?.message}>
            <input
              type="text"
              placeholder="Profile photo URL"
              className="input input-bordered w-full"
              {...register("photoURL", {
                required: {
                  value: true,
                  message: "Provide image's absolute source.",
                },
                pattern: {
                  value: /https?:\/\/\S+\.(?:png|jpg|jpeg|gif|bmp|svg)/,
                  message:
                    "Must end with .png, .jpg, jpeg, gif, bmp, svg with http or https protocol",
                },
              })}
            />
          </FormGroup>
          <FormGroup
            errorMessage={errors?.password?.message}
            position="relative"
          >
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type={"password"}
                placeholder="password"
                className="grow"
                {...register("password", {
                  required: { value: true, message: "Required" },
                  minLength: {
                    value: 6,
                    message: "Password must be 6 character long ",
                  },
                  validate: {
                    hasLowerCase: (value) => {
                      if (!value.match(/[a-z]/)) {
                        return "Must include at least 1 lowercase letter";
                      }
                    },
                    hasUpperCase: (value) => {
                      if (!value.match(/[A-Z]/)) {
                        return "Must include at least 1 uppercase letter";
                      }
                    },
                  },
                })}
              />
            </label>
          </FormGroup>
          <button className="btn btn-outline w-full sm:w-auto dark:text-white">Register</button>
        </form>
        <div className="mt-3">
          <div className="flex justify-between">
            <h2 className="text-violet-800 font-medium dark:text-white">
              Already have an account?
            </h2>
            <Link to="/login" className="font-medium dark:text-white">
              Login
            </Link>
          </div>
          <div className="mt-4 flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
            <button
              onClick={() => {
                socialLogin(loginWithGoogle);
              }}
              className="btn text-gray-200 btn-error"
            >
              <FaGoogle />
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
