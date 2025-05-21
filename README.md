<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="100" alt="NestJS Logo" />
  </a>
</p>

<p align="center">API RESTful construída com NestJS, Prisma e PostgreSQL para gerenciamento de aulas e alunos.</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@nestjs/core" target="_blank">
    <img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" />
  </a>
  <a href="https://www.npmjs.com/package/@nestjs/core" target="_blank">
    <img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" />
  </a>
  <a href="https://www.npmjs.com/package/@nestjs/core" target="_blank">
    <img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" />
  </a>
</p>

---

## 📚 Descrição

API desenvolvida como atividade prática de **Engenharia de Software**, com o objetivo de aplicar conceitos de modularização, conexão com banco de dados relacional e uso de ORM moderno (Prisma).

---

## 🧪 Tecnologias utilizadas

- [NestJS](https://nestjs.com/) – framework Node.js para aplicações escaláveis
- [Prisma ORM](https://www.prisma.io/) – ORM moderno para Node.js
- [PostgreSQL](https://www.postgresql.org/) – banco de dados relacional
- TypeScript

---

## 🚀 Como rodar o projeto

### 1. Instalar dependências

```bash
npm install
```

### 2. Configurar o banco de dados

Crie um arquivo `.env` na raiz com sua conexão:

```env
DATABASE_URL="postgresql://postgres:123456@localhost:5432/escola"
```

### 3. Rodar as migrations

```bash
npx prisma migrate dev --name init
```

### 4. Iniciar o servidor em modo desenvolvimento

```bash
npm run start:dev
```

> A aplicação ficará disponível em: `http://localhost:3000`

---

## 📌 Endpoints disponíveis

### 📘 ClasseDeAula

| Método | Rota        | Descrição            |
|--------|-------------|----------------------|
| POST   | `/classe`   | Cria nova classe     |
| GET    | `/classe`   | Lista todas as classes |

#### Exemplo de corpo `POST /classe`:
```json
{
  "nome": "Matemática",
  "descricao": "Aula de matemática básica"
}
```

---

### 👨‍🎓 Aluno

| Método | Rota       | Descrição                        |
|--------|------------|----------------------------------|
| POST   | `/aluno`   | Cria aluno vinculado a uma classe |
| GET    | `/aluno`   | Lista todos os alunos com suas classes |

#### Exemplo de corpo `POST /aluno`:
```json
{
  "nome": "João da Silva",
  "email": "joao@email.com",
  "classeDeAulaId": 1
}
```

---