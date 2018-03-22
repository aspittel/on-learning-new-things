---
title: "Building Web Components with Vanilla JavaScript"
tags: ["web components", "JavaScript", "frontend"]
path: "/blog/web-components"
date: "2017-02-11"
---
Back in 2015, I was in the midst of learning my first front-end framework -- AngularJS. The way I thought of it was that I was building my own HTML tags with custom features. Of course, that wasn't what was really happening, but it helped lower the learning curve.

Now, you can actually build your own HTML tags using web components! They are still an experimental feature -- they work in Chrome and Opera, can be enabled in FireFox, but they are still unimplemented in Safari and Edge. Once they fully roll out, they will be an even more awesome tool for building reusable components in purely vanilla JavaScript -- no library or framework needed!

## Learning Process
I had a lot of difficulty finding articles and examples on web components written in Vanilla JS. There are a bunch of examples and articles on Polymer, which is a framework for writing web components that includes polyfills for browsers that don't support web components yet. The framework sounds awesome, and I may try working with it in the future, but I wanted to use just vanilla JavaScript for this particular project.

I ended up mostly using the [MDN](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) documentation on the Shadow DOM in order to build my project. I also looked through CodePen and the WebComponents site, though I didn't find too much on either that was similar to what I wanted to build.

I also really liked [Joseph Moore's article on web components which came out while I was working on this project](https://dev.to/thatjoemoore/bringing-order-to-web-design-chaos--3fhb)! It covered some of the benefits of using web components:they work with all frameworks and they are simple to implement and understand since they just use vanilla JavaScript. 

## Final Project

On a lot of my projects, I use a similar design scheme for both personal branding and to make it so that I don't have to come up with a new design! In particular, I use a heading where each letter is a different color and has a falling animation on it. My personal site [alispit.tel](https://www.alispit.tel) is a pretty good example of this! I also have that text on my resume, conference slides, and I have plans to use it for other sites in the near future as well! The catch with it is that CSS doesn't allow you to target individual characters -- other than the first one. Therefore, each letter has to be wrapped in a `span`. This can get pretty painful to write, so I decided this was the perfect place to use a webcomponent!

![display of the rainbow letters](https://thepracticaldev.s3.amazonaws.com/i/kbrljpvky5xxb80xyyk3.png)

Since I had difficulty finding articles on people writing web components, I'm going to go pretty in depth with the code here. 

First, the HTML code to get the web component to render looks like this:

```html
  <rainbow-text text="hello world" font-size="100"></rainbow-text>
```
The web component is called `rainbow-text` and it has two attributes: the text, which will be what the component renders, and the font size. You can also use `slots` and `templates` to insert content; however, in my use case, they would have added additional overhead. I wanted to input text and then output a series of HTML elements with the text separated by a character, so the easiest way was to pass in the text via an attribute -- especially with the Shadow DOM.

So, what is the Shadow DOM? It actually isn't new and it isn't specific to web components. The shadow DOM introduces a subtree of DOM elements with its own scope. It also allows us to hide child elements. For example, a `video` element actually is a collection of HTML elements; however, when we create one and inspect it, we only see the `video` tag! The coolest part of the shadow DOM, for me, was that the styling was scoped! If I add a style on my document that, for example, modifies all `div`s, that style won't affect any element inside the shadow DOM. Inversely, styles inside the shadow DOM won't affect elements on the outer document's DOM. This is one of my favorite features of Vue, so I was super excited that I could implement something similar without a framework!

Let's now move on to JavaScript code which implements the custom element. First, you write a JavaScript class that extends the built-in `HTMLElement` class. I used an ES6 class, but you could also use the older OOP syntax for JavaScript if you wanted. I really enjoy using ES6 classes, especially since I am so used to them from React! The syntax felt familiar and simple. 

The first thing that I did was write the `connectedCallback` lifecycle method. This is called automatically when the element is rendered -- similar to `componentDidMount` in React. You could also use a `constructor` similar to any other ES6 class; however, I didn't really have a need for one since I wasn't setting any default values or anything.

Inside the `connectedCallback`, I first instantiated the shadow DOM for the element by calling `this.createShadowRoot()`. Now, the `rainbow-text` element is the root of its own shadow DOM, so it's child elements will be hidden and have their own scope for styling and external JavaScript mutations. Then, I set attributes within the class from the HTML attributes being passed in. Within the class, you can think of `this` referring to the `rainbow-text` element. Instead of running `document.querySelector('rainbow-text').getAttribute('text')`,  you can just run `this.getAttribute('text')` to get the `text` attribute from the element.
  
```js
class RainbowText extends HTMLElement {
  connectedCallback () {
    this.createShadowRoot()
    this.text = this.getAttribute('text')
    this.size = this.getAttribute('font-size')
    this.render()
  }
```

`render` is a method that I wrote, that is called in the `connectedCallback`. You can also use the `disconnectedCallback` and the `attributeChangedCallback` lifecycle methods if they would be helpful in your code! I just separated it out in order to adhere to Sandi Metz's rules which I adhere to pretty religiously! The one thing in this method that is different from normal vanilla DOM manipulation is that I append the elements that I create to the `shadowRoot` instead of the `document` or to the element directly! This just attaches the element to the shadow DOM instead of the root DOM of the document.

```js
  render () {
    const div = document.createElement('div')
    div.classList.add('header')
    this.shadowRoot.appendChild(div)
    this.addSpans(div)
    this.addStyle()
  }
```

I then added the individual spans for each letter to the DOM, this is essentially identical to vanilla JavaScript code:
```js
  addSpanEventListeners (span) {
    span.addEventListener('mouseover', () => { span.classList.add('hovered') })
    span.addEventListener('animationend', () => { span.classList.remove('hovered') })
  }

  createSpan (letter) {
    const span = document.createElement('span')
    span.classList.add('letter')
    span.innerHTML = letter
    this.addSpanEventListeners(span)
    return span
  }

  addSpans (div) {
    [...this.text].forEach(letter => {
      let span = this.createSpan(letter)
      div.appendChild(span)
    })
  }
```

Finally, I added the styling to the shadow DOM:
```js
  addStyle () {
    const styleTag = document.createElement('style')
    styleTag.textContent = getStyle(this.size)
    this.shadowRoot.appendChild(styleTag)
  }
```
This method adds a `style` tag to the shadow DOM to modify the elements within it. I used a function to plug in the font-size of the header to a template literal that contained all of the CSS.

After writing the component, I had to register my new element:

```js
try {
  customElements.define('rainbow-text', RainbowText)
} catch (err) {
  const h3 = document.createElement('h3')
  h3.innerHTML = "This site uses webcomponents which don't work in all browsers! Try this site in a browser that supports them!"
  document.body.appendChild(h3)
}
```
I also added a warning for users on non-webcomponent friendly browsers!

Here's how the element ended up showing up in the console:
![](https://thepracticaldev.s3.amazonaws.com/i/4umhrrmgbynsbmq3jgmz.png)


## Next Steps
I enjoyed working with web components! The idea of being able to create reusable components without a framework is awesome. The one I built will be really helpful for me since I use the multi-colored name so often. I will just include the `script` in other documents. I won't convert my personal site to using the component, though, since I want that to be supported across browsers. There also isn't a clear system for state or data management, which makes sense given the goal for web components; however, it does make other frontend frameworks still necessary. I think I will keep using frontend frameworks for these reasons; however, once they are fully supported, they will be awesome to use!

[Full Code](https://github.com/aspittel/rainbow-word-webcomponent/blob/master/script.js)
[Example Use](https://www.alispit.tel/) - (doesn't use webcomponents)

**Part of my [On Learning New Things](https://medium.com/on-learning-new-things/learning-new-things-f4db7f16724) Series**
