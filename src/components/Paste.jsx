import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  return (
    <div className="p-6">
      <div className="flex flex-col items-center">
        <input
          className="border border-gray-300 rounded-lg p-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="search"
          placeholder="Search pastes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredData.map((paste) => (
          <div
            key={paste._id}
            className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition"
          >
            <h3 className="text-lg font-semibold text-gray-800">{paste.title}</h3>
            <p className="text-gray-600 truncate">{paste.content}</p>
            <div className="flex justify-between items-center mt-4">
              <NavLink
                to={`/?pasteId=${paste._id}`}
                className="text-blue-500 hover:underline"
              >
                Edit
              </NavLink>
              <NavLink
                to={`/pastes/${paste._id}`}
                className="text-green-500 hover:underline"
              >
                View
              </NavLink>
              <button
                onClick={() => handleDelete(paste._id)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(paste.content);
                  toast.success("Copied to clipboard!");
                }}
                className="text-blue-500 hover:underline"
              >
                Copy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Paste;
