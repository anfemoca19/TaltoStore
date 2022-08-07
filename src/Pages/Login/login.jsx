import "./login.css";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGoogle,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
import InputText from "../../Components/Ui/inputs/InputText/inputText";

export default function Login() {
  const [icon, setIcon] = useState(true);
  const inputPass = useRef();

  const actionIconEye = () => {
    setIcon(!icon);
    if (inputPass.current.type === "password") {
      inputPass.current.type = "text";
    }
    if (!icon) {
      inputPass.current.type = "password";
    }
  };

  return (
    <div className="main-container">
      <header>
        <div>
          <div></div>
        </div>
      </header>
      <form className="form">
        <div className="tittle-form">
          <div>
            <h2>Agent Login</h2>
          </div>
          <div>
            <p className="text-form">
              Hey, Enter your details to get sing in to your account
            </p>
          </div>
        </div>
        <div className="inputs-form">
          <InputText
            type="text"
            className="border-input email"
            placeholder="Enter email / Phone No"
          />
          <div className="border-input container-pass">
            <input
              type="password"
              className=" pass"
              placeholder="Passcode"
              ref={inputPass}
            />
            <span
              className="icon-eye"
              onClick={() => {
                actionIconEye();
              }}
            >
              {icon && <FontAwesomeIcon icon={faEyeSlash} />}
              {!icon && <FontAwesomeIcon icon={faEye} />}
            </span>
          </div>
          <span className="having">Having trouble in sing in?</span>
        </div>
        <div className="button-form">
          <div className="container-button-siginin">
            <button className="button-sign">Sign in</button>
          </div>
          <div className="title-or-sign">
            <span> - Or Sign in with -</span>
          </div>
        </div>
        <div className="button-form">
          <div className="social-id">
            <button className="social-google social">
              <FontAwesomeIcon icon={faGoogle} />
              <span>Google</span>
            </button>
            <button className="social-apple social">
              <FontAwesomeIcon icon={faApple} />
              <span>Apple ID</span>
            </button>
            <button className="social-facebook social">
              <FontAwesomeIcon icon={faFacebook} />
              <span>Facebook</span>
            </button>
          </div>
          <span className="request">
            <NavLink exact to="/register" className="request-now">
              Don´t have an account? <b>Request Now</b>
            </NavLink>
          </span>
        </div>
      </form>
      <footer>
        <span>Copyringht @wework 2022 | Privacy politique</span>
      </footer>
    </div>
  );
}
