import "../Login/login.css";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGoogle,
  faApple,
} from "@fortawesome/free-brands-svg-icons";

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
      <section className="form">
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
          <input
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
          <span className="having">Having trouble in sing un?</span>
        </div>
        <div className="button-form">
          <div className="container-button-siginin">
            <button className="button-sign">Sign in</button>
          </div>
          <div>
            <span> - Or Sign in with -</span>
          </div>
          <div className="social-id">
            <button>
              <FontAwesomeIcon icon={faGoogle} />
              Google
            </button>
            <button>
              <FontAwesomeIcon icon={faApple} />
              Apple ID
            </button>
            <button>
              <FontAwesomeIcon icon={faFacebook} /> Facebook
            </button>
          </div>
        </div>
      </section>
      <footer>
        <span>Copyringht @wework 2022 \ Privacy Policy</span>
      </footer>
    </div>
  );
}
