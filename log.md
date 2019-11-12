# TASC Take-Home Excercise Log

## 11092019 - 10:00AM
I'm planning to time-box this exercise to two hours.  Since I don't know Angular, Typescript or the related required technologies, the first step is to learn those.  As this isn't strictly part of the exercise, I'm not going to count it against the timebox.

I'm looking for a good intro to Typescript for Javascript programmers while Node.js builds.  I am enticed by claims of Typescript's object-orientation as I do miss working with truly OOP languages like C#, Objective-C, etc.

I really wanted to dilike Typescript, but if you're in a situation where you have to write Javascript when you'd rather be using an OOP language, then Typescript provides a way to do that.  Honestly, it seems like someone wanted to make Javascript work more like C#, and I do miss programming in C#.


## 11102019 - 9:00AM

Node.js is built & installed, installing Typescript & Angular next.  

That went as expected, so now it's time to try writing some Typescript.

Finished the Typescript tutorial and it went well, the compiler is surprisingly helpful.  Next was setting-up Angular, and generating the "hello world" app, which went smoothly.  Next is a more detailed Angular tutorial, which wants to be done on some cloud-hosted dev thing, but I'm going to try and do it locally because I want to learn how to do it the right way first.

That didn't work, the online thing uses sample code embedded in the site, so instead I just read the examples, read the docs, and I think I'm ready to start working on the actual exercise.


## 11102019 - 12:30PM

Working-through a "local build" tutorial and building an app from scratch taught me a lot.  Here's a few notes for later:

* Component - UI template & events
* Service - connects components
* Router - provides navigation
* Create an application: `ng new <name>`
* Create a component: `ng generate component <name>`
* Create a service: `ng generate service <name>`
* Add a module: `ng generate module app-routing --flat --module=app`


## 11112019 - 7:30AM

Today we're going to finally dive-in to creating the application.  

### Requirements

* ~~Angular~~
* NGRX
* ~~RxJS~~
* ~~TypeScript~~
* ~~unit tests~~


Based on the requirements and what I now know about Angular, here's the structure I have in mind:

* ~~A products component that displays all products~~
* ~~A cart-contents component that displays products in the cart~~
* ~~A product service that provides a list of products to shop for~~
* ~~A cart service that temporarilly stores products while shopping~~
* ~~A router to navigate between components and support reciept links~~

### Issues

* Cart contents are ephemereal (will be lost of browser is reloaded)
* ~~Product component needs "add to cart" button~~
* ~~Calcuate and display various fields in the cart component~~
* Add "is empty" note to the UI when lists are empty
* Internationalization should be addressed
* ~~Round tax to nearest 0.05~~
* When a product is added to the cart more than once it should increment the quantity, not add duplicate items
* Add a "place order" button to the basket to generate a static receipt
* Some system configuration parameters for tax, duty, etc.
* How to persist order/reciept data
* Exactly what NGRX is and how to incorprate it

## 11122019 - 8:30AM

Jumping over to testing today since that's one of the requirements in the first sentence of the assignment.

* generate coverage report: `ng test --no-watch --code-coverage`

### Results:

```
Statements   : 48.44% ( 31/64 )
Branches     : 0% ( 0/4 )
Functions    : 54.55% ( 12/22 )
Lines        : 43.86% ( 25/57 )
```

Fixed a few of the generated tests that were failing, and created a couple new tests as well.  Stopped short of going for extensive code coverage for the sake of time.

### Updated Results:

```
Statements   : 53.13% ( 34/64 )
Branches     : 0% ( 0/4 )
Functions    : 68.18% ( 15/22 )
Lines        : 49.12% ( 28/57 )
```

The only thing I think I've completely missed is NGRX.  It wasn't obvious to me looking at the website how it applies to this exercise, but I'm sure that's just because I'm new to Angular, and maybe because there's no back-end component to this application?

I think this covers the bases of the exercise.  At this point I'm having a pretty good time with Angular and Typescript, and it would be fun to take the application further, but I should probably call it so I can submit it for review.


# References

* http://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
* https://angular.io/start
* https://dev.to/utukku/test-driven-development-in-an-angular-world-3h8g
* https://ngrx.io/guide/store
* https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html
