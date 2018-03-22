---
path: "/blog/electron"
date: "2018-01-30"
title: Building a MarkDown Reader in Electron
tags: ["Electron", "JavaScript", "desktop"]
---
Ever since it came out, I've been interested in Electron because it allows you to write desktop apps in JavaScript. This allows you to use all the JavaScript packages you are used to using! Plus, I spend so much of my life using VS Code, I should probably learn the tech behind it, right?

## Getting Started

I started out by installing Electron globally using `npm`. I then walked through the "Hello World" example on the Electron site. It mostly shows how to launch an instance of an Electron app and how to handle closing windows. I ended up using most of the code in my final project. 

I then did some Googling to see how people separated out their code. I initially didn't understand fully that there should be separate code for the creation of the desktop app and then "view" code for the user to look at and interact with. You can use `require` statements on the view side still in order to include npm packages, though, which is different than normal "client-side" JavaScript. I did look at a few sample projects, but I didn't end up using anything other than file structure for my final project.

## The Final Project

I give a lot of talks, and I usually write Markdown notes for those talks. I usually use the Markdown preview within VS Code to look at those notes while I am talking. This can get complicated when I have another VS Code instance with Code on it -- my zoom levels and customizations change per window! I decided that I should make my own Markdown viewer that is customized perfectly for giving talks.

I started out with the `main.js` which handles most of the window-creation code. My code was essentially identical to the [quickstart](https://electronjs.org/docs/tutorial/quick-start) code on the Electron site. My one change was that I used the size of the user's monitor to decide the size of the window.

```js
const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize
win = new BrowserWindow({ width, height, frame: false })
```

Also, in development, I used [electron-reload](https://www.google.com/search?q=electron+hot+reload&oq=electron+hot+relo&aqs=chrome.0.0j69i57j0.4754j1j1&sourceid=chrome&ie=UTF-8), which was really helpful. By default, you have to restart the Electron instance every time you make a change, which gets pretty annoying pretty fast! This npm package brought in hot reloading for the view side of the code.

I ended up creating a `view` folder that contained the view-centric html, css, and js. The html looked really similar to any other html file!

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>Markdown Reader!</title>
  <link rel="stylesheet" href="style.css">
  <link 
    rel="stylesheet" 
  href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/github.min.css"
  >
</head>

<body>
  <div class="container">
    <input type="button" value="+" class="select-file"/>
    <button class="close">x</button>
    <div class="md"></div>    
  </div>
  <script src="./script.js"></script>
</body>

</html>
```

The JavaScript file, however, did look a little bit different than a normal client-side one.

```js
const fs = require('fs')
const marked = require('marked')
const hljs = require('highlight.js')

const { getCurrentWindow, dialog } = require('electron').remote

const readFile = (file) => {
  fs.readFile(file, (err, data) => {
    document.querySelector('.md').innerHTML = marked(data.toString())
    Array.from(document.querySelectorAll('pre code')).forEach(
      block => hljs.highlightBlock(block))
  })
}

const filters = { filters: [{ name: 'Markdown', extensions: ['md', 'markdown'] }] }

const openFilePicker = () => {
  dialog.showOpenDialog(filters, fileNames => {
    if (fileNames) {
      readFile(fileNames[0])
    }
  })
}

const close = e => {
  const window = getCurrentWindow()
  window.close()
}

document.querySelector('.close').addEventListener('click', close)
document.querySelector('.select-file').addEventListener('click', openFilePicker)
```
First, I used require statements instead of using script tags in the `index.html`. Second, Electron has actions that wouldn't be used in the browser, like closing a window or opening up the user's file dialog. It was easy enough to figure out these actions. `dialog.showOpenDialog` opened up a file selector, and I used Node's `fs` to then open up that file. I also removed the grey default header from Electron, so I needed my own close button. I did that with the `close` function in the code above.

Other than that, I could use the normal Vanilla JavaScript methods to interact with the dom and add event listeners.

I **really** like the way the app turned out, and I will actually use this app on an almost daily basis. The top looks like the following:

![](https://thepracticaldev.s3.amazonaws.com/i/1rsk2o7yho2xtc9dbtw1.png)

Code snippits use GitHub's text editor theme:
![](https://thepracticaldev.s3.amazonaws.com/i/0bygkrnn7hlaq2av9q1t.png)

I used custom spacing, padding, and fonts to make it most readable for me when presenting!

I did try to bundle this app to make it a true desktop app, but I didn't have much success. I may look further into it, but I tried two libraries and both didn't seem to do what I wanted them to. I instead used an alias in my `.zshrc` to open it up anywhere on my computer. That for me is, honestly, a better option because I don't use the finder or Launchpad for opening anything except iTerm when my computer starts up!

## Next Steps
If I were to ever build a desktop app again, I would definitely use Electron. It was easy to use, well documented, and similar to my normal development process. I don't necessarily think that I will have many other desktop apps that I want to build, but I enjoyed the process of building this app and would recommend Electron to people wanting to build desktop apps easily!


[code](https://github.com/aspittel/markdown-viewer)

Setup instructions:
```bash
$ git clone https://github.com/aspittel/markdown-viewer
$ cd markdown-viewer
$ npm install -g electron
$ npm install
$ electron .
```

**Part of my [On Learning New Things](https://medium.com/on-learning-new-things/learning-new-things-f4db7f16724) Series**
