<a id="title"></a>

# ToDo List (VanillaJS)


A Vanilla JavaScript "Todo List" application with unit tests, ESLint, Prettier,
and a development server.
You can run it using Docker or directly with Node.js.

---

<details>
  <summary>

####  Run with Docker

  </summary>

#####  Build the image

```bash
docker build -t js-project .
```

#####  Run the app (dev server)

```bash
docker run -p 8080:8080 js-project dev
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

#####  Run tests

```bash
docker run --rm js-project
```


<details>
  <summary>

##### Stop and Remove Docker

  </summary>

##### 🔍 List running containers

```bash
docker ps
```

#####  Stop a container

```bash
docker stop <container_id>
```

##### Remove a container

```bash
docker rm <container_id>
```

##### Remove the image

```bash
docker rmi js-project
```

</details>

</details>

---

<details>
  <summary>

#### Run without Docker

  </summary>

##### Install dependencies

```bash
npm install
```

##### Start the dev server

```bash
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

#####  Run tests

```bash
npm test
```

##### Lint the code

```bash
npm run lint
```

##### Format the code

```bash
npm run format
```

</details>

---

#### 📝 `package.json` Scripts

| Command           | Description                            |
|------------------|----------------------------------------|
| `npm run dev`     | Start the local server (`live-server`) |
| `npm test`        | Run tests using Jest                   |
| `npm run lint`    | Run ESLint                             |
| `npm run format`  | Format code using Prettier             |

---

![back to top](#title)

[MIT](./LICENSE)


