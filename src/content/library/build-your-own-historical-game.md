---
title: "Build your own historical RPG with an AI coding assistant: the Gold Rush prompt playbook"
description: "The exact sequence of seven prompts, and the iterative fixes, that built the Gold Rush (1849 San Francisco) classroom game. Swap in another era and reuse the engine."
topics: [edubuilds, projects, history, games]
domains: [teachers]
type: guide
date: 2026-10-24
author: Amanda Grutza
---

This guide breaks down the exact sequence of prompts and iterative adjustments used to build **Gold Rush (1849 San Francisco)**, the game second graders played in [What survived the classroom](/edubuilds/#gold-rush). You can [play it here](https://gold-rush-seven.vercel.app).

Whether you want to recreate the Gold Rush simulation or adapt the engine for another historical era (the Silk Road, the Oregon Trail, the Industrial Revolution), copy, paste and customize these prompts in sequence with an AI coding assistant. Bracketed text is where you swap in your own era, characters and reading level.

Before the first prompt, read the three tips at the end. The most important one: feed your historical research first, and tell the model to use only what you gave it. A game built straight from a prompt has facts nobody checked.

## Phase 1: the core engine and retro aesthetic

The first step is establishing the visual style, the target reading level, the diverse perspectives, and the core 30-day survival loop in a single React file.

### Prompt 1: building the base game

```text
Build a single-file React educational game (App.jsx) using Tailwind CSS about [the 1849 San Francisco Gold Rush], written at a [2nd to 3rd-grade] reading level.

Visual Style: Give it an 8-bit retro computer aesthetic using the 'Press Start 2P' Google Font, a black-and-white high-contrast monitor bezel, and a CRT scanline overlay.

Game Flow:
1. Title Screen: 'GOLD RUSH' with a 'Press to Start' button.
2. Character Selection: Allow players to choose from [7] diverse historical perspectives ([White American, Californio Resident, Latin American Miner, Chinese Immigrant, Hawaiian Pacific Islander, Australian Migrant, and African American Entrepreneur]). Give each character a unique journey description, culturally accurate food item, and specific job/work verb.
3. Socioeconomic Wealth Roll: Before starting, have the player click 'Check your pockets...' to randomly roll their starting wealth class (Poor, Medium, or Wealthy), which determines their starting Money, Food, and Supplies.
4. 30-Day Game Loop: Display a top status bar (Day X/30, Money, Food, Supplies, and Home Level). Include a central text log console and 4 action buttons at the bottom: Work, Buy Food, Buy Supplies, and Upgrade Housing (Muddy Canvas Tent -> Sturdy Wooden Cabin -> Nice City House).
5. End Screen: Summarize their final stats, housing level, and a historical takeaway tip about their chosen demographic.
```

## Phase 2: deep historical narrative and matrix events

Once the basic loop works, a great educational game needs historical depth. This prompt turns background research (a historical dossier) into structured, weekly story popups tailored to both who the player is and how much money they have.

### Prompt 2: adding the narrative matrix

```text
Let's add deep historical events and information into the game based on my historical research. Every character should have major story events pop up in a modal window on Days 7, 14, 21, and 28 that continue an ongoing narrative.

Create a STORY_EVENTS data object structured by Character ID -> Wealth Level (Poor, Medium, Wealthy) -> Day (7, 14, 21, 28).

Ensure that from Day 1 to Day 30, learners experience the real historical scope of their character's life:
- Include cultural foods, specific tools (like the batea bowl or rocker box), and real landmarks (like Portsmouth Square or Chinatown).
- Show how laws and society treated different groups and wealth classes differently (such as the Foreign Miners Tax, Californio land legal battles, or wealthy merchants investing in shipping).
- Each popup should have a title, historical story text, a reward/penalty description, and automatic adjustments to the player's Money, Food, or Supplies when dismissed.
```

## Phase 3: quality of life and interactive NPCs

Early playtesting revealed two gameplay issues: spending an entire day just to eat food felt punishing, and players wanted active choices rather than passive text logs.

### Prompt 3: instant trading and NPC choice modals

```text
Let's make two major Quality of Life (QoL) and gameplay upgrades:
1. Instant Trading: Buying food and buying supplies should NOT take an entire day or consume daily food. Relabel those buttons as [Quick Trade] so players can buy food ($5) and supplies ($10) instantly. Only 'Working', 'Building/Upgrading Housing', or 'Foraging for berries' (when out of money) should advance the day and consume 1 Food.
2. Interactive NPC Encounters: On normal days when there is no weekly story event, add a 30% chance for a daily NPC encounter modal to pop up. Include historical figures like [Sam Brannan and Levi Strauss], alongside [Exhausted Travelers, Greedy Miners, and Fellow Immigrants]. Give the player 2 dialogue choices for each encounter that create conflict or community and directly impact their stats.
```

## Phase 4: the Chromebook and mobile layout lock

As the text log grows over 30 days, standard web pages stretch downward, pushing the action buttons off the bottom of smaller screens like school Chromebooks and mobile phones. This prompt locks the viewport.

### Prompt 4: fixing viewport height and internal scrolling

```text
The game window needs a strict height limit so it works on Chromebooks and mobile phones. Right now, the more days that are played, the taller the window gets, pushing the supplies and action buttons off the screen.

Refactor the CSS layout using these exact rules:
1. Lock the outermost container to h-[100dvh] w-full flex flex-col overflow-hidden.
2. Add shrink-0 to the Header, the Top Status Bar, and the bottom Action Buttons grid so they stay permanently pinned to the top and bottom of the screen.
3. Set the central Text Log Console to flex-1 min-h-0 overflow-y-auto so that only the text log scrolls inside the retro monitor bezel, and auto-scroll to the newest log entry.
4. Keep the CRT scanlines fixed over the console (pointer-events-none) so they don't scroll with the text.
```

## Phase 5: retro 8-bit audio

Modern web browsers block audio from playing automatically when a page loads. To add music without errors, it must be triggered by a user's click.

### Prompt 5: adding browser-safe background music

```text
Add 8-bit background music to the game using an HTML <audio> element referencing /theme.mp3 with loop enabled.

Because browsers block autoplay, trigger audioRef.current.play() inside the function when the player clicks the 'Press to Start' button on the title screen. Add a SOUND: ON / OFF toggle button in the top header so students can mute and unmute the music at any time.
```

When hosting on GitHub or Vercel, drag and drop your `.mp3` file into the project's `public/` folder and rename it `theme.mp3`.

## Phase 6: cloud saves and web hosting

To allow students to save and load their progress across sessions and play on a live website, the app uses Firebase and Vite.

### Prompt 6: universal Firebase save and load

```text
Add Save and Load functionality using Firebase Authentication (signInAnonymously) and Firestore (setDoc and getDoc).

Write a universal initialization useEffect that checks if the app is running in an AI preview canvas (typeof __firebase_config !== 'undefined') and falls back to my hardcoded Firebase project keys when deployed on Vercel. Add SAVE and LOAD buttons to the header that save the current gameState and playerInfo to Firestore and display a temporary 'Saved successfully!' status message.
```

### Hosting checklist (GitHub and Vercel)

When moving your code from the AI editor to a live GitHub repository for Vercel deployment, three files need attention:

1. `index.html`: include `<script src="https://cdn.tailwindcss.com"></script>` inside the `<head>` tag so all Tailwind styling renders properly.
2. `src/main.jsx`: make sure `import React from 'react'` is explicitly at the top of the file.
3. Firebase Console: go to Authentication, then Settings, then Authorized domains, and add your `.vercel.app` domain so Firebase allows players to save their games.

## Phase 7: a secret cheat-code expansion mode

When adding a secondary game mode (like a biography archive or an Oregon Trail-style travel mode for specific historical figures), state isolation is critical so the new mode doesn't overwrite or break the original game.

### Prompt 7: the secret archive mode (isolated state)

```text
CRITICAL RULE: Do not alter, condense, or remove any of the existing constants, UI, or functions from the original 30-day game.

Keeping the original game 100% intact, add a keystroke listener on the title screen that listens for the player typing the word hacks. When typed, reveal a secret yellow button on the title screen called 'ENTER ARCHIVE'.

Clicking 'ENTER ARCHIVE' should switch to a completely separate state branch that lets players select specific named historical figures from my research ([e.g., Samuel Brannan, Mary Ann Patten, Juana Briones, Mariano Vallejo, Lai Chun-chuen, Domingo Ghirardelli, Mifflin Wistar Gibbs, Levi Strauss, Isabel Meadows]).

Build a two-part gameplay loop exclusively for this mode using its own separate state object (histInfo):
1. The Trail Phase: Players manage Distance, Weather, Morale, Health, Food, Pace, and Rations to travel from their origin to San Francisco, hitting real biographical milestones along the way. (Characters already living in California skip straight to Phase 2).
2. The Settlement Phase: Players spend 52 weeks in San Francisco performing character-specific historical actions (like printing newspapers, healing the sick, or fighting court battles) before reaching a final biographical summary screen.
```

## Three tips for prompting your own game

1. **Protect your existing code.** When asking an AI to add a big new feature late in development, always include the instruction: "Do not condense, abbreviate, or remove any of my existing game constants, story events, or UI buttons. Keep the original game loop 100% intact."
2. **Feed research first.** Paste your historical research document or curriculum standards before asking the AI to write story events. Ask it to strictly use details from your text and avoid inventing historical facts.
3. **Test screen sizes early.** Always test how your game looks after 20 or more turns of text logs. Fixed viewport heights (`100dvh`) with internal scrolling containers (`overflow-y-auto`) keep retro text games playable on any device.

## What to check before students play

Everything the Gold Rush case card says still applies. Game rules are invented, and a seven-year-old can take an invented rule as history unless you name the difference out loud. Check which information came from your sources and which was made for play, review whose perspectives are in the cast and who is missing, and read every popup against your research before launch day. The [decision activity prompt](/library/decision-activity-or-project-support/) is the one-page spec step to run before you build anything interactive.
