---
title: "Adapt a reading passage to one learner barrier without changing what it teaches"
description: "Keep the learning target fixed and change the route to it. The prompt asks for defined terms, evidence questions, an answer key with source locations, and a list of what to check."
topics: [edubuilds, reading, differentiation]
domains: [teachers]
type: prompt
date: 2026-10-24
author: Amanda Grutza
prompt: |
  Using only the source below, help me adapt a short resource for [age band]. The learning goal is [goal]. The observed access barrier is [barrier]. Keep these facts, concepts, and terms: [list]. Create short, clearly labeled sections, define essential vocabulary, and provide [selected support]. Preserve age-appropriate interest and the original meaning. Do not add facts or supply the learner's final explanation. Give two questions requiring evidence from the text, a teacher answer key with source locations, and a list of changes or uncertainties for me to check. Do not assign a certified reading level.

  Source: [paste]
---

This is the prompt behind the reading-access case in [What survived the classroom](/edubuilds/). The learning target stayed fixed (learners explain the relationship between a place and its water system) while the route to it changed: shorter chunks, defined terms, a read-aloud option, a cause-and-effect organizer.

## Two different design tasks

Access to content and decoding practice are not the same job, and most AI reading advice blurs them.

- **Access to content** changes the route to the idea. Short chunks, essential terms defined, a read-aloud option, an organizer. Your check: facts and causal links stay intact, and the final reasoning is not supplied.
- **Decoding practice** uses only the sound-spelling patterns already taught. That is a separate text and a separate prompt: [decodable word practice](/library/decodable-word-practice/). Your check: every word, for pattern fit and exceptions.

## What to check before you use it

- The facts and the causal links survived the simplification.
- The two questions require evidence from the text, not recall of the definitions.
- The answer key points to real locations in the source.
- No reading-level label is doing the work a human check should do. A model's "second-grade level" is a guess, not validation.
- The barrier is described as you observed it. The diagnosis never goes in the prompt.

## What went wrong the first time

The science sources I generated for a second-grade reading project came back too advanced for readers around level L. The packet looked finished. It was not usable. The fix was a simpler source set, each one checked against the readers it was for, and this prompt's last sentence.
