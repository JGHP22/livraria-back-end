## sequelizeExpress

# Introdução

Este projeto apresenta uma API que busca demonstrar o funcionamento de uma livraria, armazenando dados de login, tipos de livros e unidades armazenadas.

Instruções

PARTE 1: MySQL

Devemos abrir o MySQL e criar uma Database:

![a](https://github.com/user-attachments/assets/cb26af1e-f2cd-4052-b9ac-350f12c2a71e)

```python 
create database "nome_do_banco_de_dados"
```

Após isso, você pode encerrar o MySQL.

# PARTE 2: npm

Após terminar o MySQL, vamos para o VS Code.

1- Vá para onde você clonou o repositório e abra o cmd.

![a](https://github.com/user-attachments/assets/55411b74-23ee-4e35-bb09-950e354cc1fd)

2- Será necessário entrar na pasta do repositório. Para isso, digite no cmd:

```cmd
cd livraria-back-end
```

3-faça a instalação do npm:

```cmd
npm install
```

4- conectesse ao servidor usando:

```cmd
npm run dev
```


# Parte 3: modificações

Você terá que alterar algumas partes do código para funcionar.

Vá no arquivo .env e altere o codigo para suas configurações, por exemplo:

```.env
DB_NAME="Nome da sua database"
DB_USER="Nome do seu usuário do banco"
DB_PASS="Senha do seu usuário do banco"
DB_HOST="Domínio ou IP onde o banco está hospedado"
DB_PORT="Número da porta onde o banco está rodando"
```
## Objetivo
Buscamos aprimorar nossos conhecimentos sobre desenvolvimento de API e aprimorar habilidades de back-end para trabalhos futuros.













