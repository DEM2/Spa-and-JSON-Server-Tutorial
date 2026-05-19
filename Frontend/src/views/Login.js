import { navigate } from '../router.js'
import { login } from '../services/api.js'
import { register } from './RegisterBook.js'

export function Login() {
  return `
    <article class="login">
      <h2>Iniciar sesión</h2>
      <form id="form-login">
        <input id="email" type="email" placeholder="Email" required />
        <input id="password" type="password" placeholder="Contraseña" required />
        <button type="submit">Entrar</button>
        <p id="error-msg">Credenciales incorrectas</p>
      </form>
    </article>
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
      navigate('/libros')
    })
}