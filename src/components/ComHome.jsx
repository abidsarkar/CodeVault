import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToCommand, updateToCommand } from "../redux/commandsSlice";

const ComHome = () => {
  const [commandTitle, setCommandTitle] = useState("");
  const [commandValue, setCommandValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const commandId = searchParams.get("commandId");
  const allCommands = useSelector((state) => state.command.commands);
  const dispatch = useDispatch();

  useEffect(() => {
    if (commandId) {
      console.log("id is valid" , commandId);
      const command = allCommands.find((p) => p._id === commandId);
      setCommandTitle(command?.title || "");
      setCommandValue(command?.content || "");
    }
  }, [commandId]);

  function createCommand() {
    const command = {
      title: commandTitle,
      content: commandValue,
      _id: commandId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (commandId) {
      dispatch(updateToCommand(command));
    } else {
      dispatch(addToCommand(command));
    }

    setCommandTitle("");
    setCommandValue("");
    setSearchParams({});
  }

  return (
    <div className="flex flex-col items-center p-6">
      <div className="w-full max-w-3xl">
        <div className="flex justify-between p-4 items-center">
          <h1 className="text-2xl font-bold text-gray-700 mb-4">
            Create a New Command Paste
          </h1>
        </div>
        <div className="flex flex-col gap-4">
          <input
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="Enter Command title here"
            value={commandTitle}
            onChange={(e) => setCommandTitle(e.target.value)}
          />
          <textarea
            className="border border-gray-300 rounded-lg p-3 w-full h-40 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter  command here"
            value={commandValue}
            onChange={(e) => setCommandValue(e.target.value)}
          ></textarea>
          <button
            onClick={createCommand}
            className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600"
          >
            
            {commandId ? "Update command" : "Create command"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComHome;
