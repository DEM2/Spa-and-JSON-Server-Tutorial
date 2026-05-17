const BASE_URL = 'http://localhost:3001'

export async function login(email, password) {
    const res = await fetch(`${BASE_URL}/usuarios?email=${email}&password=${password}`)
    const usuarios = await res.json()

    if (usuarios.length === 0) return null  // no existe

    // Guarda la sesión en localStorage
    localStorage.setItem('usuario', JSON.stringify(usuarios[0]))
    return usuarios[0]
}