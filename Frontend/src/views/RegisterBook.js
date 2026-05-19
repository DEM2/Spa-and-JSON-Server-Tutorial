
export function register() {
    return `
    <div class=register>
       <article>
          <form id="form-register">
            <input id="title" type="text" placeholder="Title" required />
            <input id="author" type="text" placeholder="Author" required />
            <button type="submit">Register</button>
         </form>
       </article>

       <table>
         <thead>
            <th>Id</th>
            <th>Title</th>
            <th>Author</th>
         </thead>
         <tbody>
             <td>Author</td>
             <td>Author</td>
             <td>Author</td>
         </tbody>
          <tbody>
             <td>Author</td>
             <td>Author</td>
             <td>Author</td>
         </tbody>
       </table>
    <div>
    `
}