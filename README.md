## Algorithms

<details>

<summary>Click to view Programs</summary>

### JS - Algorithms


## Array
- [x] [1. Flatten Array](/algorithms/array/flatten_array.js)
- [x] [2. Sorting Array](/algorithms/array/sorting.js)
- [x] [3. Nth Largest Number from Array](/algorithms/array/nth_largest.js)
- [ ] [4. Maximum number of words that appear in a single sentence]()
- [ ] [5. Sum Pairs]()
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

## Interview Questions and Answers

---
### Javascript

<details>

<summary>Click to view Javascript</summary>

#### 1. What is javascript?
- JavaScript is a lightweight, interpreted, object-oriented scripting language. 
- It allows you to build interactivity into static HTML pages. Netscape, Internet Explorer, and other web browsers include the language's general-purpose core.


#### 2. What are the features of JavaScript?

These are some of the features of JavaScript:

- Cross-platform compatible
- Open-source
- Object-oriented
- Integration with various front-end and back-end technologies

#### 3. Why are promises used in JavaScript?

- Promises help in managing asynchronous operations, such as server requests in JavaScript. Earlier, callbacks were used for the same purpose.
- However, callbacks have limited functionality and, thus, can make the code unmanageable.
- There are four states of the promise object:

- A promise constructor uses a callback with two parameters - resolve and reject - to create a promise.
- The resolve function is called when the asynchronous operation has succeeded.
- The reject function is called when the asynchronous operation has failed.

**Pending:** This is the first state of the promise and shows that the promise has been neither fulfilled nor rejected.

**Fulfilled:** This state represents the completion of the asynchronous operation. In other words, the promise has been fulfilled.

**Rejected:** This state represents the failure of the asynchronous operation due to some reason. In other words, the promise has been rejected.

**Settled:** This is the last state of the promise, showing that the promise has been either fulfilled or rejected.

#### 4. Is JavaScript a case-sensitive language?

- Yes, JavaScript is a case sensitive language. 
- variables, function names, and any other identifiers must always be typed with a consistent capitalization of letters.

#### 5. What is the use of isNaN function?
- isNan function returns true if the argument is not a number; otherwise, it is false.

#### 6. What is ‘this’ keyword in JavaScript?
- ‘This’ keyword refers to the object from where it was called.

#### 7. What are all the types of Pop up boxes available in JavaScript?

- Alert - When an alert box pops up, the user has to click the “OK” button for further proceeding.
- Confirm - When a pop box appears, the user only has to do either click on the “OK” button or click on the “CANCEL” button.
- Prompt - When a prompt box pops up, the user has to click either on “OK” or “Cancel” to proceed after entering an input value.

> [!IMPORTANT]
#### 8. What is the difference between an alert box and a confirmation box?

- An alert box displays only one button, which is the OK button.
- But a Confirmation box displays two buttons, namely OK and cancel.

#### 9. What do you mean by closures in JavaScript? When are they used?


#### 10. What do you mean by anonymous function in JavaScript? Describe its properties.

- A function said to be an anonymous function when the function is declared without any named identifier.
- In other words, we can say that the anonymous function is inaccessible after their declaration in a program or a code.

```
var anon = function()
              {
              alert('I am anonymous');
              };
anon();
```

#### 11. Explain Hoisting in JavaScript. 

- Hoisting is a JavaScript behaviour where anywhere the variable/functions are declared they are moved to the top of the scope. Note the scope may be local or global.


Ex: Before Hoisting                 Ex: After Hoisting

        a = 1;                          var a;

        alert ( ‘ a = ‘  + a);          a = 1;

        var a;                          alter( ‘ a = ‘ + a);

> [!IMPORTANT]
#### 12. What is Currying in JavaScript?

```
function curry(f) { // curry(f) does the currying transform
return function(a) {
    return function(b) {
      return f(a, b);
    };
  };
}
```

#### 13. What is the difference between null and undefined?
- **null** is an assignment value that represents no value or an empty value
- **undefined** is a variable that has been declared but not assigned a value.

