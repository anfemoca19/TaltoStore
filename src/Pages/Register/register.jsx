import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import "../Login/login.css";
import { Toaster } from "react-hot-toast";
import InputText from "../../Components/Ui/inputs/InputText/inputText";

export default function Register() {
  const inputPass = useRef();
  const inputPassConfirm = useRef();
  const [icon, setIcon] = useState(true);
  const [iconConfirm, setIconConfirm] = useState(true);

  const actionIconEye = () => {
    setIcon(!icon);
    if (inputPass.current.type === "password") {
      inputPass.current.type = "text";
    }
    if (!icon) {
      inputPass.current.type = "password";
    }
  };
  const actionIconEyeConfirm = () => {
    setIconConfirm(!iconConfirm);
    if (inputPassConfirm.current.type === "password") {
      inputPassConfirm.current.type = "text";
    }
    if (!iconConfirm) {
      inputPassConfirm.current.type = "password";
    }
  };

  return (
    <div className="main-container">
      <Toaster />
      <header>
        <div>
          <div></div>
        </div>
      </header>
      <form className="form">
        <div className="tittle-form">
          <div>
            <h2>Register</h2>
          </div>
        </div>
        <div className="inputs-form">
          <InputText
            required
            type="text"
            className="border-input email"
            placeholder="Name"
          />
          <InputText
            required
            type="email"
            className="border-input email "
            placeholder="Email"
          />
          <div className="border-input container-pass">
            <input
              required
              type="password"
              className="pass"
              placeholder="Password"
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
          <div className="border-input container-pass">
            <input
              required
              type="password"
              className="pass"
              placeholder="Confirm password"
              ref={inputPassConfirm}
            />
            <span
              className="icon-eye"
              onClick={() => {
                actionIconEyeConfirm();
              }}
            >
              {iconConfirm && <FontAwesomeIcon icon={faEyeSlash} />}
              {!iconConfirm && <FontAwesomeIcon icon={faEye} />}
            </span>
          </div>
        </div>
        <div className="button-form">
          <div className="container-button-siginin">
            <button className="button-sign">Register</button>
          </div>
        </div>
      </form>
      <footer>
        <span>Copyringht @wework 2022 | Privacy politique</span>
      </footer>
    </div>
  );
}
