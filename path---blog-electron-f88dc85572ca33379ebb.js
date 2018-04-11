webpackJsonp([0xfc54be5496eb],{367:function(n,s){n.exports={data:{markdownRemark:{html:'<p>Ever since it came out, I\'ve been interested in Electron because it allows you to write desktop apps in JavaScript. This allows you to use all the JavaScript packages you are used to using! Plus, I spend so much of my life using VS Code, I should probably learn the tech behind it, right?</p>\n<h2>Getting Started</h2>\n<p>I started out by installing Electron globally using <code>npm</code>. I then walked through the "Hello World" example on the Electron site. It mostly shows how to launch an instance of an Electron app and how to handle closing windows. I ended up using most of the code in my final project. </p>\n<p>I then did some Googling to see how people separated out their code. I initially didn\'t understand fully that there should be separate code for the creation of the desktop app and then "view" code for the user to look at and interact with. You can use <code>require</code> statements on the view side still in order to include npm packages, though, which is different than normal "client-side" JavaScript. I did look at a few sample projects, but I didn\'t end up using anything other than file structure for my final project.</p>\n<h2>The Final Project</h2>\n<p>I give a lot of talks, and I usually write Markdown notes for those talks. I usually use the Markdown preview within VS Code to look at those notes while I am talking. This can get complicated when I have another VS Code instance with Code on it -- my zoom levels and customizations change per window! I decided that I should make my own Markdown viewer that is customized perfectly for giving talks.</p>\n<p>I started out with the <code>main.js</code> which handles most of the window-creation code. My code was essentially identical to the <a href="https://electronjs.org/docs/tutorial/quick-start">quickstart</a> code on the Electron site. My one change was that I used the size of the user\'s monitor to decide the size of the window.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token punctuation">{</span> width<span class="token punctuation">,</span> height <span class="token punctuation">}</span> <span class="token operator">=</span> electron<span class="token punctuation">.</span>screen<span class="token punctuation">.</span><span class="token function">getPrimaryDisplay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>workAreaSize\nwin <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BrowserWindow</span><span class="token punctuation">(</span><span class="token punctuation">{</span> width<span class="token punctuation">,</span> height<span class="token punctuation">,</span> frame<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Also, in development, I used <a href="https://www.google.com/search?q=electron+hot+reload&#x26;oq=electron+hot+relo&#x26;aqs=chrome.0.0j69i57j0.4754j1j1&#x26;sourceid=chrome&#x26;ie=UTF-8">electron-reload</a>, which was really helpful. By default, you have to restart the Electron instance every time you make a change, which gets pretty annoying pretty fast! This npm package brought in hot reloading for the view side of the code.</p>\n<p>I ended up creating a <code>view</code> folder that contained the view-centric html, css, and js. The html looked really similar to any other html file!</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token doctype">&lt;!DOCTYPE html></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Markdown Reader!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>style.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> \n    <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> \n  <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/github.min.css<span class="token punctuation">"</span></span>\n  <span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>+<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>select-file<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>close<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>x<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>md<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>    \n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>./script.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>The JavaScript file, however, did look a little bit different than a normal client-side one.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'fs\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> marked <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'marked\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> hljs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'highlight.js\'</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> getCurrentWindow<span class="token punctuation">,</span> dialog <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'electron\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>remote\n\n<span class="token keyword">const</span> <span class="token function-variable function">readFile</span> <span class="token operator">=</span> <span class="token punctuation">(</span>file<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> data<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'.md\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token function">marked</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    Array<span class="token punctuation">.</span><span class="token keyword">from</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">\'pre code\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>\n      block <span class="token operator">=></span> hljs<span class="token punctuation">.</span><span class="token function">highlightBlock</span><span class="token punctuation">(</span>block<span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> filters <span class="token operator">=</span> <span class="token punctuation">{</span> filters<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'Markdown\'</span><span class="token punctuation">,</span> extensions<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'md\'</span><span class="token punctuation">,</span> <span class="token string">\'markdown\'</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">openFilePicker</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  dialog<span class="token punctuation">.</span><span class="token function">showOpenDialog</span><span class="token punctuation">(</span>filters<span class="token punctuation">,</span> fileNames <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>fileNames<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">readFile</span><span class="token punctuation">(</span>fileNames<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">close</span> <span class="token operator">=</span> e <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> window <span class="token operator">=</span> <span class="token function">getCurrentWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  window<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\ndocument<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'.close\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> close<span class="token punctuation">)</span>\ndocument<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'.select-file\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> openFilePicker<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>First, I used require statements instead of using script tags in the <code>index.html</code>. Second, Electron has actions that wouldn\'t be used in the browser, like closing a window or opening up the user\'s file dialog. It was easy enough to figure out these actions. <code>dialog.showOpenDialog</code> opened up a file selector, and I used Node\'s <code>fs</code> to then open up that file. I also removed the grey default header from Electron, so I needed my own close button. I did that with the <code>close</code> function in the code above.</p>\n<p>Other than that, I could use the normal Vanilla JavaScript methods to interact with the dom and add event listeners.</p>\n<p>I <strong>really</strong> like the way the app turned out, and I will actually use this app on an almost daily basis. The top looks like the following:</p>\n<p><img src="https://thepracticaldev.s3.amazonaws.com/i/1rsk2o7yho2xtc9dbtw1.png"></p>\n<p>Code snippits use GitHub\'s text editor theme:\n<img src="https://thepracticaldev.s3.amazonaws.com/i/0bygkrnn7hlaq2av9q1t.png"></p>\n<p>I used custom spacing, padding, and fonts to make it most readable for me when presenting!</p>\n<p>I did try to bundle this app to make it a true desktop app, but I didn\'t have much success. I may look further into it, but I tried two libraries and both didn\'t seem to do what I wanted them to. I instead used an alias in my <code>.zshrc</code> to open it up anywhere on my computer. That for me is, honestly, a better option because I don\'t use the finder or Launchpad for opening anything except iTerm when my computer starts up!</p>\n<h2>Next Steps</h2>\n<p>If I were to ever build a desktop app again, I would definitely use Electron. It was easy to use, well documented, and similar to my normal development process. I don\'t necessarily think that I will have many other desktop apps that I want to build, but I enjoyed the process of building this app and would recommend Electron to people wanting to build desktop apps easily!</p>\n<p><a href="https://github.com/aspittel/markdown-viewer">code</a></p>\n<p>Setup instructions:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ <span class="token function">git</span> clone https://github.com/aspittel/markdown-viewer\n$ <span class="token function">cd</span> markdown-viewer\n$ <span class="token function">npm</span> <span class="token function">install</span> -g electron\n$ <span class="token function">npm</span> <span class="token function">install</span>\n$ electron <span class="token keyword">.</span>\n</code></pre>\n      </div>\n<p><strong>Part of my <a href="https://medium.com/on-learning-new-things/learning-new-things-f4db7f16724">On Learning New Things</a> Series</strong></p>',frontmatter:{date:"January 30, 2018",path:"/blog/electron",title:"Building a MarkDown Reader in Electron"}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-electron-f88dc85572ca33379ebb.js.map