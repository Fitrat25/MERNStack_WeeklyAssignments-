import React, { useState } from 'react';

export default function InputForm() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted value:", inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center p-4">
      <input
        type="text"
        className="border p-2 mb-2 w-64"
        placeholder="Enter text"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
        Submit
      </button>
    </form>
  );
}
