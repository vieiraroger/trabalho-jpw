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