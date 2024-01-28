---
status: draft
date: 2024-01-01
author: Steven A.J.
cover: 
title: 
excerpt: 
tags:
  - development
  - software
  - game-dev
  - godot
---
I usually spend most of my free time coding in whatever framework I've been learning between the previous six to twelve months or more. For the last 7 years, that's been a variety of web application & API frameworks - mostly in JavaScript/Typescript & PHP. This year, I'm switching things up to take a deep dive into the world of game development and C#.

I've spent very little time in the .NET ecosystem. Actually, the only professional experience I've had with it was working on some internal tooling for University of Colorado Boulder. I didn't mind it then, but I was young, dumb & naive in thinking that JavaScript was superior. .NET was a "back-end technology" and JavaScript was the only thing robust enough for true full-stack development (*I know... I know... I've grown since then*). For the last six days, though, I've been learning more about C# through Godot & Unity and it's been the most fun I've had developing anything since I was a kid.

My first game was a Flappy Bird clone using a free asset pack from Itch.io, courtesy of <a target="_blank" href="https://megacrash.itch.io">MegaCrash</a>. I'll never publish it, of course but, for my first game in a real game engine, it was a lot of fun to make.

[Embed YouTube Clip Here]

Okay, technically it's my second *game*, but the first was... well, Flappy Bird - though I made *it* in Unity. After learning more about Unity's fiasco last year (I'm always late to the parties), I opted out of Unity & into Godot for personal projects. Since they both support C#, I figured it would be a good time to really dig into learning the language. 

## Mechanical Breakdown

### Player
The 'Player' prefab extends Godot's CharacterBody2D to tap into the engine's physics runtime loop. This allowed me to easily control the body's mass and gravity scale and avoid manually scaling the player's rate of drop. An upward velocity of a constant value, 'FlapStrength', is applied to the body when the player presses spacebar or left-clicks inside the game window.

### Pipes
For Pipes, I built individual 'UpperPipe' & 'LowerPipe' objects which were then unified in a separate prefab of 'Pipes' to easily align them with each other, ensure they spawn at the same time with minimal effort and, potentially, programmatically control the gap between the two more easily (if I wanted to take it that far, that is... scope creep is real).

Another prefab, 'PipeFactory', extends Godot's Marker2D node and sits just offscreen. Its function is (you guessed it) spawning pipes at an interval determined by a child Timer node..

### Environment
