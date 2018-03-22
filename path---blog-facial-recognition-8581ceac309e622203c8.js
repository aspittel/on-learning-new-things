webpackJsonp([0xc349d4e484d9],{365:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Earlier this week, I saw <a href="https://dev.to/unqlite_db/progamming-snapchat-like-filters-cod">a really cool article</a> about how to create Snapchat like filters in Python. I was curious whether similar opensource technology existed for the frontend. I found a couple resources:</p>\n<ul>\n<li><a href="https://trackingjs.com/">Tracking.js</a></li>\n<li><a href="https://github.com/auduno/clmtrackr">clmtrackr</a></li>\n<li><a href="https://github.com/liuliu/ccv">ccv</a></li>\n<li><a href="https://github.com/auduno/headtrackr">headtrackr</a></li>\n</ul>\n<p>I was really excited that this data-sciencey technology existed on the front-end instead of just in more traditional data science languages like Python or R.</p>\n<p>I thought all of the above projects were very interesting, and they all had relatively similar star-level\'s on GitHub. I decided to use Tracking.js because the documentation was really good, and there were a bunch of examples which, for me is the easiest way to learn! I do wish there was better documentation on what was going on behind the scenes with this library -- I\'m not sure what statistics are going on or how the tool works past implementation.</p>\n<p>That being said, it was very easy to implement. I could easily extend the <a href="https://github.com/auduno/headtrackr">face camera example</a> for the purposes of the app I ended up building!</p>\n<h2>The Learning Process</h2>\n<p>Since Tracking.js is a smaller library with less of a community behind it than I normally end up using, my learning was pretty limited to looking at the examples on their website. I did search Codepen, but the few pens on there seemed to be incomplete or very similar to the examples.</p>\n<h2>The Final Project</h2>\n<p>Warning: I definitely learned throughout this project that webcam selfies are super awkward! I have no idea how I had a webcam selfie as my profile pic on Facebook back in high school!</p>\n<p>I started off by copying the <a href="https://github.com/auduno/headtrackr">face camera example</a> on the tracking.js site. I ended up getting it working locally, with a few tweaks, and with downloading the tracking library locally.</p>\n<p><img src="https://thepracticaldev.s3.amazonaws.com/i/a72o42eg3iok91f0rncv.png" alt="the example code"></p>\n<p>Then, I found a couple PNG\'s online to layer on top to be the filters. I just used Google Image search and then copied them locally. I then implemented a simple algorithm for adding the filter to the face -- I just hard-coded the dimensions based on where the user\'s face was. It ended up looking like this:</p>\n<p><img src="https://thepracticaldev.s3.amazonaws.com/i/lquvj2ouzrtxjuiu64ps.png">\n<img src="https://thepracticaldev.s3.amazonaws.com/i/cc1k91nw1csmyqpmnpg4.png"></p>\n<p>I also tried to implement the dog face that Snapchat has, but the math turned out to be too specific to the person\'s face for something as quick as this project!</p>\n<p>I then generalized the math and added the ability for the user to switch between the filters. The math was relatively easy -- the event listener that fires when the person moves on the screen returns an array of the coordinates of the faces within view. Then I would draw the filter on top using my improved coordinates. The key code looked like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">    context<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>img<span class="token punctuation">,</span> rect<span class="token punctuation">.</span>x <span class="token operator">+</span> <span class="token punctuation">(</span>filterX <span class="token operator">*</span> rect<span class="token punctuation">.</span>width<span class="token punctuation">)</span><span class="token punctuation">,</span>\n      rect<span class="token punctuation">.</span>y <span class="token operator">+</span> <span class="token punctuation">(</span>filterY <span class="token operator">*</span> rect<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">,</span>\n      rect<span class="token punctuation">.</span>width <span class="token operator">*</span> filterWidth<span class="token punctuation">,</span>\n      rect<span class="token punctuation">.</span>height <span class="token operator">*</span> filterHeight\n    <span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>After that, I polished up the CSS, which was really hard! The way this ended up working was layering a HTML Canvas over a video element, so getting the grid system to align everything was really tricky. I ended up plugging in CSS Grid for the first time to see if that would work. It ended up working, but the way I did it felt hacky. I will have to keep looking at CSS Grid in the future!</p>\n<p>The app ended up looking like this:\n<img src="https://thepracticaldev.s3.amazonaws.com/i/fasbgn8vuw8r3naypvvo.png">\n<img src="https://thepracticaldev.s3.amazonaws.com/i/cg3v790nwbjf0ekzofcq.png"></p>\n<p>My final output seems okay, it is by no means perfect, but to get it better I would probably have to create my own library or my own filters. I also really struggled to get more complex filters to work. I would have had to break them up into their parts -- like each ear and the nose -- and then figure out the math to add these to each face. I seemed to have issues linking the different facial features back together if I wanted to track the eyes or mouth separately, rather than the face as a whole. </p>\n<p>If I wanted to put more into this project, I would probably have also tried to add some smoothing so that the filter jumps less when a person moved a tiny bit. Overall, the project probably could have been better but I achieved what I wanted to in order to learn the library.</p>\n<h2>Next Steps</h2>\n<p>Tracking.js is really cool and well documented! I think its a great library for doing something simple like this app. If I were to do this for a job or something larger, I would probably have to improve a lot of the functionality in the app. I also found the webcam API to be shockingly difficult to use -- I struggled to find examples of styling and picture taking online. I would also like to look into it more in the future. Overall, I had fun with this! It isn\'t perfect, but it was a good quick project.</p>\n<p><a href="https://github.com/aspittel/tracking/">Code</a>\n<a href="https://aspittel.github.io/tracking/">App</a></p>\n<p><strong>Part of my <a href="https://medium.com/on-learning-new-things/learning-new-things-f4db7f16724">On Learning New Things</a> Series</strong></p>',frontmatter:{date:"December 06, 2017",path:"/blog/facial-recognition",title:"Facial Recognition in JavaScript using Tracking.js"}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-facial-recognition-8581ceac309e622203c8.js.map