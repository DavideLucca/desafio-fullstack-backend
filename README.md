# Desafio Fullstack - Backend

---

## Para iniciar o projeto

- Descompactar o arquivo do projeto
- Quando finalizado, rodar o seguinte comando na raíz do projeto:

```bash
yarn install
```

- Quando as instalações dos pacotes necessários forem finalizadas, rodar o seguinte comando para iniciar a aplicação:

```bash
yarn run dev
```

- O servidor irá iniciar em http://localhost:3333

## Rotas

- GET /posts: retorna uma lista de posts
- GET /posts/:id: retorna um post específico
- POST /posts: inclui um novo post

Body:

```bash
{
	"message": "Message sample"
}
```

- GET /posts/:id/comments: retorna a lista de comentários de um determinado post
- POST /posts/:id/comments: inclui um novo comentário em um determinado post

Body:

```bash
{
	"comment": "Comment sample"
}
```