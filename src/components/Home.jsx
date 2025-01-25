import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const allPastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId);
      setTitle(paste?.title || "");
      setValue(paste?.content || "");
    }
  }, [pasteId]);

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      dispatch(updateToPastes(paste));
    } else {
      dispatch(addToPastes(paste));
    }

    setTitle("");
    setValue("");
    setSearchParams({});
  }

  return (
    <div className="flex flex-col items-center p-6">
      <div className="w-full max-w-3xl">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Create a New Paste</h1>
        <div className="flex flex-col gap-4">
          <input
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="Enter title here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="border border-gray-300 rounded-lg p-3 w-full h-40 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter content here"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></textarea>
          <button
            onClick={createPaste}
            className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600"
          >
            {pasteId ? "Update Paste" : "Create Paste"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
