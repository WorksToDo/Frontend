
<div align="right">
  <img src="https://eneskzlcn.github.io/my-published-images/todo-icon.png" width="50" height="50">
</div>
<h3 align="center">About Todo Frontend Project</h3>
<br>

#### Project Information And Purpose

This project is a frontend part of the todo assignment project which provides a user interface to add new todos and list todos. User interface design technologies used in project are, nuxtjs, vuejs and also tailwindcss as style.

Todo assignment project developed with **ATDD** approach which stands for **'Acceptance Test Driven Development'**. Acceptance test is in different <a href="https://gitlab.com/todo32/acceptance">repository</a> and getting written synchronously with this project for each specific scenario.

As the ATDD approach, a scenario that written in acceptance part is implemented here with writing related component and unit tests first. After the tests written for the expectations, the actual components and functionalities is written. After all user acceptance scenarios, unit and component tests passes, consumer test is written according to expectation from backend api.

As a result of consumer test, pacts are generated and then as last step for this project, pacts are published to the [pactflow.io](https://pactflow.io/).


#### Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

```
#### Docker Setup For Development Serve

```bash
  #build image
  $ docker build -f Dockerfile.dev -t <image_name>:<tag_name> --build-arg \
   BACKEND_URL=<backend_url> <project_directory>

  # run image
  $ docker run <image_name>:<tag_name>
```
#### Docker Setup For Production

```bash
  #build image
  $ docker build -t <image_name>:<tag_name> --build-arg \
   BACKEND_URL=<backend_url> <project_directory>

  # run image
  $ docker run <image_name>:<tag_name>
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

<div align="right">
  <img src="https://nuxtjs.ir/logos/nuxt-icon-white.png" width="40" height="40">
  <img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/367_Vuejs-512.png" width="40" height="40">

  nuxtjs | vuejs
</div>
<br>
