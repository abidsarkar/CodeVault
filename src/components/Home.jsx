import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row gap-7 place-content-between">
        <input
          className="border-none outline-none p-2 rounded-2xl mt-2 ml-2 w-[66%] pl-5"
          type="text"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={createPaste}
          className="p-2  border-none outline-none rounded-2xl mt-2 bg-red-400"
        >
          {pasteId ? "update paste" : "Create My Paste"}
        </button>
      </div>
      <div className="mt-8">
        <textarea
          className="border-none outline-none rounded-2xl mt-4 min-w-[500px] p-4"
          value={value}
          placeholder="Enter content here"
          onChange={(e) => setValue(e.target.value)}
          rows={10}
        ></textarea>
      </div>
    </div>
  );
};

export default Home;
