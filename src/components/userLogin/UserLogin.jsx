import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dashboard from "../dashboard/dashboard";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  const loginData = (e) => {
    e.preventDefault();
    console.log(email, password);
    const data = { email, password };
    localStorage.setItem("user", JSON.stringify(data));
    setLoggedIn(true);
    setemail("");
    setpassword("");
    localStorage.setItem("UserIsLoggedIn", true);
    navigate("/dashboard");
  };

  return (
    <>
      <main>
        <section class=" gradient-custom">
          <div class="container py-2 h-75">
            <div class="row d-flex justify-content-center align-items-center h-75">
              <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                <div class="card bg-dark text-white border">
                  <div class="card-body p-5 text-center">
                    <div class="mb-md-5 mt-md-4 pb-5">
                      <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                      <p class="text-white-50 mb-5">
                        Please enter your login and password!
                      </p>
                      {/* <form onSubmit={handelSubmit}> */}
                      <div class="form-floating mb-4 text-dark">
                        <input
                          class="form-control form-control-lg rounded-pill"
                          name="Email"
                          type="email"
                          value={email}
                          onChange={(e) => setemail(e.target.value)}
                          placeholder=" "
                          required
                        />
                        <label for="Email">Email</label>
                      </div>
                      <div class="form-floating mb-4 text-dark ">
                        <input
                          class="form-control form-control-lg  rounded-pill"
                          name="Password"
                          type="password"
                          value={password}
                          onChange={(e) => setpassword(e.target.value)}
                          placeholder=" "
                          required
                        />
                        <label for="password">Password</label>
                      </div>
                      <p class="small mb-5 pb-lg-2">
                        <a class="text-white-50" href="#!">
                          Forgot password?
                        </a>
                      </p>

                      {/* <Link to ={`/dashboard`}><button class="btn btn-outline-light btn-lg px-5" type="submit">Login</button></Link> */}
                      <button
                        class="btn btn-outline-light btn-lg px-5"
                        type="submit"
                        onClick={loginData}
                      >
                        Login
                      </button>
                      {/* </form> */}
                    </div>

                    <div>
                      <p class="mb-4">
                        Don't have an account?{" "}
                        <Link to={`/register`} class="text-white-50 fw-bold">
                          Sign Up
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Login;
