---
title: "Generate word practice that uses only the patterns you have taught"
description: "A short practice text built from your phonics sequence, with every out-of-pattern word listed so you can check it. The model doesn't get to call it decodable."
topics: [edubuilds, reading, phonics]
domains: [teachers]
type: prompt
date: 2026-10-24
author: Amanda Grutza
prompt: |
  Create a short practice text about [age-appropriate interest] using these taught sound-spelling patterns: [list]. These are the known irregular words: [list]. Target [pattern]. List every word that falls outside the specified patterns or irregular-word list so I can review it. Provide a word list and brief connected text. Do not claim that the text is validated or fully decodable. I will check it against the learner's instruction before use.
---

The daily word work for learners with IEPs in [What survived the classroom](/edubuilds/) came from this prompt: the ch and tch, ge and dge, long and short vowel, and homophone sets, each checked word by word before a child saw it.

## Why this is a separate prompt

A passage adapted for access ([that prompt is here](/library/adapt-a-reading-passage/)) can use any word a learner can be read to. A decodable text can only use patterns the learner has been taught, plus the irregular words you've taught as whole words. A model will blur the two unless you stop it, and this prompt stops it.

## What to check before you use it

- Every word, against the taught patterns and the irregular list. The model's own exceptions list is a start, not the check.
- The target pattern shows up enough times to count as practice.
- The connected text is short enough for the time you have.
- The topic is something the learner cares about.

The model can't validate the text. "Fully decodable" and "second-grade level" are claims a person makes after checking against a specific learner's instruction, which is why the prompt tells the model not to make them.
