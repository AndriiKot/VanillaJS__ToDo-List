<a id="title"></a>

# ToDo List (VanillaJS)

A Vanilla JavaScript "Todo List" application with unit tests, ESLint, Prettier,
and a development server with Vite.
You can run it using Docker or directly with Node.js.


## 🚀 Key Features

- **📝 Task Management**: Create, edit, and delete todo items
- **💾 Persistent Storage**: Tasks persist after browser reload/close using **localStorage**
- **🌐 Offline Functionality**: Works completely offline - no internet required
- **🔄 Cross-Tab Sync**: Real-time synchronization between browser tabs using **Broadcast Channel API**
- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **✅ Validation**: Input validation with user-friendly error messages
- **🎨 Modern UI**: Clean and intuitive user interface

## 🔧 How It Works

### localStorage Persistence
- All tasks are automatically saved to the browser's localStorage
- Data persists even after closing the browser or restarting the computer
- No server required - everything runs client-side

### Broadcast Channel API Synchronization
- Instant synchronization between multiple open tabs/windows
- Changes made in one tab immediately appear in all other tabs
- Perfect for users who work with multiple browser windows

### Offline Capability
- Fully functional without internet connection
- Once loaded, the application works completely offline
- Tasks are synced when tabs are open simultaneously


[![npm version](https://img.shields.io/github/package-json/v/AndriiKot/VanillaJS__ToDo-List?filename=./package.json)](https://docs.npmjs.com/about-semantic-versioning)
[![License](https://img.shields.io/github/license/AndriiKot/VanillaJS__ToDo-List)](https://choosealicense.com/licenses/mit/)
[![GitHub Stars](https://img.shields.io/github/stars/AndriiKot/VanillaJS__ToDo-List?style=flat-square)](https://github.com/AndriiKot/VanillaJS__ToDo-List/stargazers)
[![GitHub last commit](https://img.shields.io/github/last-commit/AndriiKot/VanillaJS__ToDo-List)](https://github.com/AndriiKot/VanillaJS__ToDo-List/commits/main)
[![GitHub contributors](https://img.shields.io/github/contributors/AndriiKot/VanillaJS__ToDo-List)](https://github.com/AndriiKot/VanillaJS__ToDo-List/graphs/contributors)
[![GitHub issues](https://img.shields.io/github/issues/AndriiKot/VanillaJS__ToDo-List)](https://github.com/AndriiKot/VanillaJS__ToDo-List/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/AndriiKot/VanillaJS__ToDo-List)](https://github.com/AndriiKot/VanillaJS__ToDo-List/pulls)
[![CI](https://github.com/AndriiKot/VanillaJS__ToDo-List/actions/workflows/ci.yml/badge.svg)](https://docs.github.com/en/actions)
[![CodeQL](https://github.com/AndriiKot/VanillaJS__ToDo-List/actions/workflows/codeql-analysis.yml/badge.svg)](https://codeql.github.com/)
[![codecov](https://codecov.io/gh/AndriiKot/VanillaJS__ToDo-List/branch/main/graph/badge.svg)](https://about.codecov.io/)
[![Tests](https://img.shields.io/badge/tests-passing-brightgreen)](https://jestjs.io/)
[![ESLint](https://img.shields.io/badge/linted%20JS-eslint-blue)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/styled%20with-prettier-ff69b4)](https://prettier.io/)
[![Stylelint](https://img.shields.io/badge/linted%20CSS-stylelint-yellowgreen)](https://stylelint.io/)
[![Node.js Version](https://img.shields.io/badge/node-20.x-green)](https://nodejs.org/en/docs)<table>

  <thead>
    <tr>
      <th height=33 width=100>HTML</th></th>
      <th height=33 width=100>CSS</th>
      <th height=33 width=100>JavaScript</th>
      <th height=33 width=100>DOM</th>
      <th height=33 width=100>localStorage</th>
      <th height=33 width=100>Broadcast Channel API</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td height=100 width=100>
        <a href="https://html.spec.whatwg.org/multipage/">
          <img src="icons/svg/html.svg" alt="HTML">
        </a>
      </td>
      <td height=100 width=100>
        <a href="https://www.w3.org/Style/CSS/">
          <img src="icons/svg/css.svg" alt="CSS">
        </a>
      </td>
      <td height=100 width=100>
        <a href="https://ecma-international.org/publications-and-standards/standards/">
          <img src="icons/svg/javascript.svg" alt="JavaScript/ECMAScript">
        </a>
      </td>
      <td height=100 width=100>
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model">
          <img src="icons/svg/dom.svg" alt="DOM">
        </a>
      </td>
      <td height=100 width=100>
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage">
          <img src="icons/svg/localstorage.svg" alt="localStorage">
        </a>
      </td>
      <td height=100 width=100>
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API">
          <img src="icons/svg/broadcast-channel-app.svg" alt="Broadcast Channel API">
        </a>
      </td>
    </tr>
  </tbody>
</table>

<details>
  <summary>
    <h4>📦 Other Technologies and Tools</h4>
  </summary>

  <table>
    <thead>
      <tr>
        <th height=33 width=100>Docker</th>
        <th height=33 width=100>Ubuntu</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td height=100 width=100>
          <a href="https://www.docker.com/">
            <img src="icons/svg/docker.svg" alt="Docker">
          </a>
        </td>
        <td height=100 width=100>
          <a href="https://ubuntu.com/">
            <img src="icons/svg/ubuntu.svg" alt="Ubuntu">
          </a>
        </td>
      </tr>
    </tbody>
  </table>

  <table>
    <thead>
      <tr>
        <th height=33 width=100>NodeJS</th>
        <th height=33 width=100>npm</th>
        <th height=33 width=100>Vite</th>
        <th height=33 width=100>Jest</th>
        <th height=33 width=100>PostCSS</th>
        <th height=33 width=100>ESLint</th>
        <th height=33 width=100>Prettier</th>
        <th height=33 width=100>Stylelint</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td height=100 width=100>
          <a href="https://nodejs.org/en/">
            <img src="icons/svg/nodejs.svg" alt="NodeJS">
          </a>
        </td>
        <td height=100 width=100>
          <a href="https://www.npmjs.com/">
            <img src="icons/svg/npm.svg" alt="npm">
          </a>
        </td>
        <td height=100 width=100>
        <a href=https://vitejs.dev/>
          <img src=icons/svg/vitejs.svg alt=Vite>
        </a>
      </td>
        <td height=100 width=100>
          <a href="https://jestjs.io/">
            <img src="icons/svg/jest.svg" alt="Jest">
          </a>
        </td>
        <td height=100 width=100>
          <a href="https://postcss.org/">
            <img src="icons/svg/postcss.svg" alt="PostCSS">
          </a>
        </td>
        <td height=100 width=100>
          <a href="https://eslint.org/">
            <img src="icons/svg/eslint.svg" alt="ESLint">
          </a>
        </td>
        <td height=100 width=100>
          <a href="https://prettier.io/">
            <img src="icons/svg/prettier.svg" alt="Prettier">
          </a>
        </td>
        <td height=100 width=100>
          <a href="https://stylelint.io/">
            <img src="icons/svg/stylelint.svg" alt="Stylelint">
          </a>
        </td>
      </tr>
    </tbody>
  </table>

  <table>
    <thead>
      <tr>
        <th height=33 width=100>Git</th>
        <th height=33 width=100>Git Hooks</th>
        <th height=33 width=100>GitHub Actions</th>
        <th height=33 width=100>CodeQL</th>
        <th height=33 width=100>Codecov</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td height=100 width=100>
          <a href="https://git-scm.com/doc">
            <img src="icons/svg/git.svg" alt="Git">
          </a>
        </td>
        <td height=100 width=100>
          <a href="https://git-scm.com/docs/git-hook">
            <img src="icons/svg/git-hooks.svg" alt="Git hooks">
          </a>
        </td>
        <td height=100 width=100>
          <a href="https://github.com/features/actions/">
            <img src="icons/svg/githubactionsdarkstheme.svg" alt="GitHub Actions">
          </a>
        </td>
        <td height=100 width=100>
          <a href="https://codeql.github.com/">
            <img src="icons/svg/codeql.svg" alt="CodeQL">
          </a>
        </td>
        <td height=100 width=100>
          <a href="https://codecov.io/">
            <img src="icons/svg/codecov.svg" alt="Codecov">
          </a>
        </td>
      </tr>
    </tbody>
  </table>

</details>

---

<details>
  <summary>

#### Run with Docker Compose

  </summary>

##### Start development server

```bash
docker-compose up frontend
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

##### Run tests

```bash
docker-compose run --rm frontend-test
```


##### Stop and Remove Docker



```bash
docker-compose down
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

Open [http://localhost:3000](http://localhost:3000) in your browser.

##### Run tests

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

| Command          | Description                     |
| ---------------- | ------------------------------- |
| `npm run dev`    | Start the local server (`Vite`) |
| `npm test`       | Run tests using Jest            |
| `npm run lint`   | Run ESLint                      |
| `npm run format` | Format code using Prettier      |

---

[back to top](#title)

[MIT](./LICENSE)
