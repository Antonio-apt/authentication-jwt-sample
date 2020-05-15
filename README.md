# Authentication jwt and passport sample

Um pequeno exemplo de um api com autenticação de routas usando jwt e passport. Também usando como ORM o Sequelize para um banco de dados SQlite 

---
## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.


## Install

    $ git clone https://github.com/Antonio-apt/authentication-jwt-sample
    $ cd authentication-jwt-sample
    $ yarn install

## Configure app


Você deve ter um arquivo .env com suas variaveis de ambiente, no projeto já há um .env.example para ser usado como base

Open `./database/config/database.js` para acessar as configurações do banco, no caso são simples para o SQlite.

Para configurar o banco você deve:

- Criar um arquivo chamado database.db;
- Com o Sequelize-cli instalado executar "npx sequelize-cli db:migrate";

## Running the project

    $ yarn start

## Routes

Ai api têm apenas 3 rotas para demonstração, uma dediacada ao registro de usuarios, uma rota para o login destes usuarios e uma rota protrgida onde só quem esta logado que apenas retorna o nome do usúario

### Register

POST na rota "/register" com o body de exemplo:

{
	"name": "test",
	"email": "test@test",
	"password": "pass"
}

O retorno de sucesso deverá ser:

{
  "message": "User test successfully created"
}

### Login

POST na rota "/login" com o body de exemplo:

{
	"email": "test@test",
	"password": "pass"
}

O retorno de sucesso deverá ser: 

{
  "token": "{token here}"
}

### Profile

GET na rota "/profile" com o header de exemplo:

Authorization : JWT {token here}

O retorno de sucesso deverá ser:

{
  "user": "Jose",
  "token": "JWT {token here}"
}

