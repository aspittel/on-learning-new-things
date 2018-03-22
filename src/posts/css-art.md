---
path: "/blog/css-art"
date: "2017-11-25"
title: "Learning CSS Through Creating Art"
tags: ["CSS", "art", "frontend"]
---

Earlier this week, one of my co-workers found a [single div all CSS image of Admiral Grace Hopper by Trish Katz](https://codepen.io/techxastrish/pen/eEyYNP?editors=1100) on CodePen. It seemed like magic — I’ve written thousands and thousands of lines of CSS for projects I’ve worked on but this was on a different level! I immediately wanted to learn more.

#### Single Div Grace Hopper
<iframe height='457' scrolling='no' title='Single Div Grace Hopper' src='//codepen.io/techxastrish/embed/eEyYNP/?height=457&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/techxastrish/pen/eEyYNP/'>Single Div Grace Hopper</a> by Trish Katz (<a href='https://codepen.io/techxastrish'>@techxastrish</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

I am not an artist in any way, shape, or form. I manage to make my sites look okay by keeping them as simple as possible and relying heavily on material design rules. Drawing things in CSS seemed like a challenge I couldn’t turn down!

## The Process
I started doing research on CSS art and found some great resources such as: [Sasha Tran](https://medium.com/@sashatran), [Coding Artist](https://medium.com/coding-artist/a-beginners-guide-to-pure-css-images-ef9a5d069dd2), and the [#PureCSS](https://twitter.com/hashtag/purecss?lang=en) hashtag on Twitter. Through these resources, I ended up finding a tutorial called “[How to Make Pure CSS Images to Progress With Design-Focused Frontend Development](http://coding-artist.teachable.com/)” by the Coding Artist. He went through how to create an adorable [Koala](https://codepen.io/mikemang/pen/oYMePj) cartoon using just CSS.

I found the way that he broke down the different components of the Koala really interesting. It turns out, CSS art is created by filling in, resizing, and reshaping divs. A div is an HTML element that doesn’t by default do anything — it is mostly used for grouping elements and applying styles. Since they don’t have any default behaviors we can easily add styles to them! Each different shape on the koala is a div that has a CSS selector on it. I found that a lot easier than the single div art I had seen previously!

From there, I decided to play around with the Koala CodePen and modify it. With a lot of trial and error, I ended up with this [cartoon portrait of my dog](https://codepen.io/aspittel/pen/aLxrBq). Again, I am *so* not an artist.

#### Cartoon Dog Portrait
<iframe height='495' scrolling='no' title='Black Lab CSS Art' src='//codepen.io/aspittel/embed/aLxrBq/?height=495&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/aspittel/pen/aLxrBq/'>Black Lab CSS Art</a> by Ali Spittel (<a href='https://codepen.io/aspittel'>@aspittel</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Below, I included a snippet of what some of the code looks like and what it does. All of the code below also applies to normal CSS — CSS art is a great place to practice your normal CSS skills! For example, the code for the dog's head is below:

```css
.head {
    background-color: black; /* the color of the div black */
    position: absolute; /* hard places the div instead of allowing responsiveness or relating it to other divs */
    top: 16.5%; /* where the top of the div will be placed */
    left: 25%; /* where the div will start horizontally */
    width: 50%; /* what percentage of the parent div the div will take up horizontally */
    height: 67%; /* what percentage of the parent div the div will take up vertically*/
    border-radius: 50%; /* makes the div round! */
}
```

It's just normal CSS being used for art instead of a website layout!

One of the most helpful tools I found was [Clippy](https://bennettfeely.com/clippy/) which allows you to draw out CSS clip paths and generate the code for the shape you want to draw! CSS allows circular and square shapes by default, but when you want to use triangles or other non-standard shapes it gets a bit trickier. We have to calculate the coordinates of the paths we want to draw. Since this path math can get pretty dicey pretty fast, I really enjoyed using Clippy to make that process easier.

## The Final Project

Once I had the working dog, I decided that I wanted to write something I could use outside of a CodePen, so I built a webpage with a floral pattern.

I started out by using CodePen to draw out the different flower shapes that I wanted to include. I ended up using three: one with long ovals for petals (the white flowers), one with teardrop shaped petals (the pink ones), and then one made up of circles (the yellow ones). By this point, I was fairly comfortable creating shapes and editing them using CSS.

Somewhere along the way, I decided that it was getting really cumbersome to draw out all of the flowers manually, and I decided to use React to dynamically create them — I totally cheated! I still did 90% of the work with CSS, but I got annoyed by having so many divs and instead wrote some of them iteratively using React. For context, each one of the white flowers is made up of 21 divs — 20 petals and one for the center. I wrote code that generated those petals and their coordinates!

#### Image of the final project
![](https://cdn-images-1.medium.com/max/800/1*IFmwCagEmlU68El8ea40Rw.png)

The final code is [here](https://github.com/aspittel/css-flower-art) and the page it generated is deployed [here](https://aspittel.github.io/css-flower-art/). I also ended up using it as my desktop background!


## Next Steps
Learning CSS art was really fun, and I think that the concepts from it will definitely everyday CSS become stronger! I am still far from an artist, but CSS art could be a good artistic outlet for me moving forwards. Overall, I had a lot of fun with this project and I really like the output!

**Part of my [On Learning New Things](https://medium.com/on-learning-new-things/learning-new-things-f4db7f16724) series!**
