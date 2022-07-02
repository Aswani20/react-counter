import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
      } = useForm();
    
      const onSubmit = (data) => {
        console.log("data", data);
        reset();
      };
    
      console.log(errors);
    return(
        <div className="m-5">
        <div className="row d-flex justify-content-center w-100 ">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6 ">
            <div className="card w-100">
              <div className="card-body p-5">
                <h2 className="text-uppercase text-center mb-5">
                 log in
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
  
  

  
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
  
    
  
                  <div className="d-flex justify-content-center">
                    <button
                      type="submit"
                      className="btn btn-dark btn-block btn-lg  w-100 my-4"
                    >
                      Log In
                    </button>
                  </div>
  
                  <p className="text-center text-muted mt-5 mb-0">
                    create an account?{" "}
                    <Link to="/register" className="fw-bold text-body">
                      <u>Register here</u>
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Login