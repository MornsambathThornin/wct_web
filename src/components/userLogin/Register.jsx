import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [c_password, setC_Password] = useState("");

  async function Register() {
    let item = { name, email, password, c_password };
    let result = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    // console.warn("result" , result);
  }

  return (
    <>
      <section className=" gradient-custom">
        <div className="container py-2 h-75">
          <div className="row d-flex justify-content-center align-items-center h-75">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white border">
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">
                      Register Account
                    </h2>
                    <p className="text-white-50 mb-5">Create account </p>

                    <div className="form-floating mb-4 text-dark">
                      <input
                        className="form-control form-control-lg  rounded-pill"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder=" "
                        required
                      />
                      <label for="name">Name</label>
                    </div>
                    <div className="form-floating mb-4 text-dark">
                      <input
                        className="form-control form-control-lg  rounded-pill"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder=" "
                        required
                      />
                      <label for="email">Email</label>
                    </div>
                    <div className="form-floating mb-4 text-dark ">
                      <input
                        className="form-control form-control-lg  rounded-pill"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder=" "
                        required
                      />
                      <label for="password">Password</label>
                    </div>
                    <div className="form-floating mb-4 text-dark ">
                      <input
                        className="form-control form-control-lg  rounded-pill"
                        name="c_password"
                        value={c_password}
                        onChange={(e) => setC_Password(e.target.value)}
                        type="password"
                        placeholder=" "
                        required
                      />
                      <label for="c_password">Confirm Password</label>
                    </div>
                    <p className="small mb-5 pb-lg-2">
                      <a className="text-white-50" href="#!">
                        Forgot password?
                      </a>
                    </p>
                    {/* <Link to ={`#`}><button className="btn btn-outline-light btn-lg px-3" type="submit">Sign Up</button></Link> */}
                    <button
                      className="btn btn-outline-light btn-lg px-3 "
                      type="button"
                      onClick={Register}
                    >
                      Register
                    </button>
                  </div>

                  <div>
                    <p className="mb-4">
                      Aleady have account?{" "}
                      <Link to={`/login`} className="text-white-50 fw-bold">
                        Login
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
