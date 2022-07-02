import { useForm, Controller } from "react-hook-form";
import ReactSelect from "react-select";

const Register = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data", data);
  };

  console.log(errors);
  const selectOptions = [
    {
      value: 1,
      label: "Male ",
    },
    {
      value: 2,
      label: "female ",
    },
  ];

  const selectHobbies = [
    {
      value: 1,
      label: "Skating ",
    },
    {
      value: 2,
      label: "Reading ",
    },
    {
      value: 3,
      label: "Football ",
    },
    {
      value: 4,
      label: "Swimming ",
    },
    {
      value: 5,
      label: "Running ",
    },
  ];

  return (
    <div className="m-5">
      <div className="row d-flex justify-content-center w-100 ">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6 ">
          <div className="card w-100">
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">
                Create a new account
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-outline my-5">
                  <input
                    type="text"
                    placeholder="FirstName"
                    className="form-control form-control-lg"
                    {...register("FirstName", {
                      required: true,
                      minLength: 3,
                      maxLength: 10,
                    })}
                  />
                  {errors.FirstName && errors.FirstName.type === "required" && (
                    <p className="text-danger m-2"> Required </p>
                  )}
                  {errors.FirstName &&
                    errors.FirstName.type === "minLength" && (
                      <p className="text-danger m-2"> Min Length is 3 </p>
                    )}
                  {errors.FirstName &&
                    errors.FirstName.type === "maxLength" && (
                      <p className="text-danger m-2"> Max Length is 10 </p>
                    )}
                </div>

                <div className="form-outline my-5">
                  <input
                    type="text"
                    placeholder="LastName"
                    className="form-control form-control-lg"
                    {...register("LastName", {
                      required: true,
                      minLength: 3,
                      maxLength: 10,
                    })}
                  />
                  {errors.LastName && errors.LastName.type === "required" && (
                    <p className="text-danger m-2"> Required </p>
                  )}
                  {errors.LastName && errors.LastName.type === "minLength" && (
                    <p className="text-danger m-2"> Min Length is 3 </p>
                  )}
                  {errors.LastName && errors.LastName.type === "maxLength" && (
                    <p className="text-danger m-2"> Max Length is 10 </p>
                  )}
                </div>

                <div className="form-outline my-5">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control form-control-lg"
                    {...register("email", {
                      required: true,
                      pattern: /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/,
                    })}
                  />
                  {errors.email && errors.email.type === "required" && (
                    <p className="text-danger m-2"> Required </p>
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                    <p className="text-danger m-2">
                      {" "}
                      Please Enter a Correct Email form{" "}
                    </p>
                  )}
                </div>

                <div className="form-outline my-5">
                  <Controller
                    name="select"
                    control={control}
                    render={() => (
                      <ReactSelect
                        options={selectOptions}
                        placeholder="Select gender"
                      />
                    )}
                  />
                </div>

                <div className="form-outline my-5">
                  <Controller
                    name="select"
                    control={control}
                    render={() => (
                      <ReactSelect
                        options={selectHobbies}
                        isMulti
                        isSearchable
                        placeholder="select hobbies"
                      />
                    )}
                  />
                </div>

                <div className="form-outline my-5">
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control form-control-lg"
                    {...register("password", {
                      required: true,
                      pattern:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    })}
                  />
                  {errors.password && errors.password.type === "required" && (
                    <p className="text-danger m-2"> Required </p>
                  )}
                  {errors.password && errors.password.type === "pattern" && (
                    <p className="text-danger m-2">
                      {" "}
                      password contains at least eight characters, including at
                      least one number and includes both lower and uppercase
                      letters and special characters{" "}
                    </p>
                  )}
                </div>

                <div className="form-outline my-5">
                  {/* <label class="form-label" for="form3Example4cdg">
                    Repeat your password
                  </label> */}
                  <input
                    type="password"
                    placeholder="ConfirmPassword"
                    className="form-control form-control-lg"
                    {...register("ConfirmPassword", {
                      required: true,
                      pattern:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    })}
                  />
                  {errors.ConfirmPassword &&
                    errors.ConfirmPassword.type === "required" && (
                      <p className="text-danger m-2"> Required </p>
                    )}
                  {errors.ConfirmPassword &&
                    errors.ConfirmPassword.type === "pattern" && (
                      <p className="text-danger m-2">
                        {" "}
                        password contains at least eight characters, including
                        at least one number and includes both lower and
                        uppercase letters and special characters{" "}
                      </p>
                    )}
                </div>

                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-dark btn-block btn-lg  w-100 my-4"
                  >
                    Register
                  </button>
                </div>

                <p className="text-center text-muted mt-5 mb-0">
                  Have already an account?{" "}
                  <a href="#!" className="fw-bold text-body">
                    <u>Login here</u>
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
