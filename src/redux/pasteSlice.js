import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { json } from "react-router-dom";

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

export const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    addToPastes: (state,action) => {
      const paste = action.payload;
      //add a check => paste already existed
      state.pastes.push(paste)
      localStorage.setItem("pastes",
      JSON.stringify(state.pastes));
      toast("paste is created successfully")
    },
    updateToPastes: (state,action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item) => item._id === paste._id);
      if(index >= 0){
        state.pastes[index] = paste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("paste updated");
      }
    },
    resetAllPastes: (state, action) => {
      
    },
    removeFromPastes: (state,action) =>{

    },
  },
});

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, resetAllPastes, removeFromPastes} = pasteSlice.actions;

export default pasteSlice.reducer;
