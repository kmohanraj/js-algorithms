### Programs:

##### Samsung

1. function sum(a){ 

    return function(b){ 

        return function(c){ 

            return function(d=0){ 

                return a + b + c + d 
            } 
        } 
    } 
} 

console.log(sum(1)(2)(3)())

The output is 6. Because we gave default value for d as 0. We don't need to give value to d.


2. // async function main() { 

// try { 

//   const name = await getName(); 

//     console.log(`Hello ${name}!`); 

//     const age = await getAge(name); 

//     const drink = age < 10 ? ""milk"" : ""coke""; 

//     console.log(`Have a ${drink}.`); 

//     const child = age < 10; 

//     return child; 

//   } catch (e) { 

//     console.log('Error') 
//   } 
//   return null;     
// } 

function getName(){
  const res = new Promise((resolve,reject)=>{
    resolve({name:'tamil',age:20}) 
  })
  return res
}


function getAge(item){
  const res = new Promise((resolve,reject)=>{
    resolve(item) 
  })
  return res
}

myPromise= new Promise((resolve,reject)=>{
  const name = getName().then(res=>{
    console.log(`Hello ${res.name}!`)
    return res.age
  });
  const age=getAge(name).then(result=>result);
  const drink = age < 10 ? "milk" : "coke"; 

  console.log(`Have a ${drink}.`); 

  const child = age < 10;
  resolve(child)
  reject('error')
  
})

myPromise.then(res=>console.log(res))

3. "Flatten following array without using array.flat 

[1,2,[3,4], [5, [6, 7,[8,[9]]]]] into -> [1,2,3,4,5,6,7,8,9]"

let arr = [1,2,[3,4], [5, [6, 7,[8,[9]]]]];
let flattenArr=arr.toString().split(',').map(ele=>Number(ele));
console.log(flattenArr);

function flattenArray(arr){
 return arr.reduce((acc,value)=> Array.isArray(value) ? acc.concat(flattenArray(value)):acc.concat(value),[])
}

let arr = [1,2,[3,4], [5, [6, 7,[8,[9]]]]];
let flattenArr=flattenArray(arr);
console.log(flattenArr)


4. write publish-subscribe implemention

export default class PubSub {
  constructor(){
    // this is where we maintain list of subscribers for our PubSub
    this.subscribers = []
  }

  subscribe(subscriber){
    // add the subscriber to existing list
    this.subscribers = [...this.subscribers, subscriber]
  }

  unsubscribe(subscriber){
   // remove the subscriber from existing list
    this.subscribers = this.subscribers.filter(sub => sub!== subscriber)
  }

  publish(payload){
   // publish payload to existing subscribers by invoking them
    this.subscribers.forEach(subscriber => subscriber(payload))
  }
}


Javascript Coding Task


1. Given an array nums of size n, return the majority element
	The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
		Example 1:
			Input: nums = [3,2,3]
			Output: 3
		Example 2: 
			Input: nuts = [2,2,1,1,1,2,2] 
			Output: 2	


2. Given a string s consisting of words and spaces, return the length of the last word in the string.
	A word is a maximal substring consisting of non-space characters only.
	Example 1: 
		Input: s = "Hello World" 
		Output: 5 
		Explanation: The last word is "World" with length 5.
	Example 2: 
		Input: s = "   fly me   to   the moon  " 
		Output: 4 
		Explanation: The last word is "moon" with length 4.
 	Example 3: 
		Input: s = "luffy is still joyboy"
		Output: 6
		Explanation: The last word is "joyboy" with length 6.


 3. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
	Example 1:
		Input: nums = [2,7,11,15], target = 9
		Output: [0,1]
		Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 	Example 2:
		Input: nums = [3,2,4], target = 6
		Output: [1,2]
	Example 3:
		Input: nums = [3,3], target = 6
		Output: [0,1]


4. A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
You are given an array of strings sentences, where each sentences[i] represents a single sentence.
Return the maximum number of words that appear in a single sentence.
 
	Example 1:
		Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
		Output: 6
	Explanation: 
		- The first sentence, "alice and bob love leetcode", has 5 words in total.
		- The second sentence, "i think so too", has 4 words in total.
		- The third sentence, "this is great thanks very much", has 6 words in total.
		Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.
	Example 2:
		Input: sentences = ["please wait", "continue to fight", "continue to win"]
		Output: 3
		Explanation: It is possible that multiple sentences contain the same number of words. 
In this example, the second and third sentences (underlined) have the same number of words.
has context menu
 
5. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
 
	Example 1:
		Input: nums = [2,7,11,15], target = 9
		Output: [0,1]
		Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
	Example 2:
		Input: nums = [3,2,4], target = 6
		Output: [1,2]
	Example 3:
		Input: nums = [3,3], target = 6
		Output: [0,1]
 


 
React Coding test
 
Create a set of buttons with numbers(1,2,3)  and mathematical operators(+,-,*./) to perform calculator functionality. On pressing any button expression should be displayed on above the button and only on pressing equal symbol result should be printed