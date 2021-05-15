# Documentação

## Iniciar Software


1. `npm install`
2. Colocar seu mongo db no server.js (pessoa, livro, serie)
3. `npm start`


## API Livros

Modelo:
```
Titulo: String
Autor: String (Filtravel)
Valor: Integer
```

### GET /livro
```
[
    {
        "_id": "609fe1281ea9ac2a84e49012",
        "titulo": "As aventuras de Roger",
        "autor": "Roger",
        "valor": 399.9,
        "__v": 0
    },
    ...
]
```

### GET /livro/:id
```
{
    "_id": "609fe1281ea9ac2a84e49012",
    "titulo": "As aventuras de Roger",
    "autor": "Roger",
    "valor": 399.9,
    "__v": 0
}
```

### POST /livro
Body:
```
{
    "titulo": "As aventuras de Roger",
    "autor": "Roger",
    "valor": 399.90
}
```

Output:
```
{
    "_id": "609fe1281ea9ac2a84e49012",
    "titulo": "As aventuras de Roger",
    "autor": "Roger",
    "valor": 399.9,
    "__v": 0
}
```

### PUT /livro/:id
Body:
```
{
    "titulo": "As aventuras de Roger",
    "autor": "Roger",
    "valor": 200.90
}
```

Output:
```
{
    "_id": "609fe1281ea9ac2a84e49012",
    "titulo": "As aventuras de Roger",
    "autor": "Roger",
    "valor": 200.9,
    "__v": 0
}
```

### DELETE /livro/:id
```
{
    "Mensagem": "Livro deletado com sucesso"
}
```


## API Pessoas

Modelo:
```
Nome: String (Filtravel)
Idade: Integer
```

### GET /pessoa
```
[
    {
        "_id": "609fe4eeca4fea2af4c0c81a",
        "nome": "Roger",
        "idade": 21,
        "__v": 0
    },
    ...
]
```

### GET /pessoa/:id
```
{
    "_id": "609fe4eeca4fea2af4c0c81a",
    "nome": "Roger",
    "idade": 21,
    "__v": 0
}
```

### POST /pessoa
Body:
```
{
    "nome": "Roger",
    "idade": 21
}
```

Output:
```
{
    "_id": "609fe4eeca4fea2af4c0c81a",
    "nome": "Roger",
    "idade": 21,
    "__v": 0
}
```

### PUT /pessoa/:id
Body:
```
{
    "nome": "Roger",
    "idade": 21
}
```

Output:
```
{
    "_id": "609fe4eeca4fea2af4c0c81a",
    "nome": "Roger",
    "idade": 21,
    "__v": 0
}
```

### DELETE /pessoa/:id
```
{
    "Mensagem": "Pessoa deletada com sucesso"
}
```

## API Series

Modelo:
```
Titulo: String
Strimming: String (Filtravel)
```

### GET /series
```
[
    {
        "_id": "609ff7d0ebc9d30c78763c1d",
        "titulo": "As aventuras de Roger",
        "streamming": "Prime Video",
        "__v": 0
    },
    ...
]
```

### GET /series/:id
```
{
    "_id": "609ff7d0ebc9d30c78763c1d",
    "titulo": "As aventuras de Roger",
    "streamming": "Prime Video",
    "__v": 0
}
```

### POST /series
Body:
```
{
    "titulo": "As aventuras de Roger",
    "streamming": "Netflix"
}
```

Output:
```
{
    "_id": "609ff7d0ebc9d30c78763c1d",
    "titulo": "As aventuras de Roger",
    "streamming": "Netflix",
    "__v": 0
}
```

### PUT /series/:id
Body:
```
{
    "titulo": "As aventuras de Roger",
    "streamming": "Prime Video"
}
```

Output:
```
{
    "_id": "609ff7d0ebc9d30c78763c1d",
    "titulo": "As aventuras de Roger",
    "streamming": "Prime Video",
    "__v": 0
}
```

### DELETE /series/:id
```
{
    "Mensagem": "Serie deletada com sucesso"
}
```