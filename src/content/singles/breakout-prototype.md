---
status: preview
date: 2024-02-02
author: Steven A.J.
cover: /assets/covers/breakout-prototype.jpg
title: Breakout Clone Prototype
excerpt: "I found a twenty-game challenge! Apparently, I incidentally completed challenge #1 with a Flappy Bird clone being the first in the list. Challenge #2: A Breakout Clone"
tags:
  - development
  - game-dev
  - godot
---

Okay. So, opinions will vary here but I've decided that, for practice in engine-specific stuff, I'll spend some time building prototypes around core-mechanics before moving on to the next. Sure, *I'm not building fully polished clones*, but I'm mostly interested in learning how to replicate mechanics than in building out interfaces (which I've been doing in front-end development for nearly a decade). Plus, I have zero intention of ever releasing any of these clones (even under some other brand name). I'm taking them for what they are - learning experiences.

Last week, I found a twenty-game challenge that I (unknowingly) already started with the last Flappy Bird clone that I made. This game's challenge was Breakout.

It could use a background & scoring interface but, like I said - it's all practice for something more original.


<iframe class="m-auto" width="800" height="600" src="https://www.youtube.com/embed/_yImk4Jmf-A?si=D5tVH6htfd_iaHjC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## What I Learned

For this one, my most valuable lesson was the concept of "tunneling", which I had never heard of before. Tunneling happens when objects are moving faster than the engine can interpret them, leading to them to clip (or tunnel) through objects. There are a variety of methods that can be implemented to prevent this like increasing the dimensions of an object's collision shape, setting a maximum velocity on moving objects, configuring Continuous Collison Detection on relevant nodes and probably a lot of others that I still haven't discovered.

## Mechanical Breakdown

