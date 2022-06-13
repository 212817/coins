![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/212817/coins/react?style=for-the-badge)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/212817/coins/typescript?style=for-the-badge)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/212817/coins/redux?style=for-the-badge)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/212817/coins/redux-thunk?style=for-the-badge)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/212817/coins/axios?style=for-the-badge)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/212817/coins/react-router-dom?style=for-the-badge)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/212817/coins/react-hook-form?style=for-the-badge)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/212817/coins/@mui/material?style=for-the-badge)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)

- useDebounce
- interceptors
- navigate

### `npm start`

You must clone a repository to start the server `npm run dev`

https://github.com/212817/coins-server

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

### `npm run build`

```
├── .env
├── .eslintignore
├── .eslintrc
├── .gitignore
├── .prettierrc
├── jest.config.ts
├── package-lock.json
├── package.json
├── README.md
├── src
│  ├── API
│  │  ├── api.ts
│  │  └── apiDB.ts
│  ├── App.css
│  ├── App.tsx
│  ├── components
│  │  ├── FilterBar
│  │  │  ├── FilterBar.test.tsx
│  │  │  ├── FilterBar.tsx
│  │  │  └── index.ts
│  │  ├── HOC
│  │  │  └── withNavigate.tsx
│  │  ├── Layout.tsx
│  │  ├── Link
│  │  │  └── Link.tsx
│  │  ├── PrivatRouter
│  │  │  └── PrivatRouter.tsx
│  │  ├── Select
│  │  │  └── Select.tsx
│  │  ├── TableCoins
│  │  │  ├── index.ts
│  │  │  ├── TableCoins.test.tsx
│  │  │  └── TableCoins.tsx
│  │  └── TextField
│  │    └── TextField.tsx
│  ├── hooks
│  │  └── useDebounce.ts
│  ├── index.css
│  ├── index.tsx
│  ├── pages
│  │  ├── ForgotPassword.tsx
│  │  ├── Home.tsx
│  │  ├── Login.tsx
│  │  ├── NotFound.tsx
│  │  ├── Registration.tsx
│  │  └── User.tsx
│  ├── setupTests.ts
│  ├── store
│  │  ├── actions
│  │  │  ├── actionTypes.actions.ts
│  │  │  ├── coinsActions.ts
│  │  │  └── userActions.ts
│  │  ├── reducers
│  │  │  ├── CoinsReducer.ts
│  │  │  └── UserReducer.ts
│  │  ├── services
│  │  │  ├── authService.ts
│  │  │  └── fetchUsers.ts
│  │  └── store.ts
│  ├── test
│  │  └── test-utils.tsx
│  └── types
│    ├── ICoin.ts
│    └── IUser.ts
└── tsconfig.json
```