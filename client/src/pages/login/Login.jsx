import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./login.css";
import { login } from "../../redux/apiCalls";
import { axiosInstance } from "../../config";

export const Login = () => {

  const [inputs, setInputs] = useState("");
  const [registerInputs, setRegisterInputs] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // container?.classList.remove("right-panel-active")
  // container?.classList.add("right-panel-active")

  const handleChange = (e) => {
    e.preventDefault();
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleChangeRegister = (e) => {
    e.preventDefault();
    setRegisterInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(dispatch, inputs);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosInstance.post("auth/register", registerInputs);
    } catch (err) {
      setErrorMessage(err.response.data);
    }
  };

  return (
    <div className="loginContainer">
      <div className={isSignUp ? "container right-panel-active" : "container"} id="container">
        <div className="form-container sign-up-container">
          <form className="form" action="#">
            <h1 className="formTitle">Create Account</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" className="social">
                <i className="fa fa-google"></i>
              </a>
              <a href="#" className="social">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
            <span className="formSpan">or use your email for registration</span>
            <input
              type="text"
              placeholder="Name"
              name="username"
              onChange={handleChangeRegister}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChangeRegister}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChangeRegister}
            />
            <button className="sign" onClick={handleRegister}>Sign Up</button>
            {errorMessage && (
              <span style={{ color: "red", paddingTop: "10px" }}>
                {errorMessage}
              </span>
            )}
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form className="form" action="#">
            <h1 className="formTitle">Sign in</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" className="social">
                <i className="fa fa-google"></i>
              </a>
              <a href="#" className="social">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
            <span className="formSpan">or use your account</span>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <a  className="forgot" href="#">Forgot your password?</a>
            <button className="sign" onClick={handleLogin}>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="formTitle">Welcome Back!</h1>
              <p className="paragraphe">
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost sign" id="signIn" onClick={()=> setIsSignUp(false)}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="formTitle">Hello, Friend!</h1>
              <p className="paragraphe">Enter your personal details and start journey with us</p>
              <button className="ghost sign" id="signUp" onClick={() => setIsSignUp(true)}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
