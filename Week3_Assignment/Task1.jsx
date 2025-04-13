import React, { useState } from 'react';

export function TextUpdater() {
  const [text, setText] = useState("");

  return (
    <div className="p-4">
      <input
        type="text"
        className="border p-2 w-full"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
      />
      <p className="mt-2">You typed: {text}</p>
    </div>
  );
}
