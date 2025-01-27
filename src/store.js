import { configureStore } from '@reduxjs/toolkit'
import pasteReducer from './redux/pasteSlice'
import commandReducer from './redux/commandsSlice'
export const store = configureStore({
  reducer: {
    paste: pasteReducer,
    command: commandReducer,
  },
})