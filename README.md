<h1 align="center">
Template: Vite + Vitest + React + TypeScript
</h1>

<div align="center">

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

</div>

## Usage

### Use Template button
Click the `Use this template` button above the file list, then use the Owner drop-down menu, and select the account you want to own the repository. Creating a repository from a template has the following advantages:

A repository created from a template starts with a single commit.
Commits to a repository created from a template do appear in your contribution graph.
Creating a repository from a template starts a new project quickly.


## Development

To get a local copy, clone it using:
```sh
git clone https://github.com/castromaciel/template-vite-react-ts.git
```

### Make it your own

```sh
rm -rf .git && git init
git add .
git commit -m "Initial commit"
```

### Install dependencies:

To install dependencies use one of the following commands:

```sh
npm install
```

```sh
yarn install
```

```sh
pnpm install
```

### Available Scripts

In this project, you can run the following scripts:

| Script        | Description                                         |
| ------------- | --------------------------------------------------- |
| npm run build    | Builds the app for production to the `dist` folder. |
| npm run dev      | Runs the app in the development mode.               |
| npm run preview  | Start a local web server that serves the built solution from ./dist for previewing |
| npm run test     | Runs tests with vitest.                             |

## Base Dependencies

- [axios](https://github.com/axios/axios) for networking.
- [sass](https://sass-lang.com/) for stylesheets.
- [vitest](https://vitest.dev/) for testing.

## Folder Structure

```
template-vite-react-ts
├── .github
    ├── workflows
├── node_modules
├── public
│   └── vite.svg
└── src
    ├── __tests__
        ├── App.test.tsx
    ├── assets
        ├── react.svg
    ├── App.scss
    ├── App.tsx
    ├── index.scss
    ├── main.tsx
    └── vite-env.d.ts
├── .env.development
├── .eslintignore
├── .eslintrc.json
├── .gitattributes
├── .gitignore
├── index.html
├── LICENSE
├── package.json
├── README.md
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.js
├── vitest.config.js
```

## Styleguide

For coding styling, I decided to use [eslint](https://eslint.org/) and the [eslint-airbnb configuration](https://github.com/airbnb/javascript#readme), with some personal modifications.

## Credits

Vite Template React with TypeScript is built and maintained by [Castro Maciel](https://github.com/castromaciel)

## License

This project is licensed under the terms of the [MIT license](./LICENSE).
