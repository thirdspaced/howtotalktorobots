---
title: "Generate word practice that uses only the patterns you have taught"
description: "A short practice text built from your phonics sequence, with every out-of-pattern word listed so you can check it. The model does not get to call it decodable."
topics: [edubuilds, reading, phonics]
domains: [teachers]
type: prompt
date: 2026-10-24
author: Amanda Grutza
prompt: |
  Create a short practice text about [age-appropriate interest] using these taught sound-spelling patterns: [list]. These are the known irregular words: [list]. Target [pattern]. List every word that falls outside the specified patterns or irregular-word list so I can review it. Provide a word list and brief connected text. Do not claim that the text is validated or fully decodable. I will check it against the learner's instruction before use.
---

Daily word work for learners with IEPs was one of the quieter builds in [What survived the classroom](/edubuilds/), and one of the most used. The ch/tch, ge/dge, long and short vowel and homophone practice sets all came from this prompt, and all of them were checked word by word before a child saw them.

## Why this is a separate prompt

Decoding practice is a different design task from content access. A passage adapted for access ([that prompt is here](/library/adapt-a-reading-passage/)) can use any word a learner can be read to. A decodable text can only use patterns the learner has been taught, plus the irregular words you have taught as whole words. A model will blur the two unless you stop it.

## What to check before you use it

- Every word, against the taught patterns and the irregular list. The model's own exceptions list is a start, not the check.
- The target pattern appears enough times to be practice.
- The connected text is short enough to read in the time you have.
- The topic is something the learner cares about. Interest is a support too.

## What the model cannot do

It cannot validate the text. "Fully decodable" and "second-grade level" are claims a human makes after checking against a specific learner's instruction. The prompt tells the model not to make them, and your check is what makes the text usable.
