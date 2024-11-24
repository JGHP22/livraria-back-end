## sequelizeExpress

# Introdução

Este projeto apresenta uma API que busca demonstrar o funcionamento de uma livraria, armazenando dados de login, tipos de livros e unidades armazenadas.

Instruções

PARTE 1: MySQL

Devemos abrir o MySQL e criar uma rota. Após isso, crie um banco de dados:

```python 
create database "nome_do_banco_de_dados"
```

Após isso, você pode encerrar o MySQL.

# PARTE 2: npm

Após terminar o MySQL, vamos para o VS Code.

1- Vá para onde você clonou o repositório e abra o cmd.

2- Será necessário entrar na pasta do repositório. Para isso, digite no cmd:

```python
cd livraria-back-end
```

3-faça a instalação do npm:

```python
npm install
```

4- conectesse ao servidor usando:

```python
npm run dev
```


# Parte 3: modificações

Você terá que alterar algumas partes do código para funcionar.

Vá no arquivo .env e altere o codigo para suas configurações, por exemplo:

```.env
DB_NAME="nome da database"
DB_USER="nome do seu usuario do Mysql"
DB_PASS="sua senha"
DB_HOST="Seu endereço de Ip ou localhost (Ip local da sua maquina)"
DB_PORT=porta de conexão (padrão do Mysql: 3306)"
```
## Objetivo
Buscamos aprimorar nossos conhecimentos sobre desenvolvimento de API e aprimorar habilidades de back-end para trabalhos futuros.













