import React from "react";

export default function Button({text, funcionalidad}) {
  return (
    <div className="flex justify-between">
      <button
        onClick={() => funcionalidad()}
        className="bg-emerald-500 px-4 py-2 hover:bg-emerald-700 rounded-lg">
        {text}
      </button>
    </div>
  );
}
