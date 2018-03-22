---
title: "Facial Recognition in JavaScript using Tracking.js"
tags: ["JavaScript", "data science", "frontend", "Augmented Reality"]
path: "/blog/facial-recognition"
date: "2017-12-06"
---

Earlier this week, I saw [a really cool article](https://dev.to/unqlite_db/progamming-snapchat-like-filters-cod) about how to create Snapchat like filters in Python. I was curious whether similar opensource technology existed for the frontend. I found a couple resources:
* [Tracking.js](https://trackingjs.com/)
* [clmtrackr](https://github.com/auduno/clmtrackr)
* [ccv](https://github.com/liuliu/ccv)
* [headtrackr](https://github.com/auduno/headtrackr)

I was really excited that this data-sciencey technology existed on the front-end instead of just in more traditional data science languages like Python or R.

I thought all of the above projects were very interesting, and they all had relatively similar star-level's on GitHub. I decided to use Tracking.js because the documentation was really good, and there were a bunch of examples which, for me is the easiest way to learn! I do wish there was better documentation on what was going on behind the scenes with this library -- I'm not sure what statistics are going on or how the tool works past implementation.

That being said, it was very easy to implement. I could easily extend the [face camera example](https://github.com/auduno/headtrackr) for the purposes of the app I ended up building!

## The Learning Process
Since Tracking.js is a smaller library with less of a community behind it than I normally end up using, my learning was pretty limited to looking at the examples on their website. I did search Codepen, but the few pens on there seemed to be incomplete or very similar to the examples.

## The Final Project
Warning: I definitely learned throughout this project that webcam selfies are super awkward! I have no idea how I had a webcam selfie as my profile pic on Facebook back in high school!

I started off by copying the [face camera example](https://github.com/auduno/headtrackr) on the tracking.js site. I ended up getting it working locally, with a few tweaks, and with downloading the tracking library locally.

![the example code](https://thepracticaldev.s3.amazonaws.com/i/a72o42eg3iok91f0rncv.png)

Then, I found a couple PNG's online to layer on top to be the filters. I just used Google Image search and then copied them locally. I then implemented a simple algorithm for adding the filter to the face -- I just hard-coded the dimensions based on where the user's face was. It ended up looking like this:

![](https://thepracticaldev.s3.amazonaws.com/i/lquvj2ouzrtxjuiu64ps.png)
![](https://thepracticaldev.s3.amazonaws.com/i/cc1k91nw1csmyqpmnpg4.png)

I also tried to implement the dog face that Snapchat has, but the math turned out to be too specific to the person's face for something as quick as this project!

I then generalized the math and added the ability for the user to switch between the filters. The math was relatively easy -- the event listener that fires when the person moves on the screen returns an array of the coordinates of the faces within view. Then I would draw the filter on top using my improved coordinates. The key code looked like this:

```js
    context.drawImage(img, rect.x + (filterX * rect.width),
      rect.y + (filterY * rect.height),
      rect.width * filterWidth,
      rect.height * filterHeight
    )
```

After that, I polished up the CSS, which was really hard! The way this ended up working was layering a HTML Canvas over a video element, so getting the grid system to align everything was really tricky. I ended up plugging in CSS Grid for the first time to see if that would work. It ended up working, but the way I did it felt hacky. I will have to keep looking at CSS Grid in the future!

The app ended up looking like this:
![](https://thepracticaldev.s3.amazonaws.com/i/fasbgn8vuw8r3naypvvo.png)
![](https://thepracticaldev.s3.amazonaws.com/i/cg3v790nwbjf0ekzofcq.png)

My final output seems okay, it is by no means perfect, but to get it better I would probably have to create my own library or my own filters. I also really struggled to get more complex filters to work. I would have had to break them up into their parts -- like each ear and the nose -- and then figure out the math to add these to each face. I seemed to have issues linking the different facial features back together if I wanted to track the eyes or mouth separately, rather than the face as a whole. 

If I wanted to put more into this project, I would probably have also tried to add some smoothing so that the filter jumps less when a person moved a tiny bit. Overall, the project probably could have been better but I achieved what I wanted to in order to learn the library.

## Next Steps
Tracking.js is really cool and well documented! I think its a great library for doing something simple like this app. If I were to do this for a job or something larger, I would probably have to improve a lot of the functionality in the app. I also found the webcam API to be shockingly difficult to use -- I struggled to find examples of styling and picture taking online. I would also like to look into it more in the future. Overall, I had fun with this! It isn't perfect, but it was a good quick project.

[Code](https://github.com/aspittel/tracking/)
[App](https://aspittel.github.io/tracking/)

**Part of my [On Learning New Things](https://medium.com/on-learning-new-things/learning-new-things-f4db7f16724) Series**
