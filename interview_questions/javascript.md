
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


####  37. What is a microTask queue?
####  38. What is the purpose of queueMicrotask
####  39. What is microtask?



