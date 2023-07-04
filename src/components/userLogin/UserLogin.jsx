import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./userLogin.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [role, setRole] = React.useState("");

  const navigate = useNavigate();

  const loginData = () => {
    console.log(email, password, role);
    axios
      .post("http://localhost:8000/api/login", {
        email: email,
        password: password,
        role: role,
      })
      .then((result) => {
        console.log(result.data);
        // Save JWT to local storage
        localStorage.setItem(
          "access_token",
          JSON.stringify(result.data.access_token)
        );
        // Redirect page base on role
        // navigate ('/admin') ;
        if (result.data.role === "admin") {
          navigate("/dashboard");
        } else if (result.data.role === "user") {
          navigate("/");
          alert("You are user ,Can not access to admin page");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // const handleEmailChange = (e) => {
    //   setEmail(e.target.value);

    // }

    // const handlePasswordChange = (e) => {
    //   setPassword(e.target.value);
    // }
  };
  return (
    <>
      {/* <div>
      <h1>Login</h1>

    <form action= "">

    <div className="form-outline mb-4">
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} id="form2Example1" className="form-control" />
            <label className="form-label" for="form2Example1">Email address</label>
        </div>

        <div className="form-outline mb-4">
            <input type="password" value={password}  onChange={(e)=>setPassword(e.target.value)}id="form2Example2" className="form-control" />
            <label className="form-label" for="form2Example2">Password</label>
        </div>
        <div className="row mb-4">
            <div class="col d-flex justify-content-center">

            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                <label class="form-check-label" for="form2Example31"> Remember me </label>
            </div>
            </div>

            <div class="col">

            <a href="#!">Forgot password?</a>
            </div>
        </div>
        <button type="button" onClick={loginData}  class="btn btn-primary btn-block mb-4">Sign in</button>

        <div class="text-center">
            <p>Not a member? <Link to ='/signup'>Register</Link></p>
            <p>or sign up with:</p>
            <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-facebook-f"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-google"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-twitter"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-github"></i>
            </button>
        </div>
    </form>
    </div> */}
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

                      <div class="form-floating mb-4 text-dark">
                        <input
                          class="form-control form-control-lg rounded-pill"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          name="email"
                          type="email"
                          placeholder=" "
                          required
                        />
                        <label for="Email">Email</label>
                      </div>
                      <div class="form-floating mb-4 text-dark ">
                        <input
                          class="form-control form-control-lg  rounded-pill"
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
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
                        type="button"
                        onClick={loginData}
                      >
                        Login
                      </button>
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
}
