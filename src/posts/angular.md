---
title: Learning Angular 5 as a React and Vue Developer
tags: ["JavaScript", "Angular"]
path: "/blog/angular"
date: "2018-01-14"
---

I try not to play into the "war of frameworks" narrative that some programming articles use. I will admit, though, that I've been pretty critical about AngularJS (aka Angular 1). The syntax and structure often seemed clunky to me, and the error messages were not fun to deal with! With the rise of React, I also preferred the component-based architecture that became more popular. The rocky non-backward compatible migration to Angular 2 lost me, and I stopped paying attention to Angular.

Recently, I've heard more discussion about Angular 5 and I wanted to try it out and compare my experience to my experiences with Vue and React since I use those on a very regular basis.

# Getting Started
I started with the tutorial on the Angular website, it seemed very straightforward and similar conceptually to other frameworks. TypeScript is probably the biggest difference with Angular, and I really liked it! I felt comfortable building a project after I went through their sample one, especially since its so large! It took me a few hours to go all the way through it!

The superhero theme was pretty cute, and I liked how it included routing, API requests, the CLI, and services. It was very thorough in its introduction to the framework!

# The Final Project
[Last week](https://dev.to/aspittel/how-i-built-an-api-with-mux-go-postgresql-and-gorm-5ah8) I built an API in Go that displays coding resources, so this week I wanted to build a frontend for that app! I work pretty much exclusively in the "micro-service" style of applications at this point: I would much, much rather build a front-end and back-end separately. This app was no exception to that -- this week's project was completely static and it is hosted on GitHub pages.

I started out with a component for my coding resources, the TypeScript schema for the resources, and then a service to connect to the API. I kept this architecture throughout. Since it was a super simple app, I didn't feel the need to have subcomponents or anything like that at this point.

The service looked like this: 
```ts
@Injectable()
export class ResourcesService {
  private resourcesUrl = 'https://helpful-coding-resources.herokuapp.com/resources';

  constructor (
    private http: HttpClient,
  ) {}

  getResources (): Observable<Resource[]>{
    return this.http.get<Resource[]>(this.resourcesUrl)
               .pipe(
                  tap(resources => console.log('done! 😀'));
               )
  }

```
I did find it interesting that Angular has its own AJAX service rather than you using your favorite. I normally use Axios, and would have been fine to use that, but it was nice to have it included in the library.

Side note: I'm not used to using semi-colons in JavaScript, but I used them for this project, mainly because VSCode was inserting them automatically in the TypeScript files and I was too lazy to change the setting! 

Then, I worked on the component itself which ended up like so:

```ts
export class ResourcesComponent implements OnInit {
  resources: Resource[];
  initialResources: Resource[];
  showSearch: boolean;

  constructor(private resourceService: ResourcesService) { }

  ngOnInit() {
    this.getResources();
  }

  getResources(): void {
    this.resourceService.getResources()
        .subscribe(resources => {
          this.resources = resources;
          this.initialResources = resources;
        });
  }

  toggleSearch(): void {
    this.showSearch = !this.showSearch;
  }

  search(val): void {
    this.resources = this.initialResources.filter(resource => {
      return resource.Tags.some(tag => {
        return tag.toLowerCase().startsWith(val.toLowerCase());
      });
    });
  }
}

```

I also liked the templating language, which felt very similar to Vue. I also find it interesting how there is still a separation of concerns for HTML and JS code in Angular, especially in comparison to the React architecture.

```html
<div *ngIf="resources">
  <div class="search-div">
    <i
      class="material-icons"
      (click)="toggleSearch()"
    >
      search
    </i>
    <input
      #searchInput
      [ngClass]="{'shown': showSearch}"
      class="search-box"
      (keyup)="search(searchInput.value)"
      type="text"
      placeholder="Filter Resources"
    />
  </div>
  <div class="list">
    <div class="resource" *ngFor="let resource of resources">
        <a href="{{ resource.Link }}"><h3>{{ resource.Name }} <span class="author">{{ resource.Author }}</span></h3></a>
        <p>{{ resource.Description }}</p>
    </div>
  </div>
</div>
<div *ngIf="!resources">
  <div class="loader"></div>
</div>
```

I had two arrays, one with the currently displayed resources and one with the ones fetched from the API. This allowed me to easily implement the filtering that I implemented based on tags. I also have a toggle that hides the search bar when it isn't in use. Finally, I have the method for the search which filters the tags attached to the resources. 

### All Articles Display
![All Articles Display](https://thepracticaldev.s3.amazonaws.com/i/wbys08e8eh1ft3u085bs.png)

### Searched Articles
![Page with Search](https://thepracticaldev.s3.amazonaws.com/i/4zy9grpahskujvo29bfb.png)

I also added in animations pretty easily. There was documentation about implementing them directly in Angular, but I instead opted to do them in the CSS. I am more used to that and it is optimized as well.

# Deployment
I found an `npm` package that deploys Angular 5 apps to GitHub pages, which I use for all of my static hosting. It was relatively straightforward, and I easily got the page deployed.

# Next Steps
I enjoyed seeing how far the Angular ecosystem has progressed since AngularJS! I like the component architecture and the syntax seems to have improved. I thought everything was well integrated, and the CLI was great.

That being said, I don't see a personal need or use for Angular 5. The package is huge, and it was much harder for me to find support on issues than it is for React or Vue (probably because of the rapid versioning). If I wanted static typing, I would probably use flow in React or integrate TypeScript in Vue. I think Angular is trying to be the go-to framework for enterprise apps that value stability. Having the Google name behind it is super important for that and the large domain that it covers probably helps as well. I still prefer the structuring of React and Vue code -- I prefer the increased flexibility they offer.

In short, I liked working with Angular 5 and I wouldn't hesitate to create another app using it if I was asked to, but I wouldn't choose to use it myself in comparison to other frameworks. Vue is so easy to learn and its ecosystem is so consistent, and React's architecture has been transformational to the industry. I didn't dislike anything about Angular 5, I just wasn't as drawn to it as I have been to other tools.

[Full Code](https://github.com/aspittel/helpful-coding-resources/)
[App](https://www.alispit.tel/helpful-coding-resources/)

**Part of my [On Learning New Things](https://medium.com/on-learning-new-things/learning-new-things-f4db7f16724) Series**
