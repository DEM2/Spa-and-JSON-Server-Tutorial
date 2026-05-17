# Creating a Single-Page Application (SPA) with Vanilla JS and JSON Server

This project consists of building a Single Page Application (SPA) using Vanilla JavaScript and JSON Server. It is divided into two stages: an authentication flow where the user can log in, and a book management system with full CRUD functionality.  

## what is SPA ? 

SPA is a type of web application that loads a single web document and updates its content by manipulating the DOM, dynamically rendering one section or another. It remains structured content but changes the view based on user actions; this is equivalent to implementing a multi-page application without actually being one. 

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

The result would be the paths to the resources, which are the top-level keys in the dictionary:

```bash
$ Endpoints:
http://localhost:3001/usuarios
http://localhost:3001/libros
```

## Author
Daniel Mendoza
Systems Engineer | Software Developer
