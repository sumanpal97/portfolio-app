import React, { useEffect, useState } from "react";
import profile from "../assets/profile.jpg";
import { motion } from "framer-motion";
import phrasesData from "../data/phrases.json";
import socials from "../data/socials.json";
import resumePdf from "../assets/resume/spresume.pdf"; // Import your resume PDF

const TYPING_SPEED = 90;
const PAUSE_DURATION = 800;

const highlights = [
  "Senior Software Engineer",
  "Problem Solver",
  "Tech Enthusiast",
  "Scalable Systems",
];

function applyHighlightToText(text, highlightPhrase) {
  if (!highlightPhrase || typeof text !== "string") return text;

  // Check if full phrase is already in the typed text
  const startIdx = text.indexOf(highlightPhrase);
  if (startIdx !== -1) {
    return (
      <>
        {text.slice(0, startIdx)}
        <span className="highlight-text">
          {text.slice(startIdx, startIdx + highlightPhrase.length)}
        </span>
        {text.slice(startIdx + highlightPhrase.length)}
      </>
    );
  }

  // Check for partial match from beginning of highlight
  for (let i = highlightPhrase.length; i > 0; i--) {
    const partial = highlightPhrase.slice(0, i);
    const partialIdx = text.indexOf(partial);
    const isAtEnd = partialIdx + i === text.length;
    if (partialIdx !== -1 && isAtEnd) {
      return (
        <>
          {text.slice(0, partialIdx)}
          <span className="highlight-text">{text.slice(partialIdx)}</span>
        </>
      );
    }
  }

  // No match found, return plain
  return <>{text}</>;
}

const Home = () => {
  const [phrases] = useState(phrasesData);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [typingForward, setTypingForward] = useState(true);

  useEffect(() => {
    if (paused) return;

    const currentPhrase = phrases[index];

    if (typingForward) {
      if (charIndex <= currentPhrase.length) {
        const timeout = setTimeout(() => {
          setText(currentPhrase.substring(0, charIndex));
          setCharIndex((prev) => prev + 1);
        }, TYPING_SPEED);
        return () => clearTimeout(timeout);
      } else {
        const pause = setTimeout(() => {
          setTypingForward(false); // start deleting
        }, PAUSE_DURATION);
        return () => clearTimeout(pause);
      }
    } else {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setText(currentPhrase.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        }, 40);
        return () => clearTimeout(timeout);
      } else {
        // move to next phrase
        setTypingForward(true);
        setIndex((prev) => (prev + 1) % phrases.length);
      }
    }
  }, [charIndex, paused, typingForward, index, phrases]);

  return (
    <section className="hero-section d-flex flex-column justify-content-center align-items-center text-center text-light">
      <motion.h1
        className="glow-text mb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        Hi, I'm Suman
      </motion.h1>

      {/* 👇 Typewriter Effect */}
      <div
        className="subtitle-rotate"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {applyHighlightToText(text, highlights[index])}
        <span className="blinking-cursor">|</span>
      </div>

      {/* 👇 Add this description below */}
      <p className="small-description mt-3 px-3">
        Currently working in the AI & Data Unit @Amdocs-R&D, focusing on
        distributed cloud-native systems — including Platform, Data, AI and
        Reliability Engineering. Passionate about Technology, open to
        exploration and collaboration.
      </p>

      <div className="social-links mt-4 d-flex gap-4 flex-wrap justify-content-center">
        {socials.map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex align-items-center gap-2 social-link"
          >
            <img
              src={require(`../assets/social_media_icons/${item.icon}`)}
              alt={item.name}
              className="social-icon"
            />
            <span>{item.name}</span>
          </a>
        ))}
      </div>

      {/* 👇 "Download my Resume" button */}
      <div className="mt-4">
        <a
          href={resumePdf}
          download="Suman_Pal_Resume.pdf" // This will be the downloaded file name
          className="btn btn-primary" // Example styling for a button
        >
          Download Resume
        </a>
      </div>

      {/*
        <p className="lead mt-3 mb-1">
        A passionate software engineer and tech enthusiast.
        </p>
        <p className="text-muted">
          Crafting thoughtful software for real-world impact.
        </p>
        */}
    </section>
  );
};

export default Home;
