# Iniciacion proyecto

## Mongo

```shell
show databases;
use admin;

db.createUser(
  {
    user: "lector",
    pwd: "123456",
    roles: [
       { role: "read", db: "blog" }
    ]
  }
);

db.createUser(
  {
    user: "escritor",
    pwd: "123456",
    roles: [
       { role: "readWrite", db: "blog" }
    ]
  }
);
  
mongo -u lector -p 123456;
mongo -u escritor -p 123456 --authenticationDatabase blog;
use blog;
db.posts.find();
```

```shell
npm init --y
```

# Dependencias

```shell
npm install express cors dotenv mullter mongoose express-validator --save
```

Asegurando las rutas

```shell
npm install jsonwebtoken bcrypt --save
```

Monitoreando en timepo real, para juntarlo con slack

```shell
npm i morgan-body -S
```

Integrar el log a slack

```shell
npm i @slack/webhook -S
```

## SQL ORM Sequelize [Mysql, Postgresql]

```shell
npm i sequelize mysql2 -S
```

Ojo Error: Please install mysql2 package manually

### Inclusion swagger

```shell
npm i swagger-ui-express swagger-jsdoc -S
```

## Pruebas unitarias y pruebas de integraci&oacute;n

***

```shell
npm i jest supertest cross-env -D
```