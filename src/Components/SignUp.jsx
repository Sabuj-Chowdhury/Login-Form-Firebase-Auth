import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.init";
import { useState } from "react";

const SignUp = () => {
  const [errmsg, setErrMsg] = useState("");
  const handleSignUp = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    setErrMsg("");

    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response.user);
      })
      .catch((err) => {
        console.log("Error:", err.message);
        setErrMsg(err.message);
      });
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            name="email"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            name="password"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
      {errmsg && <p className="text-center text-red-600">{errmsg}</p>}
    </div>
  );
};

export default SignUp;
