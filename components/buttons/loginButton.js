import { signIn } from '../../utils/auth';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = `    
  <div class="loginPage">
  <h5 class="h5-login">speak like a programmer with</h5>
  <h1 class="h1-login">Vocab-YOU-lary</h1>
  <button id="google-auth" class="login-button">Log In</button>`;
  document.querySelector('#app').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
