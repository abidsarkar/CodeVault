import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewPaste = () => {
  const { id } = useParams();
  const paste = useSelector((state) =>
    state.paste.pastes.find((p) => p._id === id)
  );

  return (
    <div className="p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {paste ? (
          <>
            <h1 className="text-2xl font-bold text-gray-800">{paste.title}</h1>
            <p className="mt-4 text-gray-700">{paste.content}</p>
            <p className="mt-4 text-gray-500 text-sm">
              Created At: {new Date(paste.createdAt).toLocaleString()}
            </p>
          </>
        ) : (
          <p className="text-red-500">Paste not found!</p>
        )}
      </div>
    </div>
  );
};

export default ViewPaste;
