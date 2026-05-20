import { navigate } from './router.js'

const usuario = localStorage.getItem('usuario')
const path    = window.location.hash.replace('#', '') || '/login'

navigate(usuario ? path : '/login')