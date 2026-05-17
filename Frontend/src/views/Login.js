import { login } from '../services/api.js'

export function Login() {
  return `
    <div class="form-container">
      <h1>Iniciar sesión</h1>
      <form id="form-login">
        <input id="email" type="email" placeholder="Email" required />
        <input id="password" type="password" placeholder="Contraseña" required />
        <button type="submit">Entrar</button>
        <p id="error-msg" style="color:red;display:none">Credenciales incorrectas</p>
      </form>
    </div>
  `
}

export function LoginEventos() {
  document.getElementById('form-login')
    .addEventListener('submit', async (e) => {
      e.preventDefault()

      const email = document.getElementById('email').value
      const password = document.getElementById('password').value

      const usuario = await login(email, password)

      if (!usuario) {
        document.getElementById('error-msg').style.display = 'block'
        return
      }
      console.log("Aqui estoy")
    })
}