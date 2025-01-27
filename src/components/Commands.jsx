import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { removeFromCommands } from "../redux/commandsSlice";

const Commands = () => {
  const commands = useSelector((state) => state.command.commands);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const filteredData = commands.filter((command) =>
    command.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(commandId) {
    dispatch(removeFromCommands(commandId));
  }

  return (
    <div className="p-6">
      <div className="flex flex-col items-center">
        <input
          className="border bg-black text-white border-green-300 rounded-lg p-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="search"
          placeholder="Search commands..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredData.length === 0 ? (
          <p className="text-red-500 text-center text-lg">No commands found.</p>
        ) : (
          filteredData.map((command) => (
            <div
              key={command._id}
              className="bg-white border rounded-lg shadow-lg p-4 hover:shadow-xl transition"
            >
              <h3 className="text-center text-xl uppercase font-semibold text-gray-800">
                {command.title}
              </h3>
              <p className="text-black truncate">{command.content}</p>
              <div className="flex justify-between items-center mt-4">
                <NavLink
                  to={`/create-commands/?commandId=${command._id}`}
                  className="text-blue-500 hover:underline border border-green-500 px-1 p-0.5 rounded"
                >
                  Edit
                </NavLink>
                <NavLink
                  to={`/commands/${command._id}`}
                  className="text-green-500 hover:underline border-red-500 border px-1 p-0.5 rounded"
                >
                  View
                </NavLink>
                <button
                  onClick={() => handleDelete(command._id)}
                  className="text-red-500 hover:underline border-blue-500 border px-1 p-0.5 rounded"
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(command.content);
                    toast.success("Copied to clipboard!");
                  }}
                  className="text-blue-500 hover:underline border-blue-500 border px-1 p-0.5 rounded"
                >
                  Copy
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Commands;
