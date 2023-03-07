import "./styles.css";
import React, { useState } from "react";
var emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "😷": "face with mask",
  "🤒": "face with thermometer",
  "🤕": "head bandage",
  "🤢": "nauseated",
  "🤧": "sneezing",
  "🥵": "hot face",
  "🥶": "cold face",
  "🥴": "woozy face",
  "🤯": "head exploding",
  "🥳": "partying face",
  "😎": "smiling with sunglasses",
  "🤓": "nerd face",
  "🤬": "abusing face",
  "😠": "angry face",
  "😫": "irritated face",
  "😡": "red hot angry face",
  "🤠": "cowboy hat face",
  "😲": "ashtonished",
  "🐭": "mouse face",
  "🐷": "pig face",
  "🦁": "lion face",
  "🐯": "tiger face",
  "🐶": "dog face",
  "🐱": "cat face",
  "🔥": "fire",

  "💛": "yellow heart",
  "💚": "green heart",
  "💙": "blue heart",
  "💜": "purple heart
};
var emojisWeknow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userValue = event.target.value;
    var meaning = emojiDictionary[userValue];
    if (meaning === undefined) {
      meaning = "Not found in database";
    }
    setMeaning(meaning);
  }
  //setInnerText(event.target.value);
  function clickemojiHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Dictionary</h1>
      <input onChange={emojiInputHandler} />
      <h2 style={{ font: "bold" }}>{meaning}</h2>
      <h3>Emojis We Have</h3>
      {emojisWeknow.map(function (emoji) {
        return (
          <span
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
            onClick={() => clickemojiHandler(emoji)}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
