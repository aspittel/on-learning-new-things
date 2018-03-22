---
path: "/blog/elm"
date: "2017-11-22"
title: How I (Finally) Built an App in Elm
tags: ["frontend", "Elm", "CSS"]
---

Two years ago, I was asked by a company I was working for to learn Elm — a functional front-end programming language. I found the syntax strange and the functional programming paradigm difficult. We ended up moving to other front-end frameworks and eventually all but forgot about Elm.

I recently taught a lesson on Redux and was asked a bit about Elm by my students. It prompted me to think about Elm and see if now, two years further into my programming career, the pieces would fall into place and I could figure it out.


![](https://cdn-images-1.medium.com/max/800/1*PulJgoDtSE5eWBAjaLO6Wg.png)

## The Learning Process

I decided to start with the documentation. Elm is pretty well known for their documentation, and many technologies with higher barriers to entry have to so that people use their tools. I started at zero with the tutorial on their website and quickly progressed through the more standard parts of the language. There were some interesting syntactical choices — like the pipes for changing record attributes. I also found it interesting that their standard collection is a linked list instead of an array. It somewhat makes sense with a front-end language; however, it made my final project more tricky!

#### Elm Hello World

```elm
module Hello exposing (..)

import Html exposing (text)


main = 
    text "Hello"
```

From there I moved through the “Elm Architecture” portion of the tutorial. I felt like it jumped from 0–100 really fast in this part. I definitely got a little bit lost here. Overall, though, the design pattern of model, update, view, subscriptions made sense. I like the ability to know where everything is situated.

Throughout the learning process, I continuously went back to the sample code in the [elm-architecture-tutorial](https://github.com/evancz/elm-architecture-tutorial/blob/master/examples/01-button.elm).

The other really nice features include the error messages and time traveling. In Elm’s compiling process it makes sure that there won’t be any runtime errors. This process means you have really good, clear error messages before your code runs. I also really like the “time travel” functionality where you can see your application’s state at various points. These parts of the development experience are great, and I can see why other tools (such as Redux) have built off of these ideas.

After looking through the “Elm Architecture” portion of the tutorial, I was able to step by step walk myself through the code, but I was still really struggling to write my own Elm code from scratch. I ended up looking at some other projects that I found on Github such as [Flatris](https://github.com/w0rm/elm-flatris) and [Elm Hanoi](https://github.com/dstoeckel/hanoi/blob/master/Hanoi.elm).

From there I found [Tensor Programming’s Elm tutorial](https://www.youtube.com/watch?v=Rf2CkojtxFw) which ended up helping a lot. I really like the follow along style of learning, so this tutorial was really helpful for that.

## The Final Project

I originally wanted to build Towers of Hanoi in Elm since it is a pretty easy JavaScript game to write; however, I found it still a bit out of my league in Elm. I instead scaled down and wrote a trivia app, which was still pretty tricky.

I ended up using [create-elm-app](https://github.com/halfzebra/create-elm-app) which is very similar to create-react-app. It was very helpful for both development and deployment. There were still a few things that I had to figure out in my code. First was the linked list vs. array issue. I ended up using the linked list and iterating through it to retrieve different questions. In other languages I would have kept an index value and used that to move from question to question. The architecture of the program was a bit different in Elm.

I also found working with “maybes” difficult. Maybes are a datatype in Elm similar to a string, integer, or list that can be “Nothing” — similar to null or None in other languages — or have a value. In order to work with the value, if it exists, you must take it out of the maybe. It makes sense from a strictly typed perspective and a functional perspective, but it makes the code somewhat clunky.

#### Example Maybe Handling

```elm
currentQuestion : Maybe Question -> Question
currentQuestion question = 
    case question of
        Just question ->
            question
        Nothing ->
            { question = ""
            , answers = []
            , correctAnswer = ""
            }
```

Eventually, I did come up with a MVP trivia application that asks questions, lets users click buttons with the different answers, and then keeps track of how many questions were answered correctly. Deploying the application ended up being pretty easy — I just had to run `elm-make` and push the build subdirectory to the gh-pages branch of my remote repository. The code is [here](https://github.com/aspittel/elm-trivia-app/tree/master/src) and the app is deployed [here](https://aspittel.github.io/elm-trivia-app/).

![](https://cdn-images-1.medium.com/max/800/1*7OhjN0faYmhp1qULuHTyLg.png)

## What Comes Next

It turns out Elm didn’t get much easier in the past few years — Elm was still a totally different way of thinking. Even though I produced an MVP, getting there was 100x harder than if I had built it in a language I was more comfortable with. The design patterns were still difficult and working with data seemed much trickier than it should be. I still wouldn’t choose to use Elm, though I do see some of the benefits of it — like static typing and tough error catching. If I were to utilize functional programming on the front-end, I would much rather use React and Redux since they are both still in JavaScript. Overall, I think Elm is a good idea, but some of the syntax and implementation is still a bit rocky.

**Part of my ["On Learning New Things"](https://medium.com/on-learning-new-things/learning-new-things-f4db7f16724) series.**
