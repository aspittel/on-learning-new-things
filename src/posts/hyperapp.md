---
title: Functional Programming in JavaScript with Hyperapp
tags: ["JavaScript", "frontend"]
path: "/blog/hyperapp"
date: "2018-01-21"
---
I kinda feel like a traitor given my pretty long history with Vue and React, but I think  I have a new go-to frontend framework. Hyperapp is everything that I wanted Elm to be -- it's easy to build code with, highly organized, and state is handled flawlessly. That being said, it's not as production ready as the aforementioned frameworks, but once it is I can see it being huge.

Let's start with zero on building a Hyperapp app -- with tools that are still emerging, I usually go more in-depth. I'll do the same here for Hyperapp.

## Getting Started

A few weeks ago, I saw a few articles about Hyperapp when they released version 1.0 and surpassed 10,000 stars on GitHub. I looked briefly at the counter "hello world" in their documentation. I really liked how clean and simple it looked, and I wanted to try it out!

```js
const { h, app } = hyperapp

const state = {
  count: 0
}

const actions = {
  down: value => state => ({ count: state.count - value }),
  up: value => state => ({ count: state.count + value })
}

const view = (state, actions) =>
  h("div", {}, [
    h("h1", {}, state.count),
    h("button", { onclick: () => actions.down(1) }, "–"),
    h("button", { onclick: () => actions.up(1) }, "+")
  ])

window.main = app(state, actions, view, document.body)
```

