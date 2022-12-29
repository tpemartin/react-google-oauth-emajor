"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignIn = SignIn;
exports.SignOut = SignOut;
exports.initializeGoogle = initializeGoogle;
var _jwtDecode = _interopRequireDefault(require("jwt-decode"));
var _react = require("react");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function SignIn() {
  (0, _react.useEffect)(() => {
    initializeGoogle();
  });
  return /*#__PURE__*/React.createElement("div", {
    id: "google-login",
    style: {
      display: "none"
    }
  });
}
function SignOut() {
  return /*#__PURE__*/React.createElement("div", {
    className: "google-logout"
  }, "Sign Out");
}
function initializeGoogle() {
  const clientId = document.querySelector('meta[name="google-signin-client_id"]').content;
  const btnLogin = document.getElementById("google-login");
  window.onload = () => {
    window.google.accounts.id.initialize({
      client_id: clientId,
      callback: handleCredentialResponse
    });
    window.google.accounts.id.renderButton(document.getElementById("google-login"), {
      theme: "outline",
      size: "large"
    } // customization attributes
    );

    btnLogin.style.display = null;
    //window.google.accounts.id.prompt(); // also display the One Tap dialog
  };
}

function handleCredentialResponse(response) {
  console.log("Encoded JWT ID token: " + response.credential);
  console.log((0, _jwtDecode.default)(response.credential));
}