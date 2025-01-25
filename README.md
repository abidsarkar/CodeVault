# CodeVault
CodeVault is a React-Tailwind application designed for Store, Organize, and Share Your Code &amp; Command-Line Snippets

# install tailwindcss 3.4.17
```sh
npm install -D tailwindcss@3.4.17 postcss autoprefixer
npx tailwindcss init -p
```
# install react router dom 6.26.2
```sh
npm i react-router-dom@6.26.2
```
# install react redux 9.2.0
```sh
npm install @reduxjs/toolkit react-redux@9.2.0
```
# create store.js file inside src
```sh
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})
```
# warp main.jsx file with provider
```sh
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './store.js'
import { Provider } from 'react-redux'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
    <App />
    </Provider>
  </StrictMode>,
)
```
find how to implement react reducer toolkit in
[text](https://redux-toolkit.js.org/tutorials/quick-start)