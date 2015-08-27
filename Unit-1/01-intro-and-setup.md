# Introduction and Setup

### How This Curriculum Works

Unit 1 - The Basics

 * [Intro and Setup](/Unit-1/01-intro-and-setup.md)
 * [2 Way Data Binding](/Unit-1/02-data-binding.md)
 * [Expressions and Filters](/Unit-1/03-expressions-and-filters.md)
 * [Intro to Controllers](/Unit-1/04-intro-to-controllers.md)
 * [Built-In Directives](/Unit-1/05-built-in-directives.md)
 * [Angular Events](/Unit-1/06-intro-to-events.md)
 * [Unit 1 Assessment Reddit Clone](/Unit-1/07-reddit-clone.md)

Unit 2 - The Less Basic Basics

 * [A New Structure](/Unit-2/01-a-new-structure.md)
 * [Routing](/Unit-2/02-routing.md)
 * [Custom Filters](/Unit-2/03-custom-filters.md)
 * [HTTP Service](/Unit-2/04-http-service.md)
 * [Movie Search App](/Unit-2/05-movie-search.app.md)
 * [Dependency Injection](/Unit-2/06-dependency-injection.md)
 * [Services and Promises](/Unit-2/07-services-and-promises.md)
 * [Shopping Cart App](/Unit-2/08-shopping-cart-app.md)
 * [Custom Directives Part 1](/Unit-2/09-custom-directives-part1.md)
 * [Custom Directives Part 2](/Unit-2/10-custom-directives-part2.md)
 * [Caffeine Meter Project](/Unit-2/11-caffeine-meter-custom-directive.md)

Unit 3 - Refactoring, Angular Style, and Backend Integration

 * [Firebase Intro](/Unit-3/01-firebase-intro.md)
 * [AngularFire Intro](/Unit-3/02-angularfire-intro.md)
 * [AngularFire Arrays and CRUD](/Unit-3/03-angularfire-arrays-and-crud.md)
 * [AngularFire Project](/Unit-3/04-angularfire-project.md)
 * [AngularFire Auth](/Unit-3/05-angularfire-auth.md)
 * [Angular Structure and Style](/Unit-3/06-structuring-angular-apps.md)
 * [Angular + Express Setup](/Unit-3/07-angular-with-express-setup.md)
 * [Angular + Express Project](/Unit-3/08-angular-with-express-project.md)
 * [Angular + Rails Setup](/Unit-3/09-angular-with-rails-setup.md)


Before you move on to the next lesson, you should:

* Complete all exercises and SAVE EVERY EXERCISE FOR FUTURE USE
* Answer all questions in ONE MARKDOWN FILE

Be prepared to show your exercises to instructors and engage in discussions about the questions.

Let's get started!

### What is Angular?

According to the official Angular introduction, Angular is a:

> client-side technology, written entirely in JavaScript. It works with the long-established technologies of the web (HTML, CSS, and JavaScript) to make the development of web apps easier and faster than ever before.

It boils down to this: **Angular helps us build complex, single-page applications very quickly.**

### Setup

We're going to start by setting up a very simple Angular app. Soon we'll learn about patterns for structuring complicated Angular apps, but for now we're just going to use a single `index.html` file with a few scripts.

* Create an `index.html` file.
* Add Angular.  For now were going to use this CDN: `https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.3/angular.js`.
* Add jQuery.  jQuery is (sort of) a dependency of Angular.
* Add the `ng-app` attribute to the `<html>` element in your document.  This declares everything inside of the `<html>` element part of an Angular app. We will see this 'ng' prefix a lot in Angular.
* Test it out!  Add the following line anywhere inside of the `<body>` tag: `{{1 + 6}}`.  Open the page in your browser.  If Angular is setup correctly, you should see `7` displayed.

Questions:

* Why learn Angular JS over other frameworks like Ember, Backbone, Knockout, etc?
* People have some very strong opinions about Angular.  What are 3 common complaints people have about Angular?
* Is Angular an MVC framework?
* Why did I say jQuery is "sort of" a dependency of Angular? Does it depend on it or not?!
* Read the docs for `ng-app`. What is it and what does it do?
* What does `ng` stand for?

Resources:

* [Angular Docs](https://docs.angularjs.org/api)
* [Thinking in Angular](http://stackoverflow.com/questions/14994391/thinking-in-angularjs-if-i-have-a-jquery-background/15012542#15012542)
