// Import all character images
import rumiImg from '../assets/images/rumi.png';
import miraImg from '../assets/images/mira.png';
import zoeImg from '../assets/images/zoe.png';
import tigerImg from '../assets/images/tiger.png';
import demonImg from '../assets/images/demon.png';
import sajaImg from '../assets/images/saja.png';

// Import all sound files
import goldenSound from '../assets/sounds/golden.mp3';
import takedownSound from '../assets/sounds/takedown.mp3';
import doneSound from '../assets/sounds/done.mp3';
import wrongSound from '../assets/sounds/wrong.mp3';

export const gameData = {
  1: {
    title: "Chapter 1",
    story: "Rumi faces a demon trying to steal fans' energy.",
    hero: "Rumi",
    villain: "Energy Demon",
    heroImage: rumiImg,
    villainImage: demonImg,
    unlocked: true
  },
  2: {
    title: "Chapter 2",
    story: "Mira confronts a Saja Boys blocking the stage.",
    hero: "Mira",
    villain: "Saja Boys",
    heroImage: miraImg,
    villainImage: sajaImg,
    unlocked: false
  },
  3: {
    title: "Chapter 3",
    story: "Zoey battles a sneaky demon hiding in the concert lights.",
    hero: "Zoey",
    villain: "Light Demon",
    heroImage: zoeImg,
    villainImage: demonImg,
    unlocked: false
  },
  4: {
    title: "Chapter 4",
    story: "Suzie the Tiger leaps at a demon that jumped into the crowd.",
    hero: "Suzie the Tiger",
    villain: "Crowd Demon",
    heroImage: tigerImg,
    villainImage: demonImg,
    unlocked: false
  },
  5: {
    title: "Chapter 5",
    story: "Rumi challenges the Saja Boys attempting to disrupt rehearsal.",
    hero: "Rumi",
    villain: "Saja Boys",
    heroImage: rumiImg,
    villainImage: sajaImg,
    unlocked: false
  },
  6: {
    title: "Chapter 6",
    story: "Mira protects the fans from a charging demon in the streets.",
    hero: "Mira",
    villain: "Street Demon",
    heroImage: miraImg,
    villainImage: demonImg,
    unlocked: false
  },
  7: {
    title: "Chapter 7",
    story: "Zoey faces the final Saja Boys boss, blocking the stadium exit.",
    hero: "Zoey",
    villain: "Saja Boys Boss",
    heroImage: zoeImg,
    villainImage: sajaImg,
    unlocked: false
  }
};

export const sounds = {
  correct: [goldenSound, takedownSound, doneSound],
  wrong: wrongSound
};

export const multiplicationTables = [3, 4, 6, 7, 8, 9];

export const generateQuestion = () => {
  const table = multiplicationTables[Math.floor(Math.random() * multiplicationTables.length)];
  
  // All tables only go up to 10 (no 11x11, 11x12, or any x11, x12)
  const multiplier = Math.floor(Math.random() * 10) + 1;
  
  return {
    question: `${table} × ${multiplier}`,
    answer: table * multiplier,
    table,
    multiplier
  };
};

export const generateQuestions = (count = 50) => {
  const questions = [];
  for (let i = 0; i < count; i++) {
    questions.push(generateQuestion());
  }
  return questions;
};