# Algorithms

<details>

<summary>Click to view Programs</summary>

### JS - Algorithms


## Array
- [x] [1. Flatten Array](/algorithms/array/flatten_array.js)
- [x] [2. Sorting Array](/algorithms/array/sorting.js)
- [x] [3. Nth Largest Number from Array](/algorithms/array/nth_largest.js)
- [ ] [4. Maximum number of words that appear in a single sentence]()
- [x] [5. Sum Pairs or Tow Sum](/algorithms/array/sum_pairs.ts)
- [ ] [6. Sum Pairs Multi Dimension Array]()
- [ ] [7. Find the numbers which are not common to two arrays]()
- [x] [8. Move Zeros Right](/algorithms/array/move_zeros_right.js)
- [ ] [9. Max word count from Array]()
- [ ] [10. Missing Number from Array]()
- [x] [11. Find Largest Number]()



## Number
- [x] [1. Count Digits](/algorithms/number/count_digits.js)
- [x] [2. Reverse Number](/algorithms/number/reverse_number.js)
- [x] [3. Factorial](/algorithms/number/factorial.js)
- [x] [4. Prime Number](/algorithms/number/prime_number.js)



## String
- [x] [1. Anagrams](/algorithms/string/anagrams.js)
- [ ] [2. Max word count from String]()
- [x] [3. Reverse String](/algorithms/string/reverse_string.js)
- [ ] [4. Reverse Words]()

</details>

---

# Important Interview Questions and Answers

# Javascript

<details>

<summary>Click to view Javascript</summary>


## Topics

### Basic of Javascript
  - Variables
    - var
    - let
    - const
  - hoisting of variables

### Functions in JS
  - Arrow Functions
  - Higher order functions
### Arrays and Objects
  - Arrays Destructuring
  - Object Destructuring
  - rest operator
  - spread operator

### Conditional in Javascript
  - if else
  - ternary operator
  - using && and ||
  - Optional Chaining

### Array Methods
  - map()
  - filter()
  - reduce()
  - sort()
### Event Listeners
  - onclick
  - onBlur
  - onChange
  - onFocus
### setTimeout() & setInterval()

### Asynchronous Events
- Callbacks
- Callback Hell
- Promises
- Async / Await

#### 1. What is javascript?
- JavaScript is a lightweight, interpreted, object-oriented scripting language. 
- It allows you to build interactivity into static HTML pages. Netscape, Internet Explorer, and other web browsers include the language's general-purpose core.


#### 2. What is Props & State in JS?
#### 3. Diff b/w var, let and const in JS?
| keyword          |  const   | let   | var   |
|:-----------------|:--------:|------:|------:|
| global scope     | no       | no    | yes   |
| function scope   | yes      | yes   | yes   |
| block scope      | yes      | yes   | no    |
| can be reassigned| no       | yes   | yes   |

#### 4. What is hoisting in JS?
#### 5. Diff between primitive & non-primitive data types?
#### 6. What is scope in Javascript?
#### 7. What is currying in JavaScript?
#### 8. What is a closure in JavaScript?
#### 9. Is javascript a statically typed or a dynamically typed language?
#### 10. What is an Immediately Invoked Function(IIF) in JavaScript?
#### 11. Explain Higher Order Functions in javascript.
#### 12. Explain call(), apply() and, bind() methods.
#### 13. Explain Scope and Scope Chain in javascript.
#### 14. What are callbacks?
#### 15. What is recursion in a programming language?
#### 16. What is promises in javascript?
#### 17. What is the rest parameter and spread operator?
#### 18. What is Callbacks in Javascript? ex
#### 19. What is Async/Await in Javascript?
#### 20. What is the difference between slice and splice?
#### 21. What is event loops in Javascript and example?
#### 22. What are the differences between cookie, local storage and session storage
#### 23. What is a callback hell?
#### 24. What is a strict mode in javascript
#### 25. What is the difference between null and undefined
#### 26. What is a spread operator?
#### 27. What is a rest parameter?
#### 28. What are the differences between javascript and typescript

|  Feature                       | Typescript                            |  Javascript                                      |
|:------------------------------:|:-------------------------------------:|:------------------------------------------------:|
|  Language paradigm             | Object oriented programming language  | Scripting language                               |
|  Typing support                | Supports static typing                | It has dynamic typing                            |
|  Modules                       | Supported                             | Not supported                                    |
|  Interface                     | It has interfaces concept             | Doesn't support interfaces                       |
|  Optional parameters           | Functions support optional parameters | No support of optional parameters for functions  |

#### 29. What are the advantages of typescript over javascript?

Below are some of the advantages of typescript over javascript,

- TypeScript is able to find compile time errors at the development time only and it makes sures less runtime errors. Whereas javascript is an interpreted language.
- TypeScript is strongly-typed or supports static typing which allows for checking type correctness at compile time. This is not available in javascript.
- TypeScript compiler can compile the .ts files into ES3,ES4 and ES5 unlike ES6 features of javascript which may not be supported in some browsers.

#### 30. How do you swap variables in destructuring assignment?
- Whereas using a destructuring feature, two variable values can be swapped in one destructuring expression.
- Let's swap two number variables in array destructuring assignment

```JS
var x = 10,
    y = 20;

[x, y] = [y, x];
console.log(x); // 20
console.log(y); // 10
```

#### 31. What are the differences between for...of and for...in statements

- for..in iterates over all enumerable property keys of an object
- for..of iterates over the values of an iterable object.


#### 32. What is the difference between setTimeout, setImmediate and process.nextTick?
#### 33. What is debouncing?
#### 34. What is throttling?

Ex, 

```JS
const throttle = (func, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
window.addEventListener("scroll", () => {
  throttle(handleScrollAnimation, 100);
});
```
#### 35. What is optional chaining?

Ex, 

```JS
const adventurer = {
  name: "Alice",
  cat: {
    name: "Dinah",
  },
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// expected output: undefined
```



</details>

---
# Typescript

<details>

<summary>Click to view TypeScrip</summary>


#### 1. What is typescript?
#### 2. List the Advantages of TypeScript?
#### 3. List the disadvantages of TypeScript
#### 4. What is JSX?
#### 5. What are the primitive types in TypeScript?
#### 6. Are all object-oriented principles supported by TypeScript?
Yes, it supports the OOP principles such as,

- Inheritance
- Abstraction
- Polymorphism
- Encapsulation

</details>

---

# React

<details>

<summary>Click to view React</summary>

#### 1. What is React?

- It is open-source front-end JavaScript library for building user interfaces based on components.
- It is is used to build single page applications.
- It allows us to create reusable UI components.

#### 2. What are the features of ReactJS?
  - JSX (JavaScript Syntax Extension)
  - Virtual DOM
  - State and Props
  - One-way data binding
  - Performance
  - Extensions
  - Conditional statements
  - Components
  - Simplicity



</details>

---

# NodeJs

<details>

<summary>Click to view NodeJs</summary>



</details>


---
# Express

<details>

<summary>Click to view Express</summary>


#### 1. What is Express.js?
- Express.js is a web application framework for Node.js.
- It is an open-source platform for building server-side applications in JavaScript
- It provides excellent features and tools to developers to develop web applications efficiently
#### 2. Which are the arguments available to an Express JS route handler function?

Following are the arguments that are available to an Express.js route handler-function:

- **Req:** the request object
- **Res:** the response object
- **Next (optional):** It is a function employed to pass management to one of the above route handlers.

#### 3. What is Middleware in Express.js? What are the different types of Middleware?

Middleware is a function invoked by the Express routing layer before the final request handler.

Middleware functions are used to perform the following tasks:

- It is used to execute any code.
- It is also used to make changes to the request and the response objects.
- It is responsible for ending the request-response cycle.
- It can call the next middleware function in the stack.

Type of Middleware

Following are the main types of Middleware:

  - Application-level Middleware
  - Router-level Middleware
  - Error-handling Middleware
  - Built-in Middleware
  - Third-party Middleware



</details>

---

# GraphQL

<details>

<summary>Click to view GraphQL</summary>

1. What is GraphQL?

- GraphQL is a query language.
- It is used for APIs and includes the runtime for query execution.

2. List a few companies that use GraphQL.

