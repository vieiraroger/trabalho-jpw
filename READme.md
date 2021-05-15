# Documentação

## Iniciar Software


1. `npm install`
2. `npm start`

## API Livros

Modelo:
```
Titulo: String
Autor: String
Valor: Integer
```

### GET []
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

### GET /:id
```
{
    "_id": "609fe1281ea9ac2a84e49012",
    "titulo": "As aventuras de Roger",
    "autor": "Roger",
    "valor": 399.9,
    "__v": 0
}
```

### POST
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

### PUT /:id
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

### Delete
```
{
    "Mensagem": "Livro deletado com sucesso"
}
```


## API Pessoas

Modelo:
```
Nome: String
Idade: Integer
```

### GET []
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

### GET /:id
```
{
    "_id": "609fe4eeca4fea2af4c0c81a",
    "nome": "Roger",
    "idade": 21,
    "__v": 0
}
```

### POST
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

### PUT /:id
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

### Delete
```
{
    "Mensagem": "Pessoa deletada com sucesso"
}
```

## API Series

Modelo:
```
Titulo: String
Autor: String
Valor: Integer
```

### GET []
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

### GET /:id
```
{
    "_id": "609ff7d0ebc9d30c78763c1d",
    "titulo": "As aventuras de Roger",
    "streamming": "Prime Video",
    "__v": 0
}
```

### POST
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

### PUT /:id
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

### Delete
```
{
    "Mensagem": "Serie deletada com sucesso"
}
```