You can also use JSX instead of calling the `h` function to create elements. That's what I did since I am used to it from React! I looked through the examples on [Hyperapp's Codepen](https://codepen.io/hyperapp/). I ended up using a [boilerplate](https://github.com/selfup/hyperapp-one) so that I didn't have to setup webpack for transpiling JSX or have to deal with the setup. It was awesome, I didn't have any issues using it and it came with a file structure that I enjoyed using. 

![The File Structure I Used](https://thepracticaldev.s3.amazonaws.com/i/eac1hds9a1f4s87d4qw6.png)

Hyperapp uses an architecture inspired by Elm's -- it has views, models, and updates. It also follows the functional philosophy, similar to Elm. That means that state is immutable and the actions don't have side effects. The state management felt more like Redux than standard React, since state is centralized rather than component specific. Also, you do have to use [thunks](https://en.wikipedia.org/wiki/Thunk) in order to build impure functions. The architecture and setup was smooth to work with and I didn't have many problems with it at all.

Since I've worked with Elm, React, Redux, Vue and Vuex in the past, I recognized the patterns and felt fine moving on to the final project after reading the documentation (which is minimal) and looking at the code examples.

## The Final Project
I wanted to build something that would pull from an API -- which can be a relatively messy process in Redux. I didn't have one in mind, so I browsed [this list](https://github.com/abhishekbanthia/Public-APIs) to try and find one. I ended up using the [FavQs API](https://favqs.com/api) -- I had an idea to make a rotating list of quotes with a search available for the tags on different quotes. This would allow me to interact with the state quite a bit.

The first code that I wrote was the model for the state. I set initial properties for the attributes I needed in my project:

```js
export default {
  quotes: [],
  term: '',
  index: 0
}
```
Here, something like TypeScript or Flow would have been nice to enforce typing. I'm sure they could be integrated easily enough into a hyperapp project.

The quotes were an array of the quotes coming back from the API, the term was the search term if the user specified that, and then the index was the current index of the quote the user was looking at.

I had a config file where I defined some constants to use throughout:
```js
export const API_URL = 'https://favqs.com/api/quotes/'
export const COLORS = ['#DBEBFF', '#FFBBDD', '#e6f9ff', '#BBBBFF', '#F7FFFD', '#fff8e1']
export const FONT_COLORS = ['#62D0FF', '#FF62B0', '#33ccff', '#5757FF', '#03EBA6', '#ffb300']
```

I also made a services file that held Axios (a minimalist AJAX library) requests for my searches:
```js
import axios from 'axios'
import { API_URL } from './constants'

const getRequest = url => {
  return axios.get(url, {
    headers: {'Authorization': `Token token="XXXXXXXX"`}
  }).catch(
    err => console.log(err)
  )
}

export default {
  getAll: _ => getRequest(API_URL),
  getQuery: query => getRequest(API_URL + `?filter=${query}&type=tag`)
}
```
The above files are framework agnostic, but I wanted to include them for context.

Potentially the most crucial file held the actions:
```js
import request from '../config/request'

export default {
  getQuotes: quotes => (state, actions) => request.getAll().then(
    actions.setQuotes),
  submitSearch: quotes => (state, actions) => request.getQuery(
    state.term).then(actions.setQuotes),
  setQuotes: res => ({ quotes: res.data.quotes.filter(
    quote => quote.body && quote.body.length < 150) }),
  updateSearch: ({ term }) => ({ term }),
  next: e => ({ index, quotes }) => ({ index: index + 1 }),
  prev: e => ({ index, quotes }) => ({ index: index - 1 })
}
```
I used thunks for `getQuotes` and `submitSearch` -- meaning that I just actions a function from a function rather than a value. This allows for impure functions within the nested function, especially since the data from APIs is less predictable than functional programming requires. Since the Axios requests take a bit to execute, the state isn't actually updated until the `setQuotes` method is called after the data is fetched from the API. The other actions are relatively straight forward! The event handlers do take the event first and then the current state afterwards -- I did find this a bit "magic-y" but overall the experience with the actions was very smooth.

Finally, I created the views. The main view looked like this:
```jsx
import { h, app } from 'hyperapp'
import Search from './Search'
import Quote from './Quote'
import { COLORS, FONT_COLORS } from '../config/constants'

const quote = (quotes, index) => quotes[index]
const color = index => COLORS[index % COLORS.length]
const fontColor = index => FONT_COLORS[index % FONT_COLORS.length]

export default ({ quotes, index }, { getQuotes, updateSearch, submitSearch, next, prev }) =>
  <div
    oncreate={getQuotes}
    className={ quotes ? 'body' : 'body hidden' }
    style={{ 'backgroundColor': color(index), 'color': fontColor(index) }}
  >
    <div className='centered-content'>
      <div className='container'>
        { index > 0 &&
        <div
          onclick={prev}
          className='direction left'
          style={{ 'color': fontColor(index) }}>
            &lt;
        </div> }
        { quotes.length > 0 && <Quote quote={quote(quotes, index)} /> }
        { index < quotes.length - 1 &&
        <div
          onclick={next}
          className='direction right'
          style={{ 'color': fontColor(index) }}>
            &gt;
        </div> }
        <Search
          updateSearch={updateSearch}
          submitSearch={submitSearch}
        />
      </div>
    </div>
  </div>
```
It looks essentially identical to a functional component in React! The event handlers are lower case, but otherwise the JSX is the same. Lifecycle methods are also a little bit different. I would normally use `componentDidMount` method in React to make an API request, but here I used the `oncreate` attribute instead. They do essentially the same thing, but the syntax is different. I also didn't see documentation for subscriptions, which are important in Elm. They allow you to use Websockets and add global event listeners. Some of the GitHub issues mentioned them, though, so I would assume they are implemented but not in the documentation yet.

I also had two "subcomponents", the quote one was very simple:
```jsx
import { h, app } from 'hyperapp'

export default ({ quote }) =>
  <div className='quote'>
    <h1>{quote.body}</h1>
    <h4>{quote.author}</h4>
  </div>
```

The search one was as well:

```jsx
import { h, app } from 'hyperapp'

export default ({ updateSearch, submitSearch }) =>
  <div className='search'>
    <input
      onkeyup={
        e => {
          e.keyCode === 13 ? submitSearch() : updateSearch({ term: e.target.value })
        }
      }
      placeholder='Search quote tags...'
    />
  </div>
```

Finally, the `index.js` combined the elements from the other files so that state could be used within the actions and the views.

```js
import { app } from 'hyperapp'
import actions from './actions'
import state from './state'
import view from './components/View'

app(state, actions, view, document.querySelector('.hyperapp-root'))
```

This binding is essentially identical to how Elm combines the elements!

I liked splitting my code into multiple files, and I thought that it was really scalable. I could definitely see myself building something bigger with HyperApp in the future.

![A Picture of the App](https://thepracticaldev.s3.amazonaws.com/i/ps4evuwa0rhlaxbvpm2n.png)

## Next Steps

Again, Hyperapp is one of my favorite tools I've learned recently -- next to maybe Golang. I found it to be a nearly perfect marriage of tools that I've used in the past. It is also a tiny library and is super efficient, which is exciting especially in comparison to Angular, which I learned last week! Its API is so minimalistic and it enforces functional programming so well. I would definitely recommend learning it as an onramp to React with Redux. I would 100% use HyperApp again, I found it straightforward and I really liked the elegance of the code. I do hope that the community keeps expanding, the documentation improves, and a Redux/Elm like rewind feature is implemented. Otherwise, I had an excellent experience with Hyperapp and I am already planning on using it again!

[App](https://www.alispit.tel/hyperapp-quote-app/)
[Code](https://github.com/aspittel/hyperapp-quote-app)

**Part of my [On Learning New Things](https://medium.com/on-learning-new-things/learning-new-things-f4db7f16724) Series**

Other Similar Articles:
* [Learning Elm](https://dev.to/aspittel/how-i-finally-built-an-app-in-elm-a80)
* [Learning Angular5](https://dev.to/aspittel/learning-angular-5-as-a-react-and-vue-developer-5dp3)
