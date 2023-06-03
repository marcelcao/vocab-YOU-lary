import { signIn } from '../../utils/auth';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = `    
  <div class="loginPage">
  <h2>speak like a programmer with</h2>
  <h1>VocabYOUlary!</h1>
  <button id="google-auth" class="btn btn-danger">GOOGLE LOGIN</button>`;
  document.querySelector('#app').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
