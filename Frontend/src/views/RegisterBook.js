import { getBook, postBook } from '../services/api.js'
 
export function register() {
  return `
    <section class="layout">
 
      <!-- FORM CARD -->
      <article class="card">
        <header class="card__header">
          <h2><i class="ti ti-book-plus"></i> Registrar libro</h2>
        </header>
        <form class="card__body" id="form-libro" novalidate>
          <input id="titulo" type="text" placeholder="Título" />
          <input id="autor"  type="text" placeholder="Autor"  />
          <select id="genero">
            <option value="" disabled selected>Género</option>
            <option>Novela</option>
            <option>Ficción</option>
            <option>Ciencia</option>
            <option>Historia</option>
            <option>Poesía</option>
          </select>
          <button class="btn-submit" type="submit">
            <i class="ti ti-plus"></i> Agregar libro
          </button>
        </form>
      </article>
 
      <!-- TABLE CARD -->
      <article class="card">
        <header class="card__toolbar">
          <h2><i class="ti ti-books"></i> Catálogo <span class="badge" id="badge-count">0</span></h2>
        </header>
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Autor</th>
              <th>Género</th>
            </tr>
          </thead>
          <tbody id="books-tbody"></tbody>
        </table>
        <figure class="empty-state" id="empty-state">
          <i class="ti ti-books"></i>
          <figcaption>
            <p>Sin libros registrados</p>
            <small>Los libros que agregues aparecerán aquí</small>
          </figcaption>
        </figure>
      </article>
 
    </section>
  `
}
 
// ─── Carga y renderiza los libros del usuario ─────
async function cargarLibros() {
  const usuario    = JSON.parse(localStorage.getItem('usuario'))
  const books      = await getBook(usuario.id)
  const tbody      = document.getElementById('books-tbody')
  const emptyState = document.getElementById('empty-state')
  const badge      = document.getElementById('badge-count')
 
  tbody.innerHTML = ''
 
  if (books.length === 0) {
    emptyState.style.display = 'flex'
    badge.textContent = '0'
    return
  }
 
  emptyState.style.display = 'none'
  badge.textContent = books.length
 
  books.forEach(book => {
    tbody.insertAdjacentHTML('beforeend', `
      <tr>
        <td>${book.titulo}</td>
        <td>${book.autor}</td>
        <td>${book.genero}</td>
      </tr>
    `)
  })
}
 
// ─── Eventos ──────────────────────────────────────
export async function registerEvento() {
  await cargarLibros()
 
  document.getElementById('form-libro').addEventListener('submit', async (e) => {
    e.preventDefault()
 
    const usuario = JSON.parse(localStorage.getItem('usuario'))
 
    const book = {
      titulo:    document.getElementById('titulo').value,
      autor:     document.getElementById('autor').value,
      genero:    document.getElementById('genero').value,
      usuarioId: Number(usuario.id)
    }
 
    await postBook(book)
    await cargarLibros()
    e.target.reset()
  })
}