"use client";
import React, { useState, useEffect, useMemo } from "react";

export default function Typewriter({
  texts = [],
  typingSpeed = 100,
  deletingSpeed = 50,
  pause = 1500,
}) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [gradient, setGradient] = useState("");

  // List of cool gradients to pick from
  const gradients = useMemo(
    () => [
      "linear-gradient(90deg, #ff6a00, #ee0979)",
      "linear-gradient(90deg, #00f260, #0575e6)",
      "linear-gradient(90deg, #f7971e, #ffd200)",
      "linear-gradient(90deg, #6a11cb, #2575fc)",
      "linear-gradient(90deg, #ff512f, #dd2476)",
      "linear-gradient(90deg, #1e3c72, #2a5298)",
      "linear-gradient(90deg, #134e5e, #71b280)",
    ],
    []
  );

  useEffect(() => {
    if (!texts.length) return;

    const currentText = texts[textIndex];
    let timer;

    if (!isDeleting && charIndex <= currentText.length) {
      timer = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex >= 0) {
      timer = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex));
        setCharIndex(charIndex - 1);
      }, deletingSpeed);
    } else if (charIndex > currentText.length) {
      timer = setTimeout(() => setIsDeleting(true), pause);
    } else if (charIndex < 0) {
      setIsDeleting(false);
      setTextIndex((textIndex + 1) % texts.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timer);
  }, [
    charIndex,
    isDeleting,
    textIndex,
    texts,
    typingSpeed,
    deletingSpeed,
    pause,
  ]);

  // Pick a random gradient whenever textIndex changes (new word)
  useEffect(() => {
    const randomGradient =
      gradients[Math.floor(Math.random() * gradients.length)];
    setGradient(randomGradient);
  }, [textIndex, gradients]);

  return (
    <span
      style={{
        backgroundImage: gradient,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        color: "transparent", // fallback
        fontWeight: "bold",
      }}
    >
      {displayText}
      <span className="animate-blink text-[var(--primary)]">|</span>
    </span>
  );
}