![](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/2_javascript-interview.jpg)

#### 14. What are closures in JavaScript?


#### 15. What is a callback function in JavaScript?
- callback function is a function passed as an argument to another function, which is then invoked inside the outer function
- It allows asynchronous or event-driven programming.


#### 16. What is the purpose of the “this” keyword in JavaScript?

- The this keyword refers to the object that is executing the current function or method.
- It allows access to object properties and methods within the context of that object.

Ex,
![](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/4_javascript-interview.jpg)


#### 17. What is the difference between “var” and “let” keywords in JavaScript?

- **var** keyword declares a global variable, It can be accessed from anywhere in the code.
- **let** keyword declares a local variable, It can only be accessed within the block of code where it is declared

#### 18. What is the difference between “let”, “const”, and “var”?

- **let** and **const** were introduced in ES6 and have block scope.
- **let** is reassignable, and **const** is non-reassignable.
- **var** is function-scoped and can be redeclared and reassigned throughout the function.

Ex,

![](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/9_javascript-interview.jpg)


#### 19. What is implicit type coercion in JavaScript?

- Implicit type coercion is a JavaScript concept that refers to the process of converting a value from one type to another.
- If you try to add a string to a number, JavaScript will implicitly coerce the string to a number before performing the addition operation.

Ex,

![](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/10_javascript-interview.jpg)

#### 20. What are higher-order functions in JavaScript?

- Higher order functions are functions that can accept other functions as arguments or return functions as their results. - It enable powerful functional programming patterns in JavaScript.

Ex, 

![](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/14_javascript-interview.jpg)

#### 21. What is the purpose of the bind() method in JavaScript?

- **bind()** method is used to create a new function with a specified this value and an initial set of arguments.
- It allows you to set the context of a function permanently.

Ex, 

![](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/15_javascript-interview.jpg)

#### 22. What is the difference between function declarations and function expressions?

- Function declarations are defined using the function keyword, while function expressions are defined by assigning a function to a variable. 
- Function declarations are hoisted, while function expressions are not.

Ex,

![](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/16_javascript-interview.jpg)


#### 23. What are the different types of errors in JavaScript?

JavaScript can throw a variety of errors, including:

- **Syntax errors:** These errors occur when the JavaScript code is not syntactically correct.
- **Runtime errors:** These errors occur when the JavaScript code is executed and there is a problem.
- **Logical errors:** These errors occur when the JavaScript code does not do what it is supposed to do.

#### 24. What is memoization in JavaScript?

- Memoization is a technique that can be used to improve the performance of JavaScript code.
- Memoization works by storing the results of expensive calculations in a cache

- For example, the following code calculates the factorial of a number. The factorial of a number is the product of all the positive integers from one to the number.

Ex,
![](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/17_javascript-interview.jpg)

This code can be memoized as follows:

![](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/18_javascript-interview.jpg)


#### 25. What is recursion in JavaScript?
- Recursion is a programming technique that allows a function to call itself.
- Recursion can be used to solve a variety of problems, such as finding the factorial of a number or calculating the Fibonacci sequence.

Ex,

![](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/19_javascript-interview.jpg)


#### 26. How do you handle errors in JavaScript?

- Errors in JavaScript can be handled using try-catch blocks. The try block contains the code that may throw an error, and the catch block handles the error and provides an alternative execution path.

Ex, 

![](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/27_javascript-interview.jpg)

#### 27. What is the difference between querySelector and getElementById?

- **querySelector** is a more versatile method that allows you to select elements using CSS-like selectors.
- **getElementById** specifically selects an element with the specified ID.

EX,

![](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/31_javascript-interview.jpg)

#### 28. What is the purpose of the setTimeout() function in JavaScript?

- setTimeout() function is used to delay the execution of a function or the evaluation of an expression after a specified amount of time in milliseconds.

Ex,

![](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/32_javascript-interview.jpg)

#### 29. What is the difference between localStorage and sessionStorage in JavaScript?

- **localStorage** persists data even after the browser window is closed and is accessible across different browser tabs/windows of the same origin.
- **sessionStorage** stores data for a single browser session and is accessible only within the same tab or window.

Ex, 

![](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/36_javascript-interview.jpg)

#### 30. What is the purpose of the map() function in JavaScript?

- map() function is used to iterate over an array 
- It returns a new array with the results of the transformation.

Ex, 

![](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/38_javascript-interview.jpg)


#### 31. What is the difference between splice() and slice()?

- **splice()** is used to modify an array by adding, removing, or replacing elements at a specific position.
- **slice()** is used to create a new array that contains a portion of an existing array, specified by the starting and ending indices.

Ex, Splice():

![](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/39_javascript-interview.jpg)


Ex, Slice():

![](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/40_javascript-interview.jpg)


#### 32. What is the purpose of the reduce() function in JavaScript?

- **reduce()** function is used to reduce an array to a single value by applying a function to each element and accumulating the result.

Ex,

![](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/41_javascript-interview.jpg)


#### 33. What is the purpose of the window object in JavaScript?

- window object represents the browser window.
- window object can be used to access the browser’s features, such as the location bar, the status bar and the bookmarks bar


#### 34. What is the purpose of the async and await keywords in JavaScript?

- **async** keyword is used to define an asynchronous function.
- **await** keyword is used to pause the execution of an async function until a promise is fulfilled or rejected.

#### 35. Difference between “==” and “===”?



#### 36. What are JavaScript Data Types? 



</details>

---

### React

<details>

<summary>Click to view React</summary>

1. What is React?

- It is open-source front-end JavaScript library for building user interfaces based on components.
- It is is used to build single page applications.
- It allows us to create reusable UI components.

2. What are the features of ReactJS?
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

### NodeJs

<details>

<summary>Click to view NodeJs</summary>

#### What is an event loop in Node.js?

An event loop in Node.js handles all the asynchronous callbacks in an application. It is one of the most important aspects of Node.js and the reason behind Node.js have non-blocking I/O. Since Node.js is an event-driven language, you can easily attach a listener to an event and then when the event occurs the callback will be executed by the specific listener. Whenever functions like setTimeout, http.get, and fs.readFile are called, Node.js executed the event loop and then proceeds with the further code without waiting for the output. Once the entire operation is finished, Node.js receives the output and then executes the callback function. This is why all the callback functions are placed in a queue in a loop. Once the response is received, they are executed one by one.

#### 1. What is Node.js?
- Node.js is a JavaScript Runtime Environment that is useful in developing server-side applications.

#### 2. Explain REPL in Node.js.

REPL stands for Read Eval Print Loop. REPL performs tasks related to reading, executing, printing, and looping. The server contains several ad-hoc Java statements that REPL can help execute. With REPL, the JavaScript can enter the shell post directly and reliably perform tasks like debugging, testing, and experimenting.

#### 3. Is Node.js cross-platform?

- Yes, Node.js is cross-platform and we can run it on Windows, Linux, Unix, and macOS.

#### 4. Is Node.js open-source or not?

- Node.js is open-source and cross-platform.

#### 5. What can we build with Node.js?

Node.js developers can build various applications, including web applications, chat applications, real-time applications, streaming applications, APIs, and desktop applications, etc.

#### 6. Does Node.js use JavaScript?

Node.js is based on JavaScript and it uses the V8 engine developed by Google. It is used for building server-side applications.

#### 7. What do you mean by I/O?

I/O stands for input/output, which helps write and read files and network operations.

#### 8. What are the two data types categories in Node.js?

Node.js supports two categories of data type - primitive and non-primitive.

#### 9. Name types of API functions supported by Node.js.

Asynchronous non-blocking and synchronous blocking are the two different types of API functions that Node.js supports.

#### 10. Why does Google use V8 for Node.js?

Google uses V8 for Node.js because it is faster and more efficient. It compiles the JavaScript code directly into machine code.

#### 11. What is npm?

- Npm stands for the Node package manager.
- It is used for installing, updating, and uninstalling packages in your application.
-  It helps to manage dependencies in Node.js applications.

#### 12. What is unit testing?

- Unit testing in Node.js is a process of testing individual units of code.

#### 13. What is the blocking code?

- Blocking code is code that cannot be executed until the current code is completely executed.

#### 14. Give some examples of async functions.

- Some examples of async functions are setTimeout(), setInterval(), and process.nextTick()

#### 15. Which library provides Node.js with a JavaScript engine?

- The V8 library provides Node.js with the JavaScript engine.

#### 16. How is JavaScript different from Node.js?

- **JavaScript** is a programming language, whereas Node.js is an interpretation and environment for JavaScript.
- **Node.js** is used for performing non-blocking operations of any operating system. On the other hand, JavaScript is used for comprehensive application development.

#### 17. What are some features of Node.js?

- It is fast, scalable, open-source, and asynchronous.

#### 18. What are security implementations within Node.js?

- The different types of security implementations within Node.js include error handling, authentications and authorization, data sanitization, encryption, and logging and monitoring

#### 19. What is Package.json?

Present in the root directory of a Node application/module, package.json defines the properties of a package including dependencies, metadata, and configuration options.

#### 20. Is Node.js single or multi-threaded?

- Node.js is single-threaded.

#### 21. What are the clauses used in promise object in Node.js?

In JavaScript, a Promise object can have three states:

**Pending:** The initial state of the promise before it is resolved or rejected.

**Fulfilled:** The state of a promise representing a successful operation. This is also sometimes called "resolved."

**Rejected:** The state of a promise representing a failed operation. To create a Promise object, you must pass a function (often called an executor function) to the Promise constructor. This function takes two arguments: resolve and reject. These are functions that you call to either fulfill or reject the promise.


#### 22. How to obtain the IP address of the user in Node.js?

- We use req.connection.remote address to get the IP address.

#### 23. How is Ajax different from Node.js?

- **Ajax** is a client-side technology used to make web pages more interactive and dynamic. 
- **Node.js** is a server-side technology used to build scalable, high-performance web applications.

#### 24. Explain non-blocking in Node.js.

Non-blocking in Node.js means that the program can continue to execute other code even while waiting for I/O operations to complete.

#### 25. What is the call-back function used for?

The call-back function is used to execute a function after a certain event has occurred.

#### 26. Explain how blocking is prevented in Node.js.

Because of the event mechanism in Node.js, a callback function is called every time an event starts. This prevents blocking in Node.js.

#### 27. How many layers are there in Node.js application architecture?

There are three layers in the application architecture - API, service, and integration layers.

#### 28. Does Node.js applications buffer data?

No. Node.js applications do not buffer data.

#### 29. Is it possible to avoid callback hells and how?

- It typically contains multiple nested callback functions and very hard to read and debug

- It is possible to avoid callback hells by using promises; they can help to make the code more readable and easier to debug. You can also avoid callback hells using async/wait, libraries, and modularization.

Ex,

```
async_A(function(){
  async_B(function(){
    async_C(function(){
      async_D(function(){

      });
    });
  });
});
```

#### 30. Are duplex streams readable and writable?

- Duplex streams are both readable and writable.
- This means that they can be used to read data from a source and write data to a destination.

#### 31. What is the difference between Angular and Node.js?

- Angular is a front-end web application framework.
- Node.js is a back-end runtime environment.

#### 32. Which function is used to fire an event?

The emit() function is used to fire an event.

#### 33. Explain call back.

In Node.js, a callback function is a function that is passed as an argument to another function and is called back at a later point in time. The purpose of using a callback function is to handle asynchronous operations.

In asynchronous programming, a function that initiates an asynchronous operation returns immediately while the operation continues in the background. When the operation is completed, the callback function is called with the result of the operation.

#### 34. How many types of streams are there in Node.js?

There are four types of streams in Node.js: readable, writable, duplex, and transform.

**Readable:** The readable streams are used to read data from a specific source.

**Writable:** These streams are utilized for writing data to the destination.

**Duplex:** The duplex streams are used for both reading and writing data.

**Transform:** The transform stream enable the data to be transformed while it is being read or written. For example, you can use transform stream for data compression or data encryption as it is transmitted over the network.

#### 35. What is the difference between setImmediate() and setTimeout()?

The difference between setImmediate() and setTimeout() is that 
- **setImmediate()** will execute the callback function immediately.
- **setTimeout()** will wait for a specified time before executing the callback function.

#### 36. Explain the control flow function.

- A control flow function controls the order in which code is executed. Usually, the code runs from the first line to the last line unless the structures (loops and conditions) changes the control flow.

- Control flow function is a generic piece of code that runs in between several asynchronous function calls.

- The control flow function is a common code snippet, which executes whenever there are any asynchronous function calls made. It is used to evaluate the order in which these functions are executed in Node.js.


#### 37. What is the function of module.exports?

module.exports is a Node.js module that allows you to export objects, functions, and variables from your code. You can use it to create modules that can be imported and used in other Node.js programs.

> **IMPORTANT**
#### 38. What is an express framework?

The express framework is a web application framework that helps you easily create server-side applications.

#### 39. When are we required to use a cluster module in Node.js?

It is used when you want to disperse request processing over multiple Node.js processors. Mostly this is done to ramp up the ability to handle more requests per second.

> **IMPORTANT**
#### 40. What is the purpose of EventEmitter?

The purpose of EventEmitter is to provide a mechanism for event-driven programming. The EventEmitter class provides a set of methods that allow you to emit events, listen for events, and remove event listeners. When an event is emitted, any listeners that are registered for that event will be invoked. This allows developers to write code that can respond to changes in state, user actions, or other events within the application.

#### 41. Write a code to make post requests in Node.js.
![](https://d2mk45aasx86xg.cloudfront.net/Image_05_03_23_at_2_53_PM_11zon_ed927e9280.webp)

#### 42. How to write files with Node.js?

![](https://d2mk45aasx86xg.cloudfront.net/Image_05_03_23_at_2_54_PM_11zon_9d4467072d.webp)

#### 43. Write a callback function in Node.js?

![](https://d2mk45aasx86xg.cloudfront.net/Image_05_03_23_at_2_54_PM_1_11zon_0530ea4739.webp)

#### 44. What is event-driven programming in Node.js?
In Node.js, event-driven programming means as soon as Node starts its server, it initiates its variables, declares functions and then waits for an event to occur. It is one of the reasons why Node.js is pretty fast compared to other similar technologies.

![](https://static.javatpoint.com/js/nodejs/images/nodejs-events1.png)

#### 45. What do you understand by an EventEmitter in Node.js


#### 46. What are the different API functions supported by Node.js?

There are two types of API functions. They are as follows:

- **Synchronous APIs:** Used for blocking functions
- **Asynchronous APIs:** Used for non-blocking functions

#### 47. What is a passport in Node.js?

Passport is a widely used middleware present in Node.js. It is primarily used for authentication, and it can easily fit into any Express.js–based web application.

#### 48. What is the difference between Asynchronous and Non-blocking?

**Asynchronous**
  - Asynchronous means not synchronous. Using these we can make asynchronous HTTP requests that do not wait for the server to respond. These functions continue to respond to the request for which it has already received the server response.

**Non-blocking**
  - Non-blocking functions are used in regards with I/O operations. They immediately respond with whatever data is available and keeps on running as per the requests. In case, any answer couldn’t be retrieved then the API returns immediately with an error. 

#### 49. What is package.json?
- The package.json file in Node.js is the heart of the entire application. 
- It is basically the manifest file that contains the metadata of the project where we define the properties of a package.


</details>


---
### Express

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

### GraphQL

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