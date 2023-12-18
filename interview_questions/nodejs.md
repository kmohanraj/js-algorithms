
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
