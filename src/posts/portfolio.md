---
title: How I Re-Wrote my Portfolio Site
tags: ["CSS", "frontend", "JavaScript"]
path: "/blog/portfolio"
date: "2017-12-01"
---

This week, instead of learning one new thing, I got a little bit obsessed with re-writing my [portfolio site](http://aspittel.github.io/). I decided to write a blog post about that process and the things I learned along the way instead of the typical article on one technology. I used three tools that I haven’t done a ton with in the past during this project: P5.js, CSS animations, and FlexBox.

Earlier this week, I noticed an animation that I liked on the Creative Coding Club’s [website](http://creativecoding.club/). The “Creative Coding Club” title moves dynamically on hover. I fired up a Code Pen and started trying to recreate it. I ended up with a pretty different animation where the letters fell and then returned to their original place after a few seconds. I originally had a CSS animation that ran on hover; however, the animation ended after you moved your mouse. I had to use JavaScript to add a class dynamically that would be removed when the animation finished.

This was my first time using keyframes and CSS animations, and it was surprisingly easy! The relevant code looks like this:

```css
@keyframes myanimation {
    0% {
      top: 0px;
    }
    50% {
      top: 50px;
    }
    100% {
      top: 0px;
  }
}
 
.hovered {
  animation: myanimation 3s;
}
```

```js
Array.from(document.getElementsByClassName('letter')).forEach(letter => {
  letter.addEventListener("mouseover", (e) => {
    letter.classList.add("hovered")
  })
  letter.addEventListener("animationend", (e) => {
    letter.classList.remove("hovered")
  })
})
```

After tweaking the CSS a bunch, I ended up with [a mockup Codepen](https://codepen.io/aspittel/pen/xPgaGJ) of my name. I ended up really liking the animation, and I decided to run with it and redesign the rest of my site to match the rainbow name! I am not a trained designer by any means, and — though I probably should — I don’t usually wireframe my sites ahead of time or use any design software. I add a feature that I envision and then tweak it until it looks good on the page.

#### Mockup Codepen
<p data-height="265" data-theme-id="0" data-slug-hash="xPgaGJ" data-default-tab="result" data-user="aspittel" data-embed-version="2" data-pen-title="Animated Name" class="codepen">See the Pen <a href="https://codepen.io/aspittel/pen/xPgaGJ/">Animated Name</a> by Ali Spittel (<a href="https://codepen.io/aspittel">@aspittel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

I also decided to use vanilla JavaScript (so no framework), my own CSS (again no framework).

I had also recently seen a couple cool Code Pens using p5.js. Two of my favorites were an [interactive physics playground](https://codepen.io/dissimulate/pen/fhjvk) and a [Wikipedia change visualizer](https://codepen.io/halvves/pen/rrxakW). I decided that I wanted to try and learn the library for this project. I just looked through the basic [demos](https://p5js.org/examples/#demos) on the P5 site. I thought that it could be fun to draw a bunch of random shapes based on user input. Doing so was a pretty easy extension from the demos on the website.

#### Interactive Physics Playground
<p data-height="406" data-theme-id="0" data-slug-hash="fhjvk" data-default-tab="result" data-user="dissimulate" data-embed-version="2" data-pen-title="Physics Playground" class="codepen">See the Pen <a href="https://codepen.io/dissimulate/pen/fhjvk/">Physics Playground</a> by dissimulate (<a href="https://codepen.io/dissimulate">@dissimulate</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

#### Wikipedia Change Visualizer
<p data-height="265" data-theme-id="0" data-slug-hash="rrxakW" data-default-tab="result" data-user="halvves" data-embed-version="2" data-pen-title="Wikipedia Audiovisualizer (p5.js & timbre.js)" class="codepen">See the Pen <a href="https://codepen.io/halvves/pen/rrxakW/">Wikipedia Audiovisualizer (p5.js & timbre.js)</a> by halvves (<a href="https://codepen.io/halvves">@halvves</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

#### My Random Shapes
![](https://thepracticaldev.s3.amazonaws.com/i/drh87mia4nazv0516m7a.png)

The P5 JavaScript code looked like this:
```js
const numShapes = 3
const maxSize = 200

let colors = []
function setup () {
  colors = [
    color(255, 143, 0, 80),
    color(255, 128, 171, 80),
    color(255, 193, 7, 80),
    color(76, 175, 80, 80),
    color(0, 188, 212, 80),
    color(171, 71, 188, 80),
    color(239, 83, 80, 80)
  ]
  createCanvas(window.innerWidth, document.body.offsetHeight)
  noStroke()
}

function randomNumber (size) {
  return Math.floor(Math.random() * size)
}

function randomChoice  (choices) {
  let index = randomNumber(choices.length)
  return choices[index]
}

function mouseClicked () {
  let sideLength = randomNumber(maxSize)
  fill(randomChoice(colors))
  let shapeType = randomNumber(numShapes)
  if (shapeType % numShapes == 0) {
    ellipse(mouseX, mouseY, sideLength, sideLength)
  } else if (shapeType % numShapes == 1) {
    rect(mouseX, mouseY, sideLength, sideLength)
  } else {
    triangle(mouseX, mouseY, mouseX + sideLength, mouseY, 
      mouseX + (.5 * sideLength), mouseY - sideLength)
  }
}
```
The setup function runs as soon as the file is loaded — it initializes an HTML canvas. The mouseClicked function runs when the user clicks anywhere on the canvas. It runs a couple random number generations to get the size, color, and shape. I found it pretty straightforward to work with, and I would do so again in the future.

From there I had to move down the page and add sections for about, portfolio, and contact me. I’ve recently been working on my FlexBox skills since I used to use CSS libraries like Bootstrap and Materialize with builtin grids for most of my projects. I really enjoyed [FlexBox Froggy](http://flexboxfroggy.com/) for learning it — and [CSS Grid Garden](http://cssgridgarden.com/) if you want to get ahead on CSS Grid! I used it for gridding out the two part bio section with my picture and my bio, and for the cards that display my different portfolio items. I still think I have some bugs in Safari and on really big screens, but I think I’m close to getting it all of the way there!

Overall, I had a lot of fun working on this full site rewrite and my traffic has increased pretty substantially (21,416.7% according to Google Analytics!). Of course, a lot of that can be attributed to social media use after the rewrite, but people have been really nice about how it looks!

I’ve been taking a more minimalistic approach to using libraries, which reinforces knowing the standard JavaScript and CSS libraries. I do think React or Vue would have made some of the HTML more modular — the final HTML code is over 400 lines!

I really like how fun and colorful the design is, even though it may break the three color design rule! I think it represents my personality well, and it showcases my work. If you want to check out the site, it is [aspittel.github.io](https://aspittel.github.io) and the code is on my [GitHub](https://github.com/aspittel/aspittel.github.io/tree/master)!

**Part of my [On Learning New Things](https://medium.com/on-learning-new-things/learning-new-things-f4db7f16724) Series**
