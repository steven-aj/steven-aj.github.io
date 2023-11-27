---
status: review
date: 11/23/2023
author: Steven Johnson
cover: 
title: Preventing Eye-Strain With Softer Transitions Between Light & Dark Modes
excerpt: Toggling between light and dark modes of your website or application can make a world of difference for people with sensitive eyes or the night owls that live and work in the dark. There isn't a technical standard for how this should be accomplished and an instant transition can be pretty harsh. We can fix that with a few lines of CSS.
tags:
  - informative
  - rants
  - satire
---
It seems like accessibility concerns are in a weird, paradoxical place right now. On one hand, optional *Light* & *Dark* modes can help enhance the experience for people with optical sensitivities or weaknesses. On the other hand, this feature hasn't been standardized, so there's no universal agreement on how it should be implemented. For a lot of projects, this results in a transition between modes that's harshly instant, leaving the user feeling like an unsuspecting victim in a particular *Raiders of the Lost Ark* scene.

I don't know if this is a problem for everyone, to be honest. I'm writing this from my own experience as a user. As both a night owl and a developer, I find myself staring at screens more than I probably should and in the dark more often than I probably should be. I feel like I'm not alone, though, and that we could do better to take care of our eyes.

## Why it Hurts

The iris is a muscle of the eye that contracts to restrict the amount of light that's transmitted to the eye's lens. The big takeaway here is that *the iris is a muscle*. Its contraction is a reflex to the stimulus of light and, while that reflex can be pretty quick, it's still exponentially slower than light itself. 

Since the brain needs time to process how much the iris should adjust to changes, there's a extended period of time that the lens is exposed to potentially damaging amounts of light. This is especially true in dark environments where the iris is most relaxed, which is why the sudden shift from *Dark* mode to *Light* mode can be *literally* painful for some.

The problem *is time*. To the sensible person, this probably sounds pretty obvious. *We instinctively know that the eyes must adjust to changes in light*, but there are so many engineers that fail to take this into consideration when implementing optional theme modes.

## A Simple Solution

Since the time it takes for our eyes to adjust is the primary factor, the solution is to extend the amount of time it takes to transition between different theme modes.

Assuming you've already built your project to handle *Light* and Dark modes - or you're using a library that handles it for you -  there's an easy way to prevent your users from feeling like someone's speed-bagging their optical nerves. We can do this with as little as one line of CSS.

```css
* {
	transition: background-color 4s, color 4s;
}
```

The above property permits transitions of `background-color` and the `color` of text with a duration of `four seconds`. 

You can declare this within the `:root` of a document if you need to standardize the transition across troublesome components. In your global stylesheet, migrate the transitions's property values to a custom property:

```css
:root {
	--theme-transition: background-color 4s, color 4s; 
}

* {
	transition: var(--theme-transition);
}
```

Then, in any troublesome component, set your globally accessible transition:

```css
.troublesome-component {
	transition: var(--theme-transition);
}
```