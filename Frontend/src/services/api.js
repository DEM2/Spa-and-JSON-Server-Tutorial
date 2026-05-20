const BASE_URL = 'http://localhost:3001'
 
export async function login(email, password) {
  const res      = await fetch(`${BASE_URL}/usuarios?email=${encodeURIComponent(email)}`)
  const usuarios = await res.json()
 
  // Compara password como string para evitar problema con números
  const usuario = usuarios.find(u => u.password === password)
  if (!usuario) return null
 
  localStorage.setItem('usuario', JSON.stringify(usuario))
  return usuario
}
 
export async function getBook(id) {
  const res = await fetch(`${BASE_URL}/libros?usuarioId=${id}`)
  return await res.json() 
}
 
export async function postBook(book) {
  const res = await fetch(`${BASE_URL}/libros`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book)
  })
  return await res.json()
}