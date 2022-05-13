import { useDispatch, useSelector } from "react-redux";
import {
  LoginGoogle,
  LoginEmail,
} from "./../../config/redux/actions/authAction";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';
import { Link } from 'react-router-dom';

function Login() {
  const { dataLogin } = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLoginGoogle = async () => {
    const data = await dispatch(LoginGoogle());
    if (data) navigate("/home");
  };

  const handleLoginEmail = () => {
    dispatch(LoginEmail(email, password));
    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);
  };

  useEffect(() => {
    if (dataLogin?.email === "admin@admin.com") navigate("/dashboard");
    if (dataLogin?.email !== "admin@admin.com" && dataLogin !== null)
      navigate("/home");
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 p-0">
              <img src={process.env.PUBLIC_URL + 'bg-login.png'} alt="test" className="img-fluid" />
          </div>
          <div className="col-md-4 bg-white p-5">
            <img src={process.env.PUBLIC_URL + 'logo.png'} alt="test" className="img-fluid mt-5" />
            <h4 className="my-4 font-default">Create new Account</h4>
            <div className="form-style">
              <div className="form-group pb-3">
                  <p className="font-word mb-2">Email</p>
                  <input
                    type="email"
                    placeholder="Contoh: johndee@gmail.com" 
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
              </div>
              <div className="form-group pb-3">
                  <p className="font-word mb-2">Password</p>
                  <input
                    type="password"
                    placeholder="6+ karakter" 
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
              </div>
              <div className="pb-2">
                  <button onClick={handleLoginEmail} type="submit" className="btn w-100 mt-4 text-light submit-btn"> Sign Up </button>
                  <button onClick={handleLoginGoogle} className="btn my-2 w-100 google-btn" >Login with Google</button>
                  Already have an account? <Link to="/login"> Login </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Login;