---
status: published
date: 2023-09-15
author: Steven Johnson
cover: /assets/covers/rocket-plug.jpeg
title: Elevating WordPress Plugin Development in 2023
excerpt: An overview of implementing modern front-end frameworks as WordPress Plugins
tags:
  - wordpress
  - applications
  - informative
  - wordpress-plugins
  - rants
---
WordPress' popularity is based largely on its ecosystem of plugins & their ability to simplify constructing solutions for.. well.. everyone. In reality, a large portion of those plugins are poorly implemented with respect to the platform's core-development principles, ultimately impacting performance of the final product in a not-so-good way.

As time has gone on, WordPress has shifted much of its attention to expanding its block-building tools for both end-users and developers alike. Much of this has been in efforts to modernize the platform's potential, but it's lended itself to offering opportunities to enhance performance as well.

While I don't intend to write a How-To of plugin development and, while nothing about this post is particularly ground-breaking, I hope this article helps to shed some light on ways we can improve practices to ensure optimal performance while still leveraging plugins. 

I'll start with how we can help guide a user's expectations by building an app layer over custom post-types, then talk a bit about how today's block-tooling can improve performance for the end-user (touching on how this granularly helps with SEO) and how it all ties together in the form of a modulated plugin. While there are several ways to expand the platform, this article explores scaling custom post-types.

## Re-Defining Custom Post-Types

Let's start with data - specifically of the custom post-type. While there are other features that can be enabled on a custom type, there are four primary elements to any post: its content, an excerpt, a cover photo and taxonomies. An additional bonus of the post is its ability to house custom fields - the significance of which I'll get to later. 

Traditionally, the post-type was (and remains) an excellent foundation for building query loops that dynamically render repeatable models of content specific to their given context. Modern tooling gives us the advantage of enhancing the way posts are created and maintained - effectively enhancing UX.

For reference, let's consider a custom post-type of 'Staff Members'. 

1. From the Dashboard, we want the user to be able to manage teams on their website.
2. On the front-end, we want to render a component for each post, representing individual members.

To bridge content management with front-end development, it would be helpful to pre-define some common language to help non-developers understand how these two areas connect to each other.  To do that, let's consider how we want to use the elements that WordPress gives us.

On the front-end, let's consider the component of individual members (the post) to be a Card rendered as a column featuring a Headshot of the Staff Member with a segment of content immediately below it that holds the person's name and a brief Overview of their roles within the company. To organize members into their respective Teams (or Departments), we can use a custom taxonomy. 

Where data is concerned, it seems pretty obvious that a post's cover photo would serve well for the team member's Headshot. For the content section, we can use the post's title to house and display the member's Name. For their Overview, however, we have two options - the post's content-body, or its excerpt. On one hand, the content-body could be useful for rendering HTML out-of-the-box (something that excerpts aren't natively built for). On the other hand, we could use the content-body to house a Bio for each user, while the excerpt could be useful for our Overview of their roles & responsibilities. Since the option of a Bio for each member opens further opportunities to build a template around a single post - effectively giving each member their own page - let's go with the latter.

## The Application Layer

While we could (probably) train most users to understand what we define as a Card and how the post's excerpt would be featured within it, we can go the extra distance by re-defining the excerpt itself as the member's Overview. Since we're using the post's content-body for a member's Bio, we can appropriately re-define that as well. While we're at it, why not call the cover photo a Headshot, too?

Now that we've determined how we'll leverage different elements of the post, we can start conceptualizing an application layer to expand on our post-type of Staff Members. With newly-defined context for each element of a Staff Member, we can build this layer in a way that seamlessly bridges the user's expectations by rendering similarities between the Dashboard and the front-end. To do this, we'll build our application's UI to display posts in a Card-like manner with additional interactivity to modify each element of the card. Maybe an on-hover event to show a button on our Headshots, perhaps some buttons to toggle independent editors for the Overview & Bio and, finally, a sidebar to help organize members by our custom taxonomy of Team (or Department).

We could, of course, build this layer in PHP, but our objective is to modernize the experience with the powers of reactivity and state management. To do this, we could opt for any one of the modern front-end frameworks and interact with WordPress' native REST API to manage our posts - a concept not far from the direction that WordPress is heading, anyway.

After registering our post-type, we'll immediately hide it within the Dashboard and replace it with a custom admin page that houses our application.

## Block Assortment: React Development

With our modern application built, we could call it a day, roll out our plugin and wish the best to anyone that installs it, but our goal is *enhancing their experience* when building out their project. Since our aim is to bridge Dashboard maintenance with front-end building, we can bundle at least one custom block within our plugin to put a drag-and-drop bow on our feature set.

Fortunately, the developers of WordPress offer an official block-tooling kit that leverages React components to build customizable options around custom blocks. We can use this to build out our Card for the front-end Editor of block-based themes, finalizing our bridge.

By bundling a custom post-type, an application layer on top of it and a set of customizable blocks, we can develop "the WordPress way" without impacting performance metrics.

## Further Considerations

Earlier, I mentioned the addition of custom fields within a post-type. These essentially represent object models that we can use to define additional information for our posts. Imagine laying out individual slides of a slideshow within a single post, then defining properties of that slideshow (*speed, animation, etc.*) using custom fields.

With this in mind, the possibilities of expanding on the core feature of a Post are nearly limitless.