import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../Action";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate, Link } from "react-router-dom";
export default function Login() {
  const dispatch = useDispatch();
  const student = useSelector((state) => state.student.student);
  const [data, setdata] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(login());
  }, []);

  const loginStudent = (e) => {
    e.preventDefault();
    const valid_student = student.filter((ele) => {
      return ele.email === data.email && ele.password === data.password;
    });

    console.log(valid_student);
    if (valid_student.length != 0) {
      navigate("/", { replace: true });
      setdata({
        email: "",
        password: "",
      });
    } else {
      alert("Invalid logins");
    }
  };
  return (
    <>
      <div className="container p-5 mt-5 bg-warning">
        <form>
          <h1 className="text-center">Login Yourself</h1>
          <hr />

          <div class="mb-5">
            <label for="exampleInputEmail1" class="form-label fw-bold">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={data.email}
              onChange={(e) => setdata({ ...data, email: e.target.value })}
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
              value={data.password}
              onChange={(e) => setdata({ ...data, password: e.target.value })}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              class="btn btn-dark fw-bold"
              onClick={loginStudent}
            >
              Login
            </button>
          </div>
          <p className="d-flex justify-content-center mt-3 fw-bold">
            Don't have An Account ?<Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </>
  );
}
