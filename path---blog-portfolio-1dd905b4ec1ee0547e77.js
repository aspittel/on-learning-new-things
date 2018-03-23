webpackJsonp([0x9d8712030a73],{369:function(n,a){n.exports={data:{markdownRemark:{html:'<p>This week, instead of learning one new thing, I got a little bit obsessed with re-writing my <a href="http://aspittel.github.io/">portfolio site</a>. I decided to write a blog post about that process and the things I learned along the way instead of the typical article on one technology. I used three tools that I haven’t done a ton with in the past during this project: P5.js, CSS animations, and FlexBox.</p>\n<p>Earlier this week, I noticed an animation that I liked on the Creative Coding Club’s <a href="http://creativecoding.club/">website</a>. The “Creative Coding Club” title moves dynamically on hover. I fired up a Code Pen and started trying to recreate it. I ended up with a pretty different animation where the letters fell and then returned to their original place after a few seconds. I originally had a CSS animation that ran on hover; however, the animation ended after you moved your mouse. I had to use JavaScript to add a class dynamically that would be removed when the animation finished.</p>\n<p>This was my first time using keyframes and CSS animations, and it was surprisingly easy! The relevant code looks like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css"><span class="token atrule"><span class="token rule">@keyframes</span> myanimation</span> <span class="token punctuation">{</span>\n    <span class="token selector">0%</span> <span class="token punctuation">{</span>\n      <span class="token property">top</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token selector">50%</span> <span class="token punctuation">{</span>\n      <span class="token property">top</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token selector">100%</span> <span class="token punctuation">{</span>\n      <span class="token property">top</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n \n<span class="token selector">.hovered</span> <span class="token punctuation">{</span>\n  <span class="token property">animation</span><span class="token punctuation">:</span> myanimation 3s<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">Array<span class="token punctuation">.</span><span class="token keyword">from</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">\'letter\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>letter <span class="token operator">=></span> <span class="token punctuation">{</span>\n  letter<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"mouseover"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    letter<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"hovered"</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  letter<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"animationend"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    letter<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">"hovered"</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>After tweaking the CSS a bunch, I ended up with <a href="https://codepen.io/aspittel/pen/xPgaGJ">a mockup Codepen</a> of my name. I ended up really liking the animation, and I decided to run with it and redesign the rest of my site to match the rainbow name! I am not a trained designer by any means, and — though I probably should — I don’t usually wireframe my sites ahead of time or use any design software. I add a feature that I envision and then tweak it until it looks good on the page.</p>\n<h4>Mockup Codepen</h4>\n<p data-height="265" data-theme-id="0" data-slug-hash="xPgaGJ" data-default-tab="result" data-user="aspittel" data-embed-version="2" data-pen-title="Animated Name" class="codepen">See the Pen <a href="https://codepen.io/aspittel/pen/xPgaGJ/">Animated Name</a> by Ali Spittel (<a href="https://codepen.io/aspittel">@aspittel</a>) on <a href="https://codepen.io">CodePen</a>.</p>\n<script async src="https://static.codepen.io/assets/embed/ei.js"></script>\n<p>I also decided to use vanilla JavaScript (so no framework), my own CSS (again no framework).</p>\n<p>I had also recently seen a couple cool Code Pens using p5.js. Two of my favorites were an <a href="https://codepen.io/dissimulate/pen/fhjvk">interactive physics playground</a> and a <a href="https://codepen.io/halvves/pen/rrxakW">Wikipedia change visualizer</a>. I decided that I wanted to try and learn the library for this project. I just looked through the basic <a href="https://p5js.org/examples/#demos">demos</a> on the P5 site. I thought that it could be fun to draw a bunch of random shapes based on user input. Doing so was a pretty easy extension from the demos on the website.</p>\n<h4>Interactive Physics Playground</h4>\n<p data-height="406" data-theme-id="0" data-slug-hash="fhjvk" data-default-tab="result" data-user="dissimulate" data-embed-version="2" data-pen-title="Physics Playground" class="codepen">See the Pen <a href="https://codepen.io/dissimulate/pen/fhjvk/">Physics Playground</a> by dissimulate (<a href="https://codepen.io/dissimulate">@dissimulate</a>) on <a href="https://codepen.io">CodePen</a>.</p>\n<script async src="https://static.codepen.io/assets/embed/ei.js"></script>\n<h4>Wikipedia Change Visualizer</h4>\n<p data-height="265" data-theme-id="0" data-slug-hash="rrxakW" data-default-tab="result" data-user="halvves" data-embed-version="2" data-pen-title="Wikipedia Audiovisualizer (p5.js & timbre.js)" class="codepen">See the Pen <a href="https://codepen.io/halvves/pen/rrxakW/">Wikipedia Audiovisualizer (p5.js & timbre.js)</a> by halvves (<a href="https://codepen.io/halvves">@halvves</a>) on <a href="https://codepen.io">CodePen</a>.</p>\n<script async src="https://static.codepen.io/assets/embed/ei.js"></script>\n<h4>My Random Shapes</h4>\n<p><img src="https://thepracticaldev.s3.amazonaws.com/i/drh87mia4nazv0516m7a.png"></p>\n<p>The P5 JavaScript code looked like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> numShapes <span class="token operator">=</span> <span class="token number">3</span>\n<span class="token keyword">const</span> maxSize <span class="token operator">=</span> <span class="token number">200</span>\n\n<span class="token keyword">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token keyword">function</span> <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  colors <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token function">color</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">143</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token function">color</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">171</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token function">color</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">193</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token function">color</span><span class="token punctuation">(</span><span class="token number">76</span><span class="token punctuation">,</span> <span class="token number">175</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token function">color</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">188</span><span class="token punctuation">,</span> <span class="token number">212</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token function">color</span><span class="token punctuation">(</span><span class="token number">171</span><span class="token punctuation">,</span> <span class="token number">71</span><span class="token punctuation">,</span> <span class="token number">188</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token function">color</span><span class="token punctuation">(</span><span class="token number">239</span><span class="token punctuation">,</span> <span class="token number">83</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span>\n  <span class="token punctuation">]</span>\n  <span class="token function">createCanvas</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>innerWidth<span class="token punctuation">,</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>offsetHeight<span class="token punctuation">)</span>\n  <span class="token function">noStroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">randomNumber</span> <span class="token punctuation">(</span>size<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> size<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">randomChoice</span>  <span class="token punctuation">(</span>choices<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token function">randomNumber</span><span class="token punctuation">(</span>choices<span class="token punctuation">.</span>length<span class="token punctuation">)</span>\n  <span class="token keyword">return</span> choices<span class="token punctuation">[</span>index<span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">mouseClicked</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> sideLength <span class="token operator">=</span> <span class="token function">randomNumber</span><span class="token punctuation">(</span>maxSize<span class="token punctuation">)</span>\n  <span class="token function">fill</span><span class="token punctuation">(</span><span class="token function">randomChoice</span><span class="token punctuation">(</span>colors<span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token keyword">let</span> shapeType <span class="token operator">=</span> <span class="token function">randomNumber</span><span class="token punctuation">(</span>numShapes<span class="token punctuation">)</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>shapeType <span class="token operator">%</span> numShapes <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">ellipse</span><span class="token punctuation">(</span>mouseX<span class="token punctuation">,</span> mouseY<span class="token punctuation">,</span> sideLength<span class="token punctuation">,</span> sideLength<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>shapeType <span class="token operator">%</span> numShapes <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">rect</span><span class="token punctuation">(</span>mouseX<span class="token punctuation">,</span> mouseY<span class="token punctuation">,</span> sideLength<span class="token punctuation">,</span> sideLength<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token function">triangle</span><span class="token punctuation">(</span>mouseX<span class="token punctuation">,</span> mouseY<span class="token punctuation">,</span> mouseX <span class="token operator">+</span> sideLength<span class="token punctuation">,</span> mouseY<span class="token punctuation">,</span> \n      mouseX <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">.5</span> <span class="token operator">*</span> sideLength<span class="token punctuation">)</span><span class="token punctuation">,</span> mouseY <span class="token operator">-</span> sideLength<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>The setup function runs as soon as the file is loaded — it initializes an HTML canvas. The mouseClicked function runs when the user clicks anywhere on the canvas. It runs a couple random number generations to get the size, color, and shape. I found it pretty straightforward to work with, and I would do so again in the future.</p>\n<p>From there I had to move down the page and add sections for about, portfolio, and contact me. I’ve recently been working on my FlexBox skills since I used to use CSS libraries like Bootstrap and Materialize with builtin grids for most of my projects. I really enjoyed <a href="http://flexboxfroggy.com/">FlexBox Froggy</a> for learning it — and <a href="http://cssgridgarden.com/">CSS Grid Garden</a> if you want to get ahead on CSS Grid! I used it for gridding out the two part bio section with my picture and my bio, and for the cards that display my different portfolio items. I still think I have some bugs in Safari and on really big screens, but I think I’m close to getting it all of the way there!</p>\n<p>Overall, I had a lot of fun working on this full site rewrite and my traffic has increased pretty substantially (21,416.7% according to Google Analytics!). Of course, a lot of that can be attributed to social media use after the rewrite, but people have been really nice about how it looks!</p>\n<p>I’ve been taking a more minimalistic approach to using libraries, which reinforces knowing the standard JavaScript and CSS libraries. I do think React or Vue would have made some of the HTML more modular — the final HTML code is over 400 lines!</p>\n<p>I really like how fun and colorful the design is, even though it may break the three color design rule! I think it represents my personality well, and it showcases my work. If you want to check out the site, it is <a href="https://aspittel.github.io">aspittel.github.io</a> and the code is on my <a href="https://github.com/aspittel/aspittel.github.io/tree/master">GitHub</a>!</p>\n<p><strong>Part of my <a href="https://medium.com/on-learning-new-things/learning-new-things-f4db7f16724">On Learning New Things</a> Series</strong></p>',frontmatter:{date:"December 01, 2017",path:"/blog/portfolio",title:"How I Re-Wrote my Portfolio Site"}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-portfolio-1dd905b4ec1ee0547e77.js.map