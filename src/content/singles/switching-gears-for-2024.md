---
status: published
date: 2024-01-01
author: Steven A.J.
cover: /assets/covers/video-game-elements.jpg
title: I'm Switching (Hobby) Gears for 2024
excerpt: As both a passionate gamer and developer, it only makes sense that I bring the two together. While I have no intentions of leaving web development, I'm finally making an official hobby of game dev.
tags:
  - development
  - software
  - game-dev
  - godot
  - unity
---
I usually spend most of my free time coding in whatever framework I've been learning. For the last 7 years, that's been a variety of web app & API frameworks - mostly in JavaScript/Typescript & PHP. This year, I'm switching things up to take a deep dive into the world of game development and .NET/C#.

Unfortunately, I've spent very little professional time in the .NET ecosystem. Actually, the only real-world experience I've had with it was on some internal tooling for University of Colorado Boulder. I didn't mind it then, but I was young, dumb & naive in thinking that JavaScript was superior. To me, .NET was exclusively a "back-end technology" and JavaScript was the only thing robust enough for true full-stack development (*I know... I know... I've grown since then*). This month, though, I'm learning more about C# between Godot & Unity. It's been the most fun I've had developing anything since I was a kid.

My first game was a Flappy Bird clone using a free asset pack from Itch.io, courtesy of <a target="_blank" href="https://megacrash.itch.io">MegaCrash</a>. I'll never publish it, of course, but for my first game in a *real game engine* (Godot), it was ton of fun to make.

<iframe style="margin: 0 auto;" width="100%" height="auto" src="https://www.youtube.com/embed/SbweMRM0nWw?si=VPfLTg20QMSRQUIf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Okay, technically it's my *second* game, but the first was... well, a Flappy Bird clone made in Unity. After learning more about Unity's fiasco last year (I'm usually late to the party), I opted out of Unity & into Godot for personal projects. Since they both support C#, I figured it would be a good opportunity to go spelunking down that rabbit hole. 

## Mechanical Breakdown

The overall mechanics are pretty simple, broken into three primary objects with some base prefabs to support them - a Player, Pipes & PipeFactory. The environment is a single Background object with a few controls.

### Player
The 'Player' prefab extends Godot's CharacterBody2D to tap into the engine's physics runtime loop. This allowed me to control the body's mass and gravity scale, alleviating the need to scale the player's rate of fall. An upward velocity of a constant value, 'FlapStrength', is temporarily applied to the body when the player presses spacebar or left-clicks inside the game window.

### Pipes
For the pipes, I built individual 'UpperPipe' & 'LowerPipe' objects. Each prefab has a CollisionBody2D component to trigger an event when the Player comes into contact. Ultimately, both objects are unified into a separate prefab of 'Pipes'. This was done to: a) easily align them with each other, b) ensure they spawn at the same time with minimal effort and, potentially, c) programmatically control the vertical gap between the two (*if I wanted to take it that far, that is... scope creep is real*). The only function of the 'Pipes' prefab is to translate its location across the x-axis, giving the player the illusion that they're always moving forward.

Another prefab, 'PipeFactory', extends Godot's Marker2D node and sits just offscreen to the right. Its purpose is to spawn pipes at an interval determined by a child Timer node. The Timer's completion-event bubbles up to the parent node, instantiating a 'Pipes' object at a random point within a specific positive/negative range of the Marker2D's y-axis.

### Environment
MegaCrash's asset pack came bundled with a few backgrounds of a single cityscape represented at different times of the day. Since I'm too indecisive to choose just one, I layered them over each other into their own prefab of 'Background', which also contained an AnimationPlayer node that I used to modulate each image's opacity in a specific order - mimicking a day/night cycle. Honestly, I probably could've put more time into also controlling some variations in the overall color for better transitions, but I do try to avoid scope creep as much as I can (*believe it or not*).

Beyond that, a Camera2D focuses on the center of the viewport while the rest of the game's action happens.


## Personal Goal for 2024
While I had fun building this clone, my ultimate goal this year is to participate in at least one Game Jam. Since I'm in the process of looking for work, it probably won't happen in the first quarter at the very least, but it's *going to happen*. I will do it. I may not win. But I *will make it happen.*

By the way, if you're looking for a developer with extensive JavaScript/Typescript experience (or wouldn't mind hiring an experienced developer learning .NET/C#), I'm on the market! Feel free to get in touch.

