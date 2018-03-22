---
path: "/blog/go"
date: "2018-01-04"
title: How I Built an API with Mux, Go, PostgreSQL, and GORM  
tags: ["Go", "API", "backend", "PostgreSQL"]
---

I've been seeing a lot of discussion about how fast Go is. According to the [Benchmark Game](http://benchmarksgame.alioth.debian.org/u64q/compare.php?lang=go&lang2=node) Go is much faster than Node, somewhat faster than Java, and runs laps around Python and Ruby. Despite the performance level, Go still has a relatively nice developer experience. Semicolons are implicit, some typing is inferred, and the non-object oriented nature makes it more flexible. That's not even mentioning the built-in concurrency! I decided that I wanted to build something in Go to see if it would be a viable programming language for my apps in the future.

## Setup
I first had to download Go on to my computer. Downloading it via the Go site didn't work on my computer -- it kept hanging and freezing. I ended up trying to install it via Homebrew. When you install Go, you also have to set up a `$GOPATH` on your computer which declares the workspace where you will create your Go projects. I had some difficulties getting this to work properly. Eventually, I added the following to my `.zshrc` which ended up working.

```zsh
export GOPATH=$HOME/go
export GOROOT=/usr/local/opt/go/libexec
export PATH=$PATH:$GOPATH/bin
export PATH=$PATH:$GOROOT/bin
```

