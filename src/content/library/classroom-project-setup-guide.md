---
title: "Set up an AI project space for your classroom, and keep student data out of it"
description: "One instruction block, one context card, and the two lists of what goes in and what never does. Works in Claude, ChatGPT, Gemini or whatever your school has approved."
topics: [edubuilds, planning, privacy]
domains: [teachers]
type: guide
featured: true
date: 2026-10-24
author: Amanda Grutza
prompt: |
  You are helping me, a [grade or age band] teacher, prepare classroom materials. My class: [size, grouping]. This unit's learning goals: [goals]. Sound-spelling patterns taught so far: [list]. Formats I can use: [print, teacher display, read-aloud, hands-on]. Typical time per activity: [minutes].

  Rules for every draft: use only the sources I attach or paste, and tell me when a request needs a source I have not given you. Label anything invented, such as a scenario, a game rule or an example, so it cannot be mistaken for a fact. Never write the learner's final explanation, answer or reflection. Never assign a reading level as if it were validated; describe the text features instead. When I describe a learner barrier, work from the barrier as I describe it, not from a diagnosis. End every draft with a short list of the claims, words and instructions I should check before I use it with children. If I paste a child's name or anything that looks like student records, stop and tell me, and do not use it.
---

Every classroom build I made this year needed a teacher change before it was usable, and most of those changes were the same change: the model did not know my class. It did not know which sound-spelling patterns we had taught, how long an activity could run, or that a seven-year-old reading around level L cannot use a science article written for adults. A project space fixes that once, so you stop re-explaining your classroom in every chat.

## What a project space is

Most tools now have a place where instructions and sources persist across conversations. The names differ: Projects in Claude and ChatGPT, Gems in Gemini, notebooks in NotebookLM and Copilot. The pattern is the same. You set it up once per class or unit, and every new chat inside it starts already knowing your context and your rules.

Check which tool your school has approved first. The guide works in any of them.

## Set it up once

1. Create the space and name it after the class or unit, for example "AL2 reading, water unit."
2. Paste the instruction block above into the space's instructions, with the square brackets filled in from your context card.
3. Attach your sources: the unit plan, public or teacher-written texts, the phonics sequence you teach from, and one or two finished examples you were happy with.
4. Start every build from the context card below, even when the space already has most of it. Saying the goal and the barrier out loud each time is what keeps the draft honest.

## The context card

Fill this in before you ask for anything. It is the top half of the [classroom build card](/library/classroom-build-card/).

- My lesson and age band
- What learners need to explain or do
- The observed barrier, described as you saw it (not a diagnosis)
- The source or existing resource the draft must come from
- What AI may help create
- What learners must do themselves
- Evidence I will collect

## What goes in

Public or teacher-written sources. The unit plan. The taught phonics sequence. Format and time constraints. Finished examples you are happy with.

## What never goes in

Learner names or initials. Diagnoses, IEP or 504 documents. Family communications. Grades. Photos of student work with names visible. If you need the model to account for a learner, describe the barrier you observe ("needs one direction at a time," "reads around level L") and the supports you want. The model does not need the IEP. It needs the barrier and the goal.

## The line that matters most

Every prompt in this collection ends by asking the model what you should check before using the draft with children. Keep that line when you adapt the prompts. The space does not make the output true. It makes the checking faster.

This guide comes from [What survived the classroom](/edubuilds/), the Khan Lab School AI in Education Summit session built from a year of classroom builds.
