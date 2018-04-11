webpackJsonp([0x888a03c99e5d],{366:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Earlier this week, one of my co-workers found a <a href="https://codepen.io/techxastrish/pen/eEyYNP?editors=1100">single div all CSS image of Admiral Grace Hopper by Trish Katz</a> on CodePen. It seemed like magic — I’ve written thousands and thousands of lines of CSS for projects I’ve worked on but this was on a different level! I immediately wanted to learn more.</p>\n<h4>Single Div Grace Hopper</h4>\n<iframe height=\'457\' scrolling=\'no\' title=\'Single Div Grace Hopper\' src=\'//codepen.io/techxastrish/embed/eEyYNP/?height=457&theme-id=0&default-tab=css,result&embed-version=2\' frameborder=\'no\' allowtransparency=\'true\' allowfullscreen=\'true\' style=\'width: 100%;\'>See the Pen <a href=\'https://codepen.io/techxastrish/pen/eEyYNP/\'>Single Div Grace Hopper</a> by Trish Katz (<a href=\'https://codepen.io/techxastrish\'>@techxastrish</a>) on <a href=\'https://codepen.io\'>CodePen</a>.\n</iframe>\n<p>I am not an artist in any way, shape, or form. I manage to make my sites look okay by keeping them as simple as possible and relying heavily on material design rules. Drawing things in CSS seemed like a challenge I couldn’t turn down!</p>\n<h2>The Process</h2>\n<p>I started doing research on CSS art and found some great resources such as: <a href="https://medium.com/@sashatran">Sasha Tran</a>, <a href="https://medium.com/coding-artist/a-beginners-guide-to-pure-css-images-ef9a5d069dd2">Coding Artist</a>, and the <a href="https://twitter.com/hashtag/purecss?lang=en">#PureCSS</a> hashtag on Twitter. Through these resources, I ended up finding a tutorial called “<a href="http://coding-artist.teachable.com/">How to Make Pure CSS Images to Progress With Design-Focused Frontend Development</a>” by the Coding Artist. He went through how to create an adorable <a href="https://codepen.io/mikemang/pen/oYMePj">Koala</a> cartoon using just CSS.</p>\n<p>I found the way that he broke down the different components of the Koala really interesting. It turns out, CSS art is created by filling in, resizing, and reshaping divs. A div is an HTML element that doesn’t by default do anything — it is mostly used for grouping elements and applying styles. Since they don’t have any default behaviors we can easily add styles to them! Each different shape on the koala is a div that has a CSS selector on it. I found that a lot easier than the single div art I had seen previously!</p>\n<p>From there, I decided to play around with the Koala CodePen and modify it. With a lot of trial and error, I ended up with this <a href="https://codepen.io/aspittel/pen/aLxrBq">cartoon portrait of my dog</a>. Again, I am <em>so</em> not an artist.</p>\n<h4>Cartoon Dog Portrait</h4>\n<iframe height=\'495\' scrolling=\'no\' title=\'Black Lab CSS Art\' src=\'//codepen.io/aspittel/embed/aLxrBq/?height=495&theme-id=0&default-tab=result&embed-version=2\' frameborder=\'no\' allowtransparency=\'true\' allowfullscreen=\'true\' style=\'width: 100%;\'>See the Pen <a href=\'https://codepen.io/aspittel/pen/aLxrBq/\'>Black Lab CSS Art</a> by Ali Spittel (<a href=\'https://codepen.io/aspittel\'>@aspittel</a>) on <a href=\'https://codepen.io\'>CodePen</a>.\n</iframe>\n<p>Below, I included a snippet of what some of the code looks like and what it does. All of the code below also applies to normal CSS — CSS art is a great place to practice your normal CSS skills! For example, the code for the dog\'s head is below:</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css"><span class="token selector">.head</span> <span class="token punctuation">{</span>\n    <span class="token property">background-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span> <span class="token comment">/* the color of the div black */</span>\n    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span> <span class="token comment">/* hard places the div instead of allowing responsiveness or relating it to other divs */</span>\n    <span class="token property">top</span><span class="token punctuation">:</span> 16.5%<span class="token punctuation">;</span> <span class="token comment">/* where the top of the div will be placed */</span>\n    <span class="token property">left</span><span class="token punctuation">:</span> 25%<span class="token punctuation">;</span> <span class="token comment">/* where the div will start horizontally */</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span> <span class="token comment">/* what percentage of the parent div the div will take up horizontally */</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 67%<span class="token punctuation">;</span> <span class="token comment">/* what percentage of the parent div the div will take up vertically*/</span>\n    <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span> <span class="token comment">/* makes the div round! */</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>It\'s just normal CSS being used for art instead of a website layout!</p>\n<p>One of the most helpful tools I found was <a href="https://bennettfeely.com/clippy/">Clippy</a> which allows you to draw out CSS clip paths and generate the code for the shape you want to draw! CSS allows circular and square shapes by default, but when you want to use triangles or other non-standard shapes it gets a bit trickier. We have to calculate the coordinates of the paths we want to draw. Since this path math can get pretty dicey pretty fast, I really enjoyed using Clippy to make that process easier.</p>\n<h2>The Final Project</h2>\n<p>Once I had the working dog, I decided that I wanted to write something I could use outside of a CodePen, so I built a webpage with a floral pattern.</p>\n<p>I started out by using CodePen to draw out the different flower shapes that I wanted to include. I ended up using three: one with long ovals for petals (the white flowers), one with teardrop shaped petals (the pink ones), and then one made up of circles (the yellow ones). By this point, I was fairly comfortable creating shapes and editing them using CSS.</p>\n<p>Somewhere along the way, I decided that it was getting really cumbersome to draw out all of the flowers manually, and I decided to use React to dynamically create them — I totally cheated! I still did 90% of the work with CSS, but I got annoyed by having so many divs and instead wrote some of them iteratively using React. For context, each one of the white flowers is made up of 21 divs — 20 petals and one for the center. I wrote code that generated those petals and their coordinates!</p>\n<h4>Image of the final project</h4>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*IFmwCagEmlU68El8ea40Rw.png"></p>\n<p>The final code is <a href="https://github.com/aspittel/css-flower-art">here</a> and the page it generated is deployed <a href="https://aspittel.github.io/css-flower-art/">here</a>. I also ended up using it as my desktop background!</p>\n<h2>Next Steps</h2>\n<p>Learning CSS art was really fun, and I think that the concepts from it will definitely everyday CSS become stronger! I am still far from an artist, but CSS art could be a good artistic outlet for me moving forwards. Overall, I had a lot of fun with this project and I really like the output!</p>\n<p><strong>Part of my <a href="https://medium.com/on-learning-new-things/learning-new-things-f4db7f16724">On Learning New Things</a> series!</strong></p>',frontmatter:{date:"November 25, 2017",path:"/blog/css-art",title:"Learning CSS Through Creating Art"}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-css-art-6d82e128a9bd672a04a2.js.map