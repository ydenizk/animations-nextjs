"use client"

import React, { useEffect, useState } from "react";

const Client3 = ({ text }) => {
  const [typedText, setTypedText] = useState(""); // For the typewriter effect
  const [isTyping, setIsTyping] = useState(false); // State to manage the start of typing

  useEffect(() => {
    // Start typing effect after a 5s delay
    const startDelay = setTimeout(() => {
      setIsTyping(true);
    }, 5000); // 5 seconds delay

    return () => clearTimeout(startDelay);
  }, []);

  useEffect(() => {
    if (isTyping) {
      let index = 0;
      const timer = setInterval(() => {
        if (index < text.length) {
          setTypedText((prev) => prev + text.charAt(index));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 80); // Typing speed adjustment

      return () => clearInterval(timer);
    }
  }, [isTyping, text]); // Dependency on isTyping and text

  // Split the typedText to colorize the first word differently
  const firstWordEndIndex = typedText.indexOf(" ") + 1; // Include the space in the first word
  const firstWord = typedText.substring(0, firstWordEndIndex);
  const restOfText = typedText.substring(firstWordEndIndex);

  return (
    <div className="mx-auto max-w-lg text-center my-8">
      <div className="font-semibold text-2xl mb-8">
        <span className="text-red-600">{firstWord}</span>
        <span className="text-black dark:text-white">{restOfText}</span>
      </div>
    </div>
  );
};

export default Client3;
