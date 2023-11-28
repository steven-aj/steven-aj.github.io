---
status: review
date: 2023-11-23
author: Steven Johnson
cover: /assets/covers/eye-light.jpeg
title: "Preventing Eye-Strain: Softer Transitions Between Light & Dark Modes"
excerpt: Toggling between light and dark modes of your website or application can make a world of difference for people with sensitive eyes or the night owls that live and work in the dark. There isn't a technical standard for how this should be accomplished and an instant transition can be pretty harsh. We can fix that with a few lines of CSS.
tags:
  - informative
  - rants
  - satire
  - thoughts
---
It seems like accessibility for software is in a weird, paradoxical place right now. On one hand, optional *Light* & *Dark* modes can help enhance the experience for people with optical sensitivities or weaknesses. On the other hand, there's no universal agreement on how it should be implemented. For a lot of projects, this results in a transition between modes that's harshly instant, leaving the user feeling like an unsuspecting victim in a particular *Raiders of the Lost Ark* scene.

I don't know if this is a problem for everyone, to be honest. I'm writing this from my own experience as a user. As both a night-owl *and a developer*, I find myself staring at screens more often than I probably should and in the dark more often than I probably should be. I feel like I'm not alone, though, and that we could engineer simple, yet thoughtful improvements to take care of our eyes.

## Why it Hurts

The iris is a muscle of the eye that contracts to restrict the amount of light that's transmitted to the eye's lens. The big takeaway here is that *the iris is a muscle*. Its contraction *is a reflex to the stimulus of light* and, while that reflex can be pretty quick, it's still exponentially slower than light itself. 

Since the brain needs time to process how much the iris should adjust to changes, and since the iris takes time to adjust, there's an extended period of time that the lens is exposed to potentially damaging amounts of light. This is especially true in dark environments where the iris is most relaxed, which is why the sudden shift from *Dark* mode to *Light* mode can be *literally painful* for some.

**The problem is time**. To a sensible person, this probably sounds too obvious to bother blogging about. *We instinctively know that the eyes must adjust to changes in light*. Unfortunately, however, there are demonstrably too many engineers that fail to take this into consideration when implementing optional theme modes.

## A Simple Solution

Since the issue is the time that it takes for our eyes to adjust, the solution is to extend the amount of time it takes to transition between different theme modes. If you haven't already, toggle this page between light and dark mode for an example of how this could work. Better, right?

Assuming you've already built your project to handle *Light* and *Dark* modes - or you're using a library that handles it for you -  there's an easy way to prevent your users from feeling like someone's speed-bagging their optical nerves. 

We can do this with as little as one line of CSS:

```css
* {
	transition: background-color 4s, color 4s;
}
```

The above property permits transitions of `background-color` and the `color` of text with a duration of `four seconds`. 

You can declare this within the `:root` of a document if you need to standardize the transition across various components. In your global stylesheet, migrate the transitions's property values to a custom property:

```css
:root {
	--theme-transition: background-color 4s, color 4s; 
}

* {
	transition: var(--theme-transition);
}
```

Then, in your component, set your globally accessible transition:

```css
.component {
	transition: var(--theme-transition);
}
```

With very little effort, we can pretty easily give our users time to adjust when transitioning between accessibility options.

## Final Words

I'll admit - this post probably could've been reduced to just the CSS examples, but I've tagged it as a `rant` for a reason. To me, this seems like a pretty obvious fix given how simple it is to implement. Maybe I just work in the dark too often.