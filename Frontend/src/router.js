import { Login, LoginEventos } from './views/Login.js'
import { register } from './views/RegisterBook.js'

const routes = {
  '/login': { view: Login , eventos: LoginEventos },
  '/libros': { view: register  },
}

export async function navigate(path) {
  await renderView(path)
}

async function renderView(path) {
  const ruta = routes[path]
  const app = document.getElementById('app')

  app.innerHTML = await ruta.view()
  ruta.eventos?.()
}