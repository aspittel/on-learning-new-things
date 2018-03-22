---
title: "Socket.io: Making Web Sockets a Piece of Cake!"
tags: ["websockets", "JavaScript", "frontend"]
path: "/blog/socket-io"
date: "2017-12-03"
---

This week, I decided to learn about websockets because they are super cool. According to [MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API), websockets “make it possible to open an interactive communication session between the user’s browser and a server.” In other words, you can build applications where multiple users can communicate in real time pretty easily using websockets. One of the best known JavaScript libraries to implement websockets is [Socket.io](https://socket.io/), so I decided to use it for my project.

Let me just say, Socket.io is amazing. It made writing an application with websockets super simple and fast, and I didn’t need much extra code — it probably, in fact, was easier than making a simple AJAX request.

## The Learning Process
I started by going through the [tutorial](https://socket.io/get-started/chat/) on the Socket.io website — in about 20 lines of code you have a fully functioning websocket app! It helped me understand the procedures and syntax of the library. It was shockingly easy to build the application — for some reason websockets have always been very intimidating to me, and I thought they would be much harder to use! After that tutorial I felt pretty comfortable building something myself.

## The Final Project
Last year for April Fool’s Day, Reddit made an application called /r/place that allowed users to collaboratively build pixel art. [Here’s](https://www.youtube.com/watch?v=XnRCZK3KjUY) a timelapse of what that looked like. It was a lot of fun to collaborate with the rest of the world on the drawing and an overall really cool project.

I decided to build a much, much simpler version of that application using React for the frontend, Express for the backend, and Socket.io for communication.

Integrating Socket.io with React turned out to be surprisingly easy as well. I ended up adding the event listener to React’s `componentDidMount` lifecycle method, similar to where an AJAX request would be placed. All in all, the Socket.io code was incredibly simple. My app.js for my Express app is below — it simply listens for connections and pixels changing colors. Below that, I attached my App.js for my React app. If this was for a full blown project, I would have further cleaned up the React code, but for something one off like this I didn’t bother. The [backend](https://github.com/aspittel/websocket-drawing-backend/blob/master/app.js) and [frontend](https://github.com/aspittel/websocket-drawing/blob/master/src/App.js) code is hosted on GitHub! The application is also deployed [online](https://aspittel.github.io/websocket-drawing/), so play along with your friends!

![Websocket Drawing App](https://cdn-images-1.medium.com/max/880/1*0Nef284ApeQsqw77FbT1vA.png)

The beauty of websockets is that I can open up two tabs, or tell one of my friends to use the application and their pixel edits will also show up on my app, like so:

![](https://cdn-images-1.medium.com/max/880/1*OQeyQcdQR1ctEyHL-OHxWg.png)

## Last Thoughts
Again, I was shocked by how easy Socket.io and working with websockets ended up being. I will definitely continue using them to build interactive programs with live flowing data. I like how the final project turned out, and I had a lot of fun building it!

**Part of my [On Learning New Things](https://medium.com/on-learning-new-things/learning-new-things-f4db7f16724) Series**

