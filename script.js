console.log("hola mundo!");
let isLogin = true;

const loginFormHTML = `
    <div class="input-group mt-4">
        <div class="input-group-text bg-info">
            <img src="/public/iconos/username-icon.svg" alt="username-icon" style="height: 1rem">
        </div>
        <input class="form-control bg-light" type="text" placeholder="Username" id="username-input">
    </div>
    <div class="input-group mt-1">
        <div class="input-group-text bg-info">
            <img src="/public/iconos/password-icon.svg" alt="password-icon" style="height: 1rem">
        </div>
        <input class="form-control bg-light" type="password" placeholder="Password" id="password-input">
    </div>
`;

const registerFormHTML = `
    <div class="input-group mt-4">
        <div class="input-group-text bg-info">
            <img src="/public/iconos/username-icon.svg" alt="username-icon" style="height: 1rem">
        </div>
        <input class="form-control bg-light" type="text" placeholder="Nombre" id="name-input">
    </div>
    <div class="input-group mt-1">
        <div class="input-group-text bg-info">
            <img src="/public/iconos/username-icon.svg" alt="username-icon" style="height: 1rem">
        </div>
        <input class="form-control bg-light" type="text" placeholder="Apellido" id="lastname-input">
    </div>
    <div class="input-group mt-1">
        <div class="input-group-text bg-info">
            <img src="/public/iconos/arroba.svg" alt="email-icon" style="height: 1rem">
        </div>
        <input class="form-control bg-light" type="email" placeholder="Email" id="email-input">
    </div>
    <div class="input-group mt-1">
        <div class="input-group-text bg-info">
            <img src="/public/iconos/password-icon.svg" alt="password-icon" style="height: 1rem">
        </div>
        <input class="form-control bg-light" type="password" placeholder="Contraseña" id="password-input">
    </div>
    <div class="input-group mt-1">
        <div class="input-group-text bg-info">
            <img src="/public/iconos/password-icon.svg" alt="password-icon" style="height: 1rem">
        </div>
        <input class="form-control bg-light" type="password" placeholder="Confirmar Contraseña" id="confirm-password-input">
    </div>
`;

function toggleForm() {
  const formTitle = document.getElementById("form-title");
  const formContent = document.getElementById("form-content");
  const loginButton = document.getElementById("login-button");
  const registerButton = document.getElementById("register-button");
  const toggleText = document.getElementById("toggle-form-text");
  console.log("aca");
  if (isLogin) {
    formTitle.innerText = "Registrarse";
    formContent.innerHTML = registerFormHTML;
    loginButton.style.display = "none";
    registerButton.style.display = "block";
    toggleText.innerText = "¿Ya tienes cuenta?";
  } else {
    formTitle.innerText = "Ingresar";
    formContent.innerHTML = loginFormHTML;
    loginButton.style.display = "block";
    registerButton.style.display = "none";
    toggleText.innerText = "¿No tienes cuenta?";
  }

  isLogin = !isLogin;
}

function showToast(message) {
  const toastBody = document.getElementById("toast-body");
  toastBody.innerText = message;
  const toast = new bootstrap.Toast(document.getElementById("liveToast"));
  toast.show();
}

function submitForm() {
  if (isLogin) {
    const username = document.getElementById("username-input").value;
    const password = document.getElementById("password-input").value;
    if (username && password) {
      console.log("Username:", username);
      console.log("Password:", password);
      showToast("Login exitoso!");
    } else {
      showToast("Por favor, completa todos los campos.");
    }
  } else {
    const name = document.getElementById("name-input").value;
    const lastname = document.getElementById("lastname-input").value;
    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;
    const confirmPassword = document.getElementById(
      "confirm-password-input"
    ).value;
    if (name && lastname && email && password && confirmPassword) {
      console.log("Name:", name);
      console.log("Lastname:", lastname);
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Confirm Password:", confirmPassword);
      if (password === confirmPassword) {
        showToast("Registro exitoso!");
      } else {
        showToast("Las contraseñas no coinciden.");
      }
    } else {
      showToast("Por favor, completa todos los campos.");
    }
  }
}
