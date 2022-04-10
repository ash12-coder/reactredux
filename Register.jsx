import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../Action";
import "bootstrap/dist/css/bootstrap.css";
import { Link, useNavigate } from "react-router-dom";
export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [datas, setdatas] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
  });
  const registerStudent = (e) => {
    e.preventDefault();
    if (datas.name === "" || datas.email === "" || datas.password === "") {
      alert("Please Enter All The Required Fields");
    } else {
      dispatch(
        register({
          ...datas,
          id: Date.now(),
        })
      );
      setdatas({
        id: "",
        name: "",
        email: "",
        password: "",
      });
      navigate("/login", { replace: true });
    }
  };
  return (
    <>
      <div className="container p-5 mt-5 bg-warning">
        <form>
          <h1 className="text-center">Register Yourself</h1>
          <hr />
          <div class="mb-5">
            <label for="name" class="form-label fw-bold">
              User Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={datas.name}
              onChange={(e) => setdatas({ ...datas, name: e.target.value })}
            />
          </div>
          <div class="mb-5">
            <label for="exampleInputEmail1" class="form-label fw-bold">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={datas.email}
              onChange={(e) => setdatas({ ...datas, email: e.target.value })}
            />
          </div>
          <div class="mb-5">
            <label for="exampleInputPassword1" class="form-label fw-bold">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              value={datas.password}
              onChange={(e) => setdatas({ ...datas, password: e.target.value })}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              class="btn btn-dark fw-bold"
              onClick={registerStudent}
            >
              Register
            </button>
          </div>
          <p className="text-center mt-3">
            Already Have An Account ? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </>
  );
}
