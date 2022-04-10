import axios from "axios";
import { REGISTER_STUDENT, LOGIN_STUDENT } from "./actionType";
export const register = (student) => {
  return (dispatch) => {
    axios({
      method: "POST",
      url: "http://localhost:3000/students",
      data: student,
    })
      .then((res) => {
        dispatch({
          type: REGISTER_STUDENT,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const login = () => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: "http://localhost:3000/students",
    })
      .then((res) => {
        dispatch({
          type: LOGIN_STUDENT,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
