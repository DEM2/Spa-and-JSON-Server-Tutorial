import { Login, LoginEventos } from './views/Login.js'

const routes = {
  '/login': { view: Login , eventos: LoginEventos },
 // '/libros': { view: Libros, eventos: LibrosEventos },
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