---
title: Objection + Knex = Painless PostgreSQL in your Node App
tags: ["Node", "Backend", "PostgreSQL", "JavaScript"]
path: "/blog/objection"
date: "2017-02-20"
---

It's no secret that I'm a total PostgreSQL fangirl -- I rarely see a use case for using a different database, especially with the support for array and JSON fields. I also love Node and Express for simple APIs (without auth). In the past, SQL support within Node and Express hasn't been perfect. I've been hearing great things about [Objection](https://vincit.github.io/objection.js), so I decided to try it out!

Objection, which is built on top of [Knex](http://knexjs.org/), uses the new ES7 class features to build a nice ORM query language for Node. ORMs allow you to use whatever programming language you are using for your app to query a database rather than querying in the natie language of the database (here we will use JavaScript to interact with our database instead of SQL). Since Objection is still really new, I will be walking through all of my code step by step.

## The Learning Process

For this project, I relied pretty much exclusively on the documentation. The Knex documentation was great, and there were [examples](https://github.com/Vincit/objection.js/tree/master/examples/express-es6) on the Objection GitHub that were very helpful as well. Since I make so many Express apps, given that I teach Express pretty extensively to my students, I felt pretty comfortable continuing with the project after skimming these resources.

## The Final Project

I've been having trouble coming up with app ideas for this blog! So, I built an app idea app! The models were relatively simple: `ideas` and `comments`, but they still demonstrate one of the biggest use cases for Objection: relations between data. The `ideas` will be the "parents" with "child" comments attached to them. Essentially, users will be able to comment on various app ideas.

#### Knex Initialization

First, I initialized Knex, which will facilitate our database connection using `pg`, our migrations, and our seeds. After setting up my typical Express API boilerplate in my [index file](https://github.com/aspittel/app-ideas/blob/master/index.js) and installing the requirements in my [package.json](https://github.com/aspittel/app-ideas/blob/master/package.json), I ran `knex init` in the root of my project. This created a `knexfile.js` that contains a boilerplate with example connections to databases. I decided to remove the `production`, `development`, and `staging` options in favor of just specifying a database connection string in my `.env` file. The `knexfile` ended up looking like:

```js
require('dotenv').config()

const pg = require('pg')
pg.defaults.ssl = true

module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_URL
}
```

The `ssl` configuration is only necessary if you are using a database on Heroku or another provider that requires an SSL connection. `dotenv` allows us to retrieve environmental variables from a `.env` file! That variable is a standard PostgreSQL connection string:

```bash
DATABASE_URL=postgres://username:password@host:port/db_name
```

I created the database on my computer using `psql`, I created the production database using a [Heroku add-on](https://elements.heroku.com/addons/heroku-postgresql).

#### Migrations

Migrations are changes to a database's schema specified within your ORM, so we will be defining the tables and columns of our database straight in JavaScript rather than using SQL.

From there, I generated my migrations:

```bash
$ knex migrate:make create_ideas
$ knex migrate:make create_comments
```

Each migrate command created its own separate file in the `migrations` folder. Knex also puts a timestamp on each so that the migration name is unique and is run in order, for example: migrations/20180218215453_create_ideas.js. I created two separate migrations to keep things organized, and because I created the comments after the ideas. These could be combined, though.

The migration is generated with:
```js
exports.up = function (knex, Promise) {
}

exports.down = function (knex, Promise) {
}
```

The migration itself goes within the body of the `exports.up` function and then whatever the opposite of that migration does goes within `exports.down`. The `exports.down` allows us to undo migrations that we no longer want. For the `create_ideas` migration, I added the following:

```js
exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('ideas', table => {
      table.increments('id').primary()
      table.string('idea')
      table.string('creator')
    })
  ])
}

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('ideas')
  ])
}
```

Knex migration functions should "always return a promise" according to its documentation. We can use `Promise.all()` in order to return an array of promises to resolve. Even though each function only has one action in this case, I could have added more actions separated by `,`'s. The `exports.up` contains the table creation logic for the `ideas` table, including a primary key that is auto-incremented `table.increments('id').primary()`. It also has two other string columns called `idea` and `creator`. To undo the migration, we would drop the `ideas` table, as specified in the `exports.down` function.

The second migration to create the `comments` file is similar:

```js
exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('comments', table => {
      table.increments('id').primary()
      table.string('comment')
      table.string('creator')
      table.integer('ideas_id').references('ideas.id')
    })
  ])
}

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('comments')
  ])
}

```

This migration looks very similar to the `ideas` one, the only difference is the foreign key: `table.integer('ideas_id').references('ideas.id')`. There are many ways to do this specified in the documentation; however, the Objection documentation does it this way so I did as well. Knex enforced the column name `ideas_id` rather than `idea_id` which was unsemantic. I am sure there is a way around that naming mandate; however, I didn't put much effort into looking it up!

Finally, I ran the migrations using the command:

```bash
$ knex migrate:latest
```

Even though the command implies it runs only the latest migration, it instead runs all migrations that haven't been run yet.

#### Database Seeding

Knex also has some built-in functionality to help us seed, or add initial test data, to our database.

```bash
$ knex seed:make ideas
```

The above command created a `seeds` directory with an `ideas.js` file within it. That file also had the following code in it:

```js
exports.seed = function (knex, Promise) {
}
```

I added the following:

```js
exports.seed = function (knex, Promise) {
  return knex('ideas').del().then(() => {
    return knex('ideas').insert([
        {creator: 'Ali', idea: 'A To Do List app!'},
        {creator: 'Ali', idea: 'A Blog!'},
        {creator: 'Ali', idea: 'A calculator'}
    ])
  })
}
```

This cleared the `ideas` table, so there wasn't any data in the table, and then it inserted three records into the database. It used the JSON keys and values to create those rows. I only seeded the `ideas` table, but you could definitely seed the `comments` table as well!

I then ran the following command to update the database:

```bash
$ knex seed:run
```

#### Models

Up until this point, we have been using Knex to interact with our database. Now, we are going to create some models using Objection in order to deal with the relationships between our database tables and to make our querying more explicit! I created a `models` folder with a `schema.js` file within it. You could structure this pretty much anyway -- one good way would be to have each model in a different file. I kept everything together, though, for demonstration's sake!

First, let's take care of some administrative things at the top:

```js
const Knex = require('knex')
const connection = require('../knexfile')
const { Model } = require('objection')

const knexConnection = Knex(connection)

Model.knex(knexConnection)
```

These lines of code connect us to the database using our `knexfile` from earlier. We are also attaching Objection to our database connection. 

Now, let's create our model for our `Comment` data. The models will allow us to interact cleanly with the data we are retrieving from our database.

```js
class Comment extends Model {
  static get tableName () {
    return 'comments'
  }

  static get relationMappings () {
    return {
      idea: {
        relation: Model.BelongsToOneRelation,
        modelClass: Idea,
        join: {
          from: 'comments.ideas_id',
          to: 'ideas.id'
        }
      }
    }
  }
}
```

Let's break this down. The static getter method `tableName` returns the name `comments`: the name of the database table we want our `Comment` class to model! We also have a second static getter method that defines the `Comment` model's relationships to other models. In this case, the key of the outside object `idea` is how we will refer to the parent class. The `relation` key within the child object has the value `Model.BelongsToOneRelation` which says that each comment is going to have one parent idea. The `modelClass` says that the `idea` is coming from the `Idea` model and then the `join` specifies the database table and column names to perform a SQL join on, in this case, the `ideas_id` column in the `comments` table to the `id` column in the `ideas` table.  [static](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static) and [get](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) were added in ES6!

The Idea class looks almost identical, though the relationships are inverted!

```js
class Idea extends Model {
  static get tableName () {
    return 'ideas'
  }

  static get relationMappings () {
    return {
      comments: {
        relation: Model.HasManyRelation,
        modelClass: Comment,
        join: {
          from: 'ideas.id',
          to: 'comments.ideas_id'
        }
      }
    }
  }
}

module.exports = { Idea, Comment }
```

In this case, our relationship is `Model.HasManyRelation` since one idea can have multiple comments! I also exported the models so they could be used within our other files.

#### Querying

The final file I worked with was `controllers/ideas.js`. I usually separate all my "controller" functions -- the routing functions that decide what each route renders -- into a file or files if there are lots of them! This week, I built an API that I will build a front-end for in the future.

First, some imports:

```js
const express = require('express')

const { Idea, Comment } = require('../models/schema')

const router = express.Router()
```

Let's walk through the first method, a get request that returns all of the `ideas`:

```js
router.get('/', async (req, res) => {
  const ideas = await Idea.query()
  res.json(ideas)
})
```

In the above example, we are making the arrow function callback that handles the request and response asynchronous using `async`, then we can "pause" the body of the function until the promise from our `Idea.query()` resolves. That query will return a JavaScript object with all of the items in our `ideas` table using our `res.json(ideas)` method. If we navigate to `localhost:3000/ideas` locally or `https://application-ideas.herokuapp.com/ideas` in production we see:

```json
[
    {
        "id": 1,
        "idea": "A To Do List app!",
        "creator": "Ali"
    },
    {
        "id": 2,
        "idea": "A Blog!",
        "creator": "Ali"
    },
    {
        "id": 3,
        "idea": "A calculator",
        "creator": "Ali"
    }
]
``` 

Note: The Objection documentation uses [async and await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) to handle [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) in JavaScript; however, we could rewrite the above function to look like the following and that would work equally as well!

```js
router.get('/', (req, res) => {
  Idea.query().then(ideas => {
    res.json(ideas)
  })
})
```

Instead of going through the other routes in paragraph form, I am going to put the annotated code below:

```js
router.get('/:id', async (req, res) => {
  // gets one idea, found by id.
  //Also fetches the related comments using the .eager method
  const idea = await Idea.query().findById(req.params.id).eager('comments')
  res.json(idea)
})

router.post('/', async (req, res) => {
  // creates a new idea from the request body
  // only allows the idea and creator fields for safety
  const newIdea = req.body

  const idea = await Idea.query()
                         .allowInsert('[idea, creator]')
                         .insert(newIdea)

  res.send(idea)
})

router.post('/:id/comments', async (req, res) => {
  // creates a new comment that is a child of an idea, again sanitizes fields.
  const idea = await Idea.query().findById(req.params.id)

  await idea.$relatedQuery('comments')
            .allowInsert('[comment, creator]')
            .insert(req.body)

  res.send(idea)
})

router.delete('/:id', async (req, res) => {
  // deletes an idea
  await Idea.query().deleteById(req.params.id)

  res.redirect('/ideas')
})

router.delete('/:id/comments/:commentId', async (req, res) => {
  // deletes a comment
  await Comment.query().deleteById(req.params.commentId)

  res.redirect(`/ideas/${req.params.id}`)
})

module.exports = router
```

There's a bunch more you can do with Objection, like [raw queries](http://vincit.github.io/objection.js/#raw-queries), interaction with [JSON fields](http://vincit.github.io/objection.js/#json-queries), and [validations](http://vincit.github.io/objection.js/#validation).

## Next Steps

I had a really fun time working with Objection and Knex! It is honestly very similar to working with Mongoose and MongoDB from a configuration standpoint, but it makes hierarchical and related data so much easier to work with! I would definitely keep using these libraries in the future with Express apps! Definitely a must-try if you use Node frequently!

Coming next week: a front-end for this API! Please leave a comment or [tweet me](https://twitter.com/aspittel) with suggestions for a front-end tool to use for it!

[Full Code](https://github.com/aspittel/app-ideas)
[Deployed App](https://application-ideas.herokuapp.com/ideas)
[Objection Documentation](http://vincit.github.io/objection.js)
[Knex Documentation](http://knexjs.org/)


**Part of my [On Learning New Things](https://medium.com/on-learning-new-things/learning-new-things-f4db7f16724) Series**
