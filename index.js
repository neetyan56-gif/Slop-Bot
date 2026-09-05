const axios = require("axios");
require("dotenv").config();
const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

// Command: /slop-bot-ping
app.command("/slop-bot-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pong!\nLatency: ${latency}ms` });
});

// Command: /slop-bot-help
app.command("/slop-bot-help", async ({ ack, respond }) => {
  await ack();
  await respond({
    text:
`Available Commands:
/slop-bot-ping - Check bot latency
/slop-bot-help - Show available commands
/slop-joke - Get a random slop joke
/slop-fact - Get a Gen Z slop fact`
  });
});

// Command: /slop-joke (matches Slack Dashboard)
app.command("/slop-joke", async ({ ack, respond }) => {
  await ack();

  const slopJokes = [
    "Why did the skibidi cross the road? To get to the Ohio side, no cap 💀 lower key zero aura move.",
    "Knock knock. Who's there? Mewing. Mewing who? Bye bye 🤫🧏‍♂️ can't talk, maintaining the streak.",
    "What's a rizzler's favorite subject in school? Quantum Rizzics, fr fr base level fanum tax 🚕💸",
    "Why did the guy stop mewing? He lost his streak and dropped to negative 10,000 aura 💀",
    "How many skibidis does it take to change a lightbulb? Zero, they just pay the Fanum tax and sit in the dark fr fr 🕯️",
    "What did the teacher say when the student tried to blud-explain their homework? 'That's cap, zero aura, see me after class' 🧢",
    "Why did the baby cry in Ohio? Because it was born with default level rizz 😭",
    "Knock knock. Who's there? Kai. Kai who? Kai Cenat just Fanum taxed your entire lunchbox 📦",
    "What's a brainrot enthusiast's favorite planet? Pluto, because it got demoted just like your aura status 🪐",
    "Why don't sigma males use GPS? Because a real alpha never navigates, they just glaze the horizon 🗿",
    "What do you call a guy who can't stop watching YouTube Shorts? A certified slop architect, no cap 🏗️",
    "Why did the chef get fired? He kept sloshing the brainrot slop into the soup and lost all his cooking rizz 🍲",
    "What's a skibidi toilet's least favorite day of the week? Plunge-day Monday 🚽"
  ];

  const randomJoke = slopJokes[Math.floor(Math.random() * slopJokes.length)];
  await respond({ text: randomJoke });
});

// Command: /slop-fact (matches Slack Dashboard)
app.command("/slop-fact", async ({ ack, respond }) => {
  await ack();

  const slopFacts = [
    "Slop Fact: 'Skibidi' originated from a series of viral YouTube Shorts by DaFuq!?Boom! featuring heads inside toilets.",
    "Slop Fact: 'Fanum Tax' comes from streamer Fanum stealing food from Kai Cenat during livestreams, now meaning taking a portion of someone's meal.",
    "Slop Fact: 'Mewing' is a tongue-placement technique originally promoted by orthodontists John and Mike Mew, which became a viral meme for jawline aesthetic culture.",
    "Slop Fact: 'Aura' is a point-based social system meme where cool actions gain aura (+1000 aura) and embarrassing moments lose it (-5000 aura).",
    "Slop Fact: 'Rizz' (short for charisma) was popularized by Twitch streamer Kai Cenat and was named Oxford's Word of the Year in 2023.",
    "Slop Fact: 'Ohio memes' gained traction around 2022 as an internet gag depicting the state of Ohio as a chaotic, lawless wasteland full of monsters.",
    "Slop Fact: 'Glazing' is internet slang for over-praising, flattering, or hyping someone up to an embarrassing degree.",
    "Slop Fact: 'No Cap' originated in hip-hop culture around Atlanta in the late 2010s to mean 'no lie' or 'for real', referring to fake gold teeth caps.",
    "Slop Fact: 'Bop' originally referred to a catchy song, but in brainrot slang, it shifted to describe someone who posts frequently or seeks online attention.",
    "Slop Fact: 'Sigma Male' memes satire the concept of a secretive, successful lone wolf, usually paired with clips of Patrick Bateman or Thomas Shelby.",
    "Slop Fact: 'AI Slop' refers to low-effort, mass-produced synthetic images, videos, and texts generated purely to farm social media algorithms for clicks.",
    "Slop Fact: 'NPC' (Non-Player Character) is used as an insult for someone who lacks independent thought and acts like a background character in a video game.",
    "Slop Fact: 'Gooning' and 'Looksmaxxing' entered mainstream meme culture as absurd subcultures dedicated to hyper-analyzing facial structure and grooming styles."
  ];

  const randomFact = slopFacts[Math.floor(Math.random() * slopFacts.length)];
  await respond({ text: randomFact });
});

// App Startup (ALWAYS at the bottom)
(async () => {
  await app.start();
  console.log("bot is running!");
})();