import "../Login/login.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  return (
    <div className="main-container">
      <div className="form">
        <div className="title-form">
          <div>
            <h1>Login</h1>
          </div>
          <div>
            <p>Hey, Enter your details to get sing in to your account</p>
          </div>
        </div>
        <div className="inputs-form">
          <input
            type="text"
            className="border-input email"
            placeholder="Enter email / Phone No"
          />
          <input
            type="text"
            className="border-input  pass"
            placeholder="Passcode"
          />
          <span className="having">Having trouble in sing un?</span>
        </div>
        <div className="button-form">
          <div className="container-button-siginin">
            <button className="button-sign">Sign in</button>
          </div>
          <div>
            <span> - Or Sign in with -</span>
          </div>
          <div>
            <button>Google</button>
            <button>Apple ID</button>
            <button>
              <FontAwesomeIcon icon="fa-brands fa-facebook" />
              Facebook
            </button>
          </div>
        </div>
      </div>
      <footer>
        <span>Copyringht @wework 2022 \ Privacy Policy</span>
      </footer>
    </div>
  );
}
