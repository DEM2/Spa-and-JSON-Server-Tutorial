import { Login, LoginEventos }       from './views/Login.js'
import { register, registerEvento }  from './views/RegisterBook.js'
 
const routes = {
  '/login':  { view: Login,    eventos: LoginEventos   },
  '/libros': { view: register, eventos: registerEvento },
}
 
export async function navigate(path) {
  window.location.hash = path
  await renderView(path)
}
 
async function renderView(path) {
  const ruta = routes[path]
  const app  = document.getElementById('app')
 
  if (!ruta) {
    navigate('/login')
    return
  }
 
  app.innerHTML = await ruta.view()
  await ruta.eventos?.()
}
 
// Maneja el botón atrás/adelante del navegador
window.addEventListener('hashchange', () => {
  const path = window.location.hash.replace('#', '')
  renderView(path)
})
 