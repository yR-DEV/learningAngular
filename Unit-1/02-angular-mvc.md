# Angular MVC

Angular utilizes a MVC(-like) design pattern...

## Model

**What is it?**

It's where your application's data lives, representing the current state.

**How is it defined?**

Via JavaScript, within Angular Services

**What does it generally include?**

1. Access to the persistent layer/store
1. Business logic
1. CRUD functions
1. Data validation

## View

**What is it?**

It displays your application's data (from the model) for the end user and handles user interaction.

**How is it defined?**

Via HTML, CSS, some JavaScript, Angular directives ('ng-'attributes) and two-way data bindings, within the HTML document

**What does it generally include?**

1. Markup for -
  - presenting data
  - handling user interactions
  - showing and hiding elements
1. Filters to limit/organize data
1. Expressions/logic

## Controller (often called the view-model)

**What is it?**

Control the relationship between the Models and Views by exposing parts of the model and managing state.

**How is it defined?**

Via JavaScript within Angular Controllers

<hr>

**Resources:**

- [MVC and MVVM with AngularJS](http://codechutney.in/blog/javascript/mvc-and-mvvm-with-angularjs/)