- Many large organizations used
  - Github 
  - Facebook
  - Pinterest
  - Intuit
  - Coursera
  - Shopify
  - DailyMotion
  - Yelp
  - and others, use GraphQL.

3. What is a query language?

- A query language, in simple terms, uses queries to retrieve data from a database.
- GraphQL is a query language that is used to create APIs.

4. Do you consider GraphQL to be a database technology?

- GraphQL is not a database technology. It is a query language for APIs, not a database query language.

5. What is the response type of a GraphQL query?

- GraphQL queries return JSON responses. The response is determined by the query used in the request.

6. What do you know about GraphQL arguments?

- When we need to request specific data in GraphQL Queries and Fields, we use arguments.

7. What was the reason behind the development of GraphQL?

- GraphQL was developed by Facebook to provide a more efficient and flexible way for apps to request and receive data from servers, addressing the limitations of REST APIs.

8. What are the reasons behind using GraphQL while we already had an API named REST?

- GraphQL offers advantages over REST due to its flexibility, allowing clients to request only the data they need, reducing over-fetching.
- It simplifies multiple requests into one, optimizing network usage. 
- Also, it offers a strong type system for data validation, introspection for easy documentation, and real-time capabilities, improving developer productivity.


9. How to do Error Handling in GraphQL?

- In GraphQL, error handling involves returning error information in the response.
- You can use GraphQL's built-in error type to include specific error messages or codes.
- Additionally, you can define custom error handling logic in your server code to handle exceptions and provide meaningful error messages to clients.

> **IMPORTANT**
10. What are the primary operations supported by GraphQL?

GraphQL supports three operation types: query, mutation, and subscription.

 - __Query__ used for requesting is a read operation.
 - **Mutation** is used for write operations, and the
 - **Subscription** is used to listen for any changes to the data. 
   - If the client subscribes to that event, the server sends a notification message after data changes.

11. In GraphQL, what is the purpose of an interface?

- An interface is used in GraphQL to list the standard fields of a GraphQL object. Other objects can also use this interface to inherit properties.

12. In GraphQL, what is the union?

- In GraphQL, we must sometimes represent multiple objects, which is why the union is used. A union allows the user to specify more than one type as a return type.

13. What are Enums in GraphQL used for?

- In GraphQL, an enum or enumeration type is a particular type of scalar used to declare a type, including a detailed list of allowed values.

14. What are the main operations that GraphQL supports?

GraphQL supports three main operations:

- Query: Retrieves data from the server, allowing clients to specify exactly what information they need.
 
- Mutation: Modifies data on the server, enabling clients to create, update, or delete data.
 
- Subscription: Establishes real-time connections for receiving updates when data changes, ideal for live notifications and dynamic content.

15. How do you prevent nested attack on GraphQL server?

To prevent nested query attacks on a GraphQL server, you can:

- Set depth limits: Limit the nesting depth of queries to prevent excessively complex or recursive queries.
 
- Implement query complexity analysis: Calculate query complexity and reject queries that exceed a predefined threshold.
 
- Use rate limiting: Restrict the number of queries a client can make within a specified time frame.

> **IMPORTANT**
16. What does resolver do in GraphQL?

-A resolver is used in GraphQL to handle queries and generate GraphQL responses.

> **IMPORTANT**
17. Difference between Mutation and Query?

- Query:
  - It should be used only for READ operations on the database.
- Mutation:
  - It should be used only when you perform CREATE / UPDATE / DELETE something in the database.

- Summary
    - If you just intend to read data without modifying(means without deleting, editing or creating) anything in your database, use a query. If you intend to delete, create, anything at database level, use a mutation.

18. What are the most significant advantages of using GraphQL over REST?
- GraphQL doesn't support an automatic caching system, while REST uses caching automatically.
- GraphQL provides high consistency across all platforms, while In REST, it is hard to get consistency across all platforms.
- You can change the request data format in GraphQL, but it is not possible to do the same in REST.

- The development speed in GraphQL is faster than REST.

19. What is subscription in GraphQL?

- In GraphQL, the subscription is used for listening for any data changes. The server sends a notification message to the client after any data changes, if the client is subscribed to that event.



</details>

---