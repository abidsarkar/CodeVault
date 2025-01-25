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
  //delete function call
  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }
  //copy function

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <input
        className="p-2 rounded-2xl min-w-[400px] mt-5"
        type="search"
        placeholder="search here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex flex-col gap-5 w-full ">
        {filteredData.length > 0 &&
          filteredData.map((paste) => {
            return (
              <div
                className="block border border-black rounded p-2  "
                key={paste?._id}
              >
                <div>{paste.title}</div>
                <div className="max-h-24 overflow-hidden">{paste.content}</div>
                <div className="flex flex-row gap-4 place-content-evenly">
                  <button className="bg-blue-300 p-2 rounded">
                    <NavLink
                    to={`/?pasteId=${paste?._id}`}>Edit</NavLink>
                  </button>
                  <button className="bg-blue-300 p-2 rounded">
                    <NavLink to={`/pastes/${paste?._id}`}>View</NavLink>
                  </button>
                  <button
                    className="bg-blue-300 p-2 rounded"
                    onClick={() => handleDelete(paste?._id)}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-blue-300 p-2 rounded"
                    onClick={() => {
                      navigator.clipboard.writeText(paste?.content);
                      toast.success("copy to clipboard");
                    }}
                  >
                    Copy
                  </button>
                  <button className="bg-blue-300 p-2 rounded">Share</button>
                </div>
                <div>{paste.createdAt}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Paste;
