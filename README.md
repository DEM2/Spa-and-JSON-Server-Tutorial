# Creating a Single-Page Application (SPA) with Vanilla JS and JSON Server

This project consists of building a Single Page Application (SPA) using Vanilla JavaScript and JSON Server. It is divided into two stages: an authentication flow where the user can log in, and a book management system with CRUD functions for adding and reading.  

## what is SPA ? 

A Single Page Application (SPA) is a web application that lives entirely within a single HTML page. When the user opens it for the first time, the browser downloads everything it needs to work: the base HTML, the CSS, and the JavaScript. From that point on, the page never reloads, no matter how many screens or sections the user navigates through.
What changes visually is not the page itself, but its internal content, which is dynamically updated by JavaScript manipulating the DOM. When the application needs new data, it requests it from the server in the background through an API, without interrupting the user's experience. This makes everything feel instant and fluid.

## what is Json Server ? 

1. Allows you to create a mock REST API using just a JSON file, which is very useful for front-end developers while the actual backend is being created.  
2. JSON Server supports standard HTTP methods for CRUD operations.
3. Every time you make a POST, PUT, PATCH, or DELETE request, write the changes back to the JSON directly and store them in local memory.
4. The JSON used functions as a NoSQL database.

## How does the JSON server work?

We have our json file 

```json
{
  "usuarios": [
    { "id": 1, "email": "daniel@mail.com", "password": "123456" },
    { "id": 2, "email": "maria@mail.com", "password": "abcdef" }
  ],
  "libros": [
    { "id": 1, "titulo": "Cien años de soledad", "autor": "García Márquez", "usuarioId": 1 },
    { "id": 2, "titulo": "La vorágine", "autor": "José Eustasio Rivera", "usuarioId": 1 },
    { "id": 3, "titulo": "El túnel", "autor": "Ernesto Sábato", "usuarioId": 2 },
    { "id": 4, "titulo": "Rayuela", "autor": "Julio Cortázar", "usuarioId": 2 }
  ]
}
```
In our backend simulation project, we installed the JSON server using the following command:

```bash
$ npm install json-server 
```

Next, we run our project using the following command, which includes the db.json file (the JSON file we created earlier) and the port:

```bash
$ npm json-server db.json --port 3001
```

The result would be the paths to the resources, which are the top-level keys in the in the object:

```bash
$ Endpoints:
http://localhost:3001/usuarios
http://localhost:3001/libros
```

## How do I use the server? 

To consume the service, the native JavaScript API (fetch) is used :

```javaScript
async function peticion (url=" ", data={}){
    const response = await fetch(url, {
        method: " ", // post or get or delete or put/patch
        body: data, // for example, in the case of a POST or PUT/PATCH request 
        headers: {
           'Content-Type': 'application/json'
        },  //  This tells the server what type of information we are sending in the body; in this example, it is JSON. 
    })
}
```

## Project Structure

```
TUTORIA-SPA/
├── Backend/
│   ├── db.json
│   ├── package.json
│   └── ...
└── Frontend/
    └── src/
        ├── services/   # API Calls
        ├── styles/     # CSS and SASS Styles
        └── views/      # Componentes y vistas
```


## Author

Daniel Mendoza
Systems Engineer | Software Developer
