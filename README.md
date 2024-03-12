# Requirements

- NodeJS v21
- Docker v25 && Docker Compose v2 (optional)

# How to setup

## Docker Version

```bash
$ docker build --no-cache -t todo_app
$ docker run todo_app
```

## Manuell NodeJS Version

### base setup

```bash
$ git clone https://github.com/PokeFred/todo-app.git
$ cd todo-app
$ npm install
```

### development environment

```bash
$ npm run dev
```

### production environment

```bash
$ npm run build
$ npm start
```
