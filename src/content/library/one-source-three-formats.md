---
title: "Turn one source into four formats that share the same facts"
description: "The multimodal prompt: a print passage, a read-aloud script, a hands-on organizer and a quiz spec from one source, plus a list of every place the versions disagree."
topics: [edubuilds, planning, differentiation]
domains: [teachers]
type: prompt
date: 2026-10-24
author: Amanda Grutza
prompt: |
  Using only the source below and this learning goal, [goal], produce four things that share the same facts. One: a print passage of about [150] words for [age band], in short labeled sections, with three essential terms defined in plain words. Two: a read-aloud script of the same passage with two pause points, each followed by one question I ask aloud that requires evidence from the text. Three: a one-page [cause and effect / sequence / compare] organizer learners complete by hand, with the prompts written but no answers. Four: a specification, not code, for a five-question check: each question, its options, the right option, and the sentence in the source that supports it. Then list any place where the four versions disagree with each other or add a fact that is not in the source.

  Source: [paste]
---

The last sentence of this prompt does the work. Four formats are easy to ask for. Making the model report every place the versions drift from each other, or from the source, is what keeps one set of facts across all four.

## Where it came from

The Gold Rush unit in [What survived the classroom](/edubuilds/) existed as a web game, printed biographies, a bingo and scavenger hunt, and a field log. The ocean unit existed as a documentary script scaffold, a fact-to-lines worksheet, printable specimen cards and a Canva backdrop workflow. Same facts, several routes to them, and every route had to agree.

## For a bigger build

The same idea extends to a decision activity or a game. Ask for a one-page spec first, review it, then ask for the interactive version. The [decision activity prompt](/library/decision-activity-or-project-support/) is that spec step.

## What to check before you use it

- The disagreement list at the end. Read it first, since it tells you where the model guessed.
- The organizer has prompts and no answers.
- The right option in each quiz question is supported by the sentence it cites.
- The read-aloud questions need evidence, not recall of the definitions.
