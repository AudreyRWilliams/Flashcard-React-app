import React, { useState } from "react";

export default function Flashcard({ front, back }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className={`card ${flipped ? "back" : "front"}`}
      onClick={() => setFlipped(!flipped)}
      title="Click to flip"
    >
      {flipped ? back : front}
    </div>
  );
}
