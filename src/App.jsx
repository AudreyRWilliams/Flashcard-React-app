import React from "react";
import Flashcard from "./Flashcard.jsx";

export default function App() {
  const cards = [
    { front: "Hello", back: "Hola" },
    { front: "Thank you", back: "Gracias" },
    { front: "Goodbye", back: "Adiós" }
  ];

  return (
    <div className="wrap">
      <h1>Flashcards</h1>
      <div className="grid">
        {cards.map((c, i) => (
          <Flashcard key={i} front={c.front} back={c.back} />
        ))}
      </div>
    </div>
  );
}
