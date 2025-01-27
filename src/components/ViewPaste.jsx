import React from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewPaste = () => {
  const { id } = useParams();
  const paste = useSelector((state) =>
    state.paste.pastes.find((p) => p._id === id)
  );
//date show nice away

// Corrected FormattedDate component 
function FormattedDate({ createdAt }) {
  const date = new Date(createdAt);

  // Customize the date and time formatting options here
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  const formattedDate = date.toLocaleString("en-US", options); 
  return <span>{formattedDate}</span>;
}
  return (
    <div className="p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {paste ? (
          <>
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold uppercase text-gray-800 flex-1 text-center">
                {paste.title}
              </h1>
              <button className="border border-black bg-blue-600 p-1 rounded-lg"
              onClick={() => {
                navigator.clipboard.writeText(paste.content);
                toast.success("Copied to clipboard!");
              }}
              >
                Copy
              </button>
            </div>
            <p className="mt-4 text-black whitespace-pre-wrap break-words">{paste.content}</p>
            <p className="mt-4 text-red-500 text-sm">
              {/* Created At: {new Date(paste.createdAt).toLocaleString()} */}
              Created At: <FormattedDate createdAt={paste.createdAt} />
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
