webpackJsonp([0xff251b6a6e15],{370:function(n,s){n.exports={data:{markdownRemark:{html:'<p>I\'ve been seeing a lot of discussion about how fast Go is. According to the <a href="http://benchmarksgame.alioth.debian.org/u64q/compare.php?lang=go&#x26;lang2=node">Benchmark Game</a> Go is much faster than Node, somewhat faster than Java, and runs laps around Python and Ruby. Despite the performance level, Go still has a relatively nice developer experience. Semicolons are implicit, some typing is inferred, and the non-object oriented nature makes it more flexible. That\'s not even mentioning the built-in concurrency! I decided that I wanted to build something in Go to see if it would be a viable programming language for my apps in the future.</p>\n<h2>Setup</h2>\n<p>I first had to download Go on to my computer. Downloading it via the Go site didn\'t work on my computer -- it kept hanging and freezing. I ended up trying to install it via Homebrew. When you install Go, you also have to set up a <code>$GOPATH</code> on your computer which declares the workspace where you will create your Go projects. I had some difficulties getting this to work properly. Eventually, I added the following to my <code>.zshrc</code> which ended up working.</p>\n<div class="gatsby-highlight">\n      <pre class="language-zsh"><code class="language-zsh">export GOPATH=$HOME/go\nexport GOROOT=/usr/local/opt/go/libexec\nexport PATH=$PATH:$GOPATH/bin\nexport PATH=$PATH:$GOROOT/bin</code></pre>\n      </div>\n<p>I then wrote my code in <code>$HOME/go/src/github.com/user/rest-api</code> according to the recommendations in the <a href="https://golang.org/doc/code.html">How to Write Go Code</a> tutorial on the Golang website.</p>\n<h2>Getting Started</h2>\n<p>I started out using the Try Go tutorial on the Go website. It was a good intro tutorial, and I liked the interactive nature of it. I ended up feeling pretty comfortable with it after that simple introduction. To me, Go feels like a mash-up of C++, Python, and JavaScript. It didn\'t feel overly foreign to me like some languages have!</p>\n<h2>Final Project</h2>\n<p>I felt pretty comfortable moving on to more advanced concepts -- in this case I wanted to build an API. I\'ve been leaning heavily towards microservice apps for the past year or so, and since my focus now is on web applications I wanted to build something web-based. I struggle to keep track of awesome coding articles to send to people, so I wanted to build a tool that would allow people to keep track of and shout out awesome articles that they find.</p>\n<p>I will admit that I went straight into the final project after reading the documentation for the tools rather than going through tutorials like I normally do -- Go felt really comfortable to me, though I\'m sure experts would have a bunch of improvements for me!</p>\n<p>I started out with a hard-coded API with only a couple items in it -- similar to <a href="https://www.codementor.io/codehakase/building-a-restful-api-with-golang-a6yivzqdo">Francis Sunday\'s awesome tutorial</a>. Through that article, I found Gorilla Mux which aids in routing in Go. The language has a built-in server, so I didn\'t have to add much code for that functionality.</p>\n<p>I then wanted to add in a database. I use PostgreSQL for pretty much everything. I am super-reliant on its JSON and Array fields, but I prefer relational databases. I also prefer using ORMs in my apps, since they usually make querying more elegant syntactically. I found GORM, which was awesome to work with. It doesn\'t have all of the Postgres features built in, but I found it easy enough to implement my desired features just using the "pq" Go package.</p>\n<p>Since there aren\'t a ton of resources on creating APIs with this stack in Go, I want to walk through my code a little bit more than I usually do.</p>\n<p>After importing my dependencies, I defined a <code>struct</code>. Structs are "collections of fields". Though Go isn\'t object-oriented, structs to me feel somewhat class-like. You\'re defining a blueprint and then creating instances of it in your code. I wanted a couple fields in my API: the link for the resource, its name, its author, a description, and tags associated with it. GORM and Postgres added in the <code>created_at</code>, <code>updated_at</code>, <code>deleted_at</code>, and <code>id</code> fields as well on the output side. The only tricky field is for tags -- I ended up using the StringArray from pq since that wasn\'t built into GORM as far as I could tell.</p>\n<div class="gatsby-highlight">\n      <pre class="language-go"><code class="language-go"><span class="token keyword">type</span> Resource <span class="token keyword">struct</span> <span class="token punctuation">{</span>\n\tgorm<span class="token punctuation">.</span>Model\n\n\tLink        <span class="token builtin">string</span>\n\tName        <span class="token builtin">string</span>\n\tAuthor      <span class="token builtin">string</span>\n\tDescription <span class="token builtin">string</span>\n\tTags        pq<span class="token punctuation">.</span>StringArray <span class="token string">`gorm:"type:varchar(64)[]"`</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Next, I wrote my <code>main</code> function. This function is run automatically when the program is run and it starts off the other actions in your program. I started off with creating my Mux router which will simplify the url routing in the application. I then set a global variable for the database connection, so that I could use it throughout my app. I did some error handling as well in case I couldn\'t connect to the database. I used <code>os.Getenv</code> to interact with environmental variables set in my <code>.env</code> file. This also allowed me to deploy my app pretty easily at the end! I also migrated my database using GORM, so that no matter the database I was using, the schema would be correct when I started up my app. </p>\n<p>Then, I implemented the routes for my app. I only had four that I initially wanted to create -- GET all, GET one, POST, and DELETE. I may also add a PUT for updating at some point as well. I like the routing that Mux offers, it is simple and clean.</p>\n<p>Finally, I started the server on the last line of the <code>main</code> function -- it just specifies the port and router to use. It also specifies to log the error before shutting down the server.</p>\n<div class="gatsby-highlight">\n      <pre class="language-go"><code class="language-go"><span class="token keyword">var</span> db <span class="token operator">*</span>gorm<span class="token punctuation">.</span>DB\n<span class="token keyword">var</span> err <span class="token builtin">error</span>\n\n<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\trouter <span class="token operator">:=</span> mux<span class="token punctuation">.</span><span class="token function">NewRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n\tdb<span class="token punctuation">,</span> err <span class="token operator">=</span> gorm<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>\n\t\t<span class="token string">"postgres"</span><span class="token punctuation">,</span>\n\t\t<span class="token string">"host="</span><span class="token operator">+</span>os<span class="token punctuation">.</span><span class="token function">Getenv</span><span class="token punctuation">(</span><span class="token string">"HOST"</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">" user="</span><span class="token operator">+</span>os<span class="token punctuation">.</span><span class="token function">Getenv</span><span class="token punctuation">(</span><span class="token string">"USER"</span><span class="token punctuation">)</span><span class="token operator">+</span>\n\t\t<span class="token string">" dbname="</span><span class="token operator">+</span>os<span class="token punctuation">.</span><span class="token function">Getenv</span><span class="token punctuation">(</span><span class="token string">"DBNAME"</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">" sslmode=disable password="</span><span class="token operator">+</span> \n\t\tos<span class="token punctuation">.</span><span class="token function">Getenv</span><span class="token punctuation">(</span><span class="token string">"PASSWORD"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n\t<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>\n\t\t<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">"failed to connect database"</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token keyword">defer</span> db<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n\tdb<span class="token punctuation">.</span><span class="token function">AutoMigrate</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>Resource<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n        \n\trouter<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">"/resources"</span><span class="token punctuation">,</span> GetResources<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Methods</span><span class="token punctuation">(</span><span class="token string">"GET"</span><span class="token punctuation">)</span>\n\trouter<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">"/resources/{id}"</span><span class="token punctuation">,</span> GetResource<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Methods</span><span class="token punctuation">(</span><span class="token string">"GET"</span><span class="token punctuation">)</span>\n\trouter<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">"/resources"</span><span class="token punctuation">,</span> CreateResource<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Methods</span><span class="token punctuation">(</span><span class="token string">"POST"</span><span class="token punctuation">)</span>\n\trouter<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">"/resources/{id}"</span><span class="token punctuation">,</span> DeleteResource<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Methods</span><span class="token punctuation">(</span><span class="token string">"DELETE"</span><span class="token punctuation">)</span>\n\n\tlog<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token string">":"</span><span class="token operator">+</span>os<span class="token punctuation">.</span><span class="token function">Getenv</span><span class="token punctuation">(</span><span class="token string">"PORT"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> router<span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Then, I wrote my route-handling functions. Each one takes in the HTTP response and the request as parameters -- similar to many web frameworks. First, I wrote the get all resources route. I first create an array of resources, then query the database for all of the resources, setting the result to the resources array. Then I send the response, which is a JSON of the resources.</p>\n<div class="gatsby-highlight">\n      <pre class="language-go"><code class="language-go"><span class="token keyword">func</span> <span class="token function">GetResources</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">var</span> resources <span class="token punctuation">[</span><span class="token punctuation">]</span>Resource\n\tdb<span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>resources<span class="token punctuation">)</span>\n\tjson<span class="token punctuation">.</span><span class="token function">NewEncoder</span><span class="token punctuation">(</span>w<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Encode</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>resources<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>The get one resource route is similar -- the only differences are that first the request parameters have be retrieved to be used in the query for the one resource.</p>\n<div class="gatsby-highlight">\n      <pre class="language-go"><code class="language-go"><span class="token keyword">func</span> <span class="token function">GetResource</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\tparams <span class="token operator">:=</span> mux<span class="token punctuation">.</span><span class="token function">Vars</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span>\n\t<span class="token keyword">var</span> resource Resource\n\tdb<span class="token punctuation">.</span><span class="token function">First</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>resource<span class="token punctuation">,</span> params<span class="token punctuation">[</span><span class="token string">"id"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n\tjson<span class="token punctuation">.</span><span class="token function">NewEncoder</span><span class="token punctuation">(</span>w<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Encode</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>resource<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>The create function is very similar to the previous routes. Funny story behind this one -- I couldn\'t figure out why this function wasn\'t working for a while -- there wasn\'t an error but the fields were filling in as blanks when I was testing it using Postman. I then moved to CURl and it worked totally fine! There wasn\'t actually a bug, my ability to use interfaces well has just decreased! </p>\n<div class="gatsby-highlight">\n      <pre class="language-go"><code class="language-go"><span class="token keyword">func</span> <span class="token function">CreateResource</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">var</span> resource Resource\n\tjson<span class="token punctuation">.</span><span class="token function">NewDecoder</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>Body<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Decode</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>resource<span class="token punctuation">)</span>\n\tdb<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>resource<span class="token punctuation">)</span>\n\tjson<span class="token punctuation">.</span><span class="token function">NewEncoder</span><span class="token punctuation">(</span>w<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Encode</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>resource<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Finally, I created the delete route. This one is similar to the previous ones, I just returned all of the resources upon deleting the specified one.</p>\n<div class="gatsby-highlight">\n      <pre class="language-go"><code class="language-go"><span class="token keyword">func</span> <span class="token function">DeleteResource</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\tparams <span class="token operator">:=</span> mux<span class="token punctuation">.</span><span class="token function">Vars</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span>\n\t<span class="token keyword">var</span> resource Resource\n\tdb<span class="token punctuation">.</span><span class="token function">First</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>resource<span class="token punctuation">,</span> params<span class="token punctuation">[</span><span class="token string">"id"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n\tdb<span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>resource<span class="token punctuation">)</span>\n\n\t<span class="token keyword">var</span> resources <span class="token punctuation">[</span><span class="token punctuation">]</span>Resource\n\tdb<span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>resources<span class="token punctuation">)</span>\n\tjson<span class="token punctuation">.</span><span class="token function">NewEncoder</span><span class="token punctuation">(</span>w<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Encode</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>resources<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>In between each new piece of code, I ran <code>go run</code> on my code during development to check out my API. I didn\'t have too many issues with this -- if my code didn\'t compile, the error messages were clear and to the point. I barely noticed the extra step. At the end, I <code>go install</code>\'ed my app and then could run the executable on my computer after that point. I also used <code>godep</code> for dependency management since I ended up using quite a few libraries!</p>\n<p>I heavily relied on the GORM docs for all of the code! It was great -- easy to understand with clear examples! I would highly recommend all of the libraries I used in this app.</p>\n<p>I also ran the builtin linter, <code>gofmt</code>, after finishing writing the code. I originally wrote it in a similar format to my JavaScript code, which the linter cleaned up. I did like my extra spacing, but I also enjoyed having my code better fitted to the Go style guide so easily!</p>\n<p>I think the code is pretty straightforward and readable! I had a lot of fun working in Go for this project. The final project is on <a href="https://github.com/aspittel/helpful-coding-resources-api/blob/master/rest-api.go">GitHub</a> and is <a href="https://helpful-coding-resources.herokuapp.com/resources">deployed online</a>.</p>\n<h2>Deployment</h2>\n<p>I was really nervous about getting this app deployed for some reason, given that my compiled language experience has not been web-based. In fact, I\'ve only written code in compiled languages for school projects! I ended up following the steps on <a href="https://devcenter.heroku.com/articles/getting-started-with-go#introduction">Heroku\'s site</a> for deploying Go apps. I did have to change the way the environmental variables were stored, but otherwise, the steps worked out pretty well! I didn\'t need to do anything crazy after all!</p>\n<h2>Next Steps</h2>\n<p>I <strong>really</strong> enjoyed writing code in Go. I would definitely use it for a project again, especially if performance was important for a project. I would love to add on to this project as well. I will probably add tag filtering on the API side, authorization, and an update route. I will also probably add a frontend to this app in order to interact with the API more easily. This project was a lot of fun, and all in all I only spent about four hours to go from not having Go on my computer to having a final product! I found the syntax easy to understand and implement, and I didn\'t even mind having to deal with pointers, static typing, or compiling! Go 100% gets my stamp of approval, and I would use it above a lot of the languages I have used in the past!</p>\n<p><strong>Part of my <a href="https://medium.com/on-learning-new-things/learning-new-things-f4db7f16724">On Learning New Things</a> Series</strong></p>',frontmatter:{date:"January 04, 2018",path:"/blog/go",title:"How I Built an API with Mux, Go, PostgreSQL, and GORM"}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-go-53f73efcab5b27d81e47.js.map