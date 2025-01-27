import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { json } from "react-router-dom";

const initialState = {
  commands: localStorage.getItem("commands")
    ? JSON.parse(localStorage.getItem("commands"))
    : [],
};

export const commandSlice = createSlice({
  name: "command",
  initialState,
  reducers: {
    addToCommand: (state, action) => {
        const command = action.payload;
        // Check if the command already exists
        const isDuplicate = state.commands.some((existingCommand) => 
          existingCommand.title === command.title && 
          existingCommand.content === command.content 
        );
      
        if (!isDuplicate) { 
          state.commands.push(command);
          localStorage.setItem("commands", JSON.stringify(state.commands));
          toast.success("Command is created successfully");
        } else {
          toast.error("Command already exists."); 
        }
      },
    updateToCommand: (state, action) => {
      const command = action.payload;
      const index = state.commands.findIndex(
        (item) => item._id === command._id
      );
      if (index >= 0) {
        state.commands[index] = command;
        localStorage.setItem("commands", JSON.stringify(state.commands));
        toast.success("command updated");
      }
    },
    resetAllCommands: (state, action) => {
      state.commands = [];
      localStorage.removeItem("commands");
    },
    removeFromCommands: (state, action) => {
      const commandId = action.payload;
    //   console.log(commandId);
      const index = state.commands.findIndex((item) => item._id === commandId);

      if (index >= 0) {
        state.commands.splice(index, 1);
        localStorage.setItem("commands", JSON.stringify(state.commands));
        toast.success("command deleted");
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCommand, updateToCommand, resetAllCommands, removeFromCommands } =
commandSlice.actions;

export default commandSlice.reducer;
