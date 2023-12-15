### 1. What is useState in React?
- React Hook that allows you for having state variables in functional components
- 

Ex,
```
const [count, setCounter] = useState(0);
const [otherStuffs, setOtherStuffs] = useState(...);
...
const setCount = () => {
   setCounter(count + 1);
   setOtherStuffs(...);
   ...
};
```

### Why do you need modules in Js?
### What is web storage?
### Why do you need a Cookie?
### What are the differences between local storage and session storage?
### What are the methods available on session storage
### What is a promise in Js?
### What is a callback function in Js?
### What is a callback hell in Js?
### 1. Differences between useMemo and useCallback?

useMemo:

```
const memoizedValue = useMemo(() => computeValue(dependencies), dependencies);
```

- Here, computeValue represents the function that performs the calculation, and dependencies are the values that, when changed, would trigger a re-calculation of the memoized value.

useCallback:

```
const memoizedCallback = useCallback(() => callbackFunction(dependencies), dependencies);
```

1 - Purpose:
 
  -  useMemo is used to memoize values or computations, helping to optimize expensive calculations or data transformations.
  - useCallback is used to memoize callback functions, reducing unnecessary re-creation of functions and optimizing component re-renders.

2 - Return Value:

  - useMemo returns the memoized value itself.
  - useCallback returns the memoized callback function itself.

3- Usage Scenario:

  - Use useMemo when you want to optimize and cache the result of a computation that depends on certain inputs.
  - Use useCallback when you want to optimize the creation of callback functions that are passed to child components.

- https://www.linkedin.com/pulse/exploring-differences-between-usememo-usecallback-hooks-rahul-saxena#:~:text=1%2D%20Purpose%3A,and%20optimizing%20component%20re%2Drenders.

- https://www.geeksforgeeks.org/when-to-use-usecallback-usememo-and-useeffect/

- https://blog.saeloun.com/2022/09/22/difference-between-useCallback-and-useMemo-hooks/


### 2. What is redux saga and redux thunk?