I then wrote my code in `$HOME/go/src/github.com/user/rest-api` according to the recommendations in the [How to Write Go Code](https://golang.org/doc/code.html) tutorial on the Golang website.

## Getting Started
I started out using the Try Go tutorial on the Go website. It was a good intro tutorial, and I liked the interactive nature of it. I ended up feeling pretty comfortable with it after that simple introduction. To me, Go feels like a mash-up of C++, Python, and JavaScript. It didn't feel overly foreign to me like some languages have!

## Final Project
I felt pretty comfortable moving on to more advanced concepts -- in this case I wanted to build an API. I've been leaning heavily towards microservice apps for the past year or so, and since my focus now is on web applications I wanted to build something web-based. I struggle to keep track of awesome coding articles to send to people, so I wanted to build a tool that would allow people to keep track of and shout out awesome articles that they find.

I will admit that I went straight into the final project after reading the documentation for the tools rather than going through tutorials like I normally do -- Go felt really comfortable to me, though I'm sure experts would have a bunch of improvements for me!

I started out with a hard-coded API with only a couple items in it -- similar to [Francis Sunday's awesome tutorial](https://www.codementor.io/codehakase/building-a-restful-api-with-golang-a6yivzqdo). Through that article, I found Gorilla Mux which aids in routing in Go. The language has a built-in server, so I didn't have to add much code for that functionality.

I then wanted to add in a database. I use PostgreSQL for pretty much everything. I am super-reliant on its JSON and Array fields, but I prefer relational databases. I also prefer using ORMs in my apps, since they usually make querying more elegant syntactically. I found GORM, which was awesome to work with. It doesn't have all of the Postgres features built in, but I found it easy enough to implement my desired features just using the "pq" Go package.

Since there aren't a ton of resources on creating APIs with this stack in Go, I want to walk through my code a little bit more than I usually do.

After importing my dependencies, I defined a `struct`. Structs are "collections of fields". Though Go isn't object-oriented, structs to me feel somewhat class-like. You're defining a blueprint and then creating instances of it in your code. I wanted a couple fields in my API: the link for the resource, its name, its author, a description, and tags associated with it. GORM and Postgres added in the `created_at`, `updated_at`, `deleted_at`, and `id` fields as well on the output side. The only tricky field is for tags -- I ended up using the StringArray from pq since that wasn't built into GORM as far as I could tell.

```go
type Resource struct {
	gorm.Model

	Link        string
	Name        string
	Author      string
	Description string
	Tags        pq.StringArray `gorm:"type:varchar(64)[]"`
}
```

Next, I wrote my `main` function. This function is run automatically when the program is run and it starts off the other actions in your program. I started off with creating my Mux router which will simplify the url routing in the application. I then set a global variable for the database connection, so that I could use it throughout my app. I did some error handling as well in case I couldn't connect to the database. I used `os.Getenv` to interact with environmental variables set in my `.env` file. This also allowed me to deploy my app pretty easily at the end! I also migrated my database using GORM, so that no matter the database I was using, the schema would be correct when I started up my app. 

Then, I implemented the routes for my app. I only had four that I initially wanted to create -- GET all, GET one, POST, and DELETE. I may also add a PUT for updating at some point as well. I like the routing that Mux offers, it is simple and clean.

Finally, I started the server on the last line of the `main` function -- it just specifies the port and router to use. It also specifies to log the error before shutting down the server.

```go
var db *gorm.DB
var err error

func main() {
	router := mux.NewRouter()

	db, err = gorm.Open(
		"postgres",
		"host="+os.Getenv("HOST")+" user="+os.Getenv("USER")+
		" dbname="+os.Getenv("DBNAME")+" sslmode=disable password="+ 
		os.Getenv("PASSWORD"))

	if err != nil {
		panic("failed to connect database")
	}

	defer db.Close()

	db.AutoMigrate(&Resource{})
        
	router.HandleFunc("/resources", GetResources).Methods("GET")
	router.HandleFunc("/resources/{id}", GetResource).Methods("GET")
	router.HandleFunc("/resources", CreateResource).Methods("POST")
	router.HandleFunc("/resources/{id}", DeleteResource).Methods("DELETE")

	log.Fatal(http.ListenAndServe(":"+os.Getenv("PORT"), router))
}
```

Then, I wrote my route-handling functions. Each one takes in the HTTP response and the request as parameters -- similar to many web frameworks. First, I wrote the get all resources route. I first create an array of resources, then query the database for all of the resources, setting the result to the resources array. Then I send the response, which is a JSON of the resources.

```go
func GetResources(w http.ResponseWriter, r *http.Request) {
	var resources []Resource
	db.Find(&resources)
	json.NewEncoder(w).Encode(&resources)
}
```

The get one resource route is similar -- the only differences are that first the request parameters have be retrieved to be used in the query for the one resource.
```go
func GetResource(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	var resource Resource
	db.First(&resource, params["id"])
	json.NewEncoder(w).Encode(&resource)
}
```

The create function is very similar to the previous routes. Funny story behind this one -- I couldn't figure out why this function wasn't working for a while -- there wasn't an error but the fields were filling in as blanks when I was testing it using Postman. I then moved to CURl and it worked totally fine! There wasn't actually a bug, my ability to use interfaces well has just decreased! 
```go
func CreateResource(w http.ResponseWriter, r *http.Request) {
	var resource Resource
	json.NewDecoder(r.Body).Decode(&resource)
	db.Create(&resource)
	json.NewEncoder(w).Encode(&resource)
}
```

Finally, I created the delete route. This one is similar to the previous ones, I just returned all of the resources upon deleting the specified one.
```go
func DeleteResource(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	var resource Resource
	db.First(&resource, params["id"])
	db.Delete(&resource)

	var resources []Resource
	db.Find(&resources)
	json.NewEncoder(w).Encode(&resources)
}
```
In between each new piece of code, I ran `go run` on my code during development to check out my API. I didn't have too many issues with this -- if my code didn't compile, the error messages were clear and to the point. I barely noticed the extra step. At the end, I `go install`'ed my app and then could run the executable on my computer after that point. I also used `godep` for dependency management since I ended up using quite a few libraries!

I heavily relied on the GORM docs for all of the code! It was great -- easy to understand with clear examples! I would highly recommend all of the libraries I used in this app.

I also ran the builtin linter, `gofmt`, after finishing writing the code. I originally wrote it in a similar format to my JavaScript code, which the linter cleaned up. I did like my extra spacing, but I also enjoyed having my code better fitted to the Go style guide so easily!

I think the code is pretty straightforward and readable! I had a lot of fun working in Go for this project. The final project is on [GitHub](https://github.com/aspittel/helpful-coding-resources-api/blob/master/rest-api.go) and is [deployed online](https://helpful-coding-resources.herokuapp.com/resources).

## Deployment
I was really nervous about getting this app deployed for some reason, given that my compiled language experience has not been web-based. In fact, I've only written code in compiled languages for school projects! I ended up following the steps on [Heroku's site](https://devcenter.heroku.com/articles/getting-started-with-go#introduction) for deploying Go apps. I did have to change the way the environmental variables were stored, but otherwise, the steps worked out pretty well! I didn't need to do anything crazy after all!

## Next Steps
I **really** enjoyed writing code in Go. I would definitely use it for a project again, especially if performance was important for a project. I would love to add on to this project as well. I will probably add tag filtering on the API side, authorization, and an update route. I will also probably add a frontend to this app in order to interact with the API more easily. This project was a lot of fun, and all in all I only spent about four hours to go from not having Go on my computer to having a final product! I found the syntax easy to understand and implement, and I didn't even mind having to deal with pointers, static typing, or compiling! Go 100% gets my stamp of approval, and I would use it above a lot of the languages I have used in the past!

**Part of my [On Learning New Things](https://medium.com/on-learning-new-things/learning-new-things-f4db7f16724) Series**
