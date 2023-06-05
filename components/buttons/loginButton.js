import { signIn } from '../../utils/auth';
import logo from '../images/logo.png';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = `    
  <div class="loginPage">
  <h5 class="h5-login">speak like a programmer with</h5>
  <div class="logo-div-main">
  <img src=${logo} class="login-logo" alt="vocab-YOU-lary" crossorigin>
  </div>
  <button id="google-auth" class="login-button">Log In</button>`;
  document.querySelector('#app').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
