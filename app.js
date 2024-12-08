// TASK 1

// var a = 'abc';
// let b =20;
// const c=false;
// console.log(a);

// console.log(b);

// console.log(c);  // OUTPUT : All varaible Accessible Globally

// TASK 2
// function greet(){
//  var a = 'abc';
// let b =20;
// const c=false;
// }
// greet();
// console.log(a); //OUTPUT : a is not defined
// console.log(b); //OUTPUT : b is not defined
// console.log(c); //OUTPUT : c is not defined

// TASK 3
// if(true){
//     var a = 'abc';
//     let b =20;
//     const c=false;
// }
// console.log(a); // OUTPUT : Accessible
// console.log(b); // OUTPUT : b is not defined
// console.log(c); // OUTPUT : b is not defined

// TASK 4
// console.log(a); // OUTPUT : undefined
//  var a = 'abc';

// TASK 5
// console.log(a); // OUTPUT : Cannot access 'a' before initialization
// console.log(b); // OUTPUT : Cannot access 'a' before initialization
// let a =20;
// const b=false;

// TASK 6
// var a = 'abc';
// var a = 'abc';
// let b =20;
// let b =20;
// const c=false;
// const c=false;

// console.log(a); // OUTPUT : abc
// console.log(b); // OUTPUT : Identifier 'b' has already been declared
// console.log(c); // OUTPUT : Identifier 'c' has already been declared

// TASK 7
// var a = 'abc';
//  a = 'efg';
// let b =20;
//  b =10;
// const c=false;
// c=true;
// console.log(a); // OUTPUT : efg
// console.log(b); // OUTPUT : 10
// console.log(c); // OUTPUT : TypeError: Assignment to constant variable

// TASK 8
// console.log(b); // OUTPUT : b is not defined
// console.log(c); // OUTPUT : c is not defined

// if(true){
// let b =20;
// const c=false;
// }

// TASK 9
// for(var i = 0;i<10;i++){
//     var a = 'abc';
//     console.log(a);
// }
// for(let i = 0;i<10;i++){
//     let b =20;
//     console.log(b);
// }
// for(const i = 0;i<10;i++){
//     const c=false;
//     console.log(c);
// }

// TASK 9
// let firstName="Mohammad";
// let lastName='Tahir';
// console.log(`${firstName} ${lastName}`);

// TASK 10
// let firstName="Mohammad";
// let lastName='Tahir';
// console.log(`Hello! My name is ${firstName} ${lastName}`);

// TASK 11
// let a =20;
// let b =10;
// console.log(`The sum 20 and 10 is ${a+b}`);

// TASK 12
// function multiplyNumbers(a, b) {
//     return a * b;
// }
// const num1 = 5;
// const num2 = 7;
// console.log(`The product of ${num1} and ${num2} is ${multiplyNumbers(num1, num2)}.`);

// TASK 13
// function logTemplate(strings, ...values) {
//     console.log("Strings:", strings);
//     console.log("Values:", values);
//     return "Tag function executed!";
// }
// const name = "Alice";
// const age = 25;

// const result = logTemplate`Name: ${name}, Age: ${age}`;
// console.log(result);

// TASK 14
// function logTemplate(strings, ...values) {
//     console.log("Template strings:", strings);
//     console.log("Interpolated values:", values);
//   }
//   const name = "Alice";
//   const age = 25;

//   logTemplate`Hello, my name is ${name}, and I am ${age} years old.`;

// TASK 15
// const currentHour = new Date().getHours();
// const message = `Good ${currentHour < 12 ? 'morning' : 'afternoon'}! The current hour is ${currentHour}.`;
// console.log(message);

// TASK 16

// let str= `Hello! My Name is Mohammad Tahir Raza. I Lived in Karachi. `
// console.log(str);

// TASK 17
// const shoppingList = ["Apples", "Bread", "Milk", "Eggs", "Cheese"];

// const htmlList = `
//   <ul>
//     ${shoppingList.map(item => `<li>${item}</li>  `).join('')}
//   </ul>
// `;

// console.log(htmlList);

// TASK 18

// TASK 19
// const age = 20;
// const canVote = age >= 18 ? 'Yes' : 'No';
// console.log(`Can vote: ${canVote}`);

// TASK 20
// let evenNum=[0,2,4,6,8,'...'];
// console.log(`It's Even Number ${evenNum}`);

// TASK 21
// let score = 10;
// let grade =
//     (score >= 90) ? "A" :
//     (score >= 80) ? "B" :
//     (score >= 70) ? "C" :
//     (score >= 60) ? "D" : "F";
//     console.log(grade);

// TASK 22
// const statusMessage= '"Welcome back!"';
// const isLoggedIn= true;
// const message = isLoggedIn ? statusMessage : 'Please login';
// console.log(message);

// TASK 23
// const isMember = true;
// const purchaseAmount = 120;

// const discount = isMember && purchaseAmount > 100
//   ? purchaseAmount * 0.1
//   : 0;

// console.log(`Discount: $${discount.toFixed(2)}`);

// TASK 24
// function maxValue(a, b){
//     return a > b ?  `The grater value is a:${a}` :  `The grater value is b:${b}`;
// }
// console.log(maxValue(10, 50));

// TASK 25
// function greet(name){
//     return name === undefined || name ===  '' ?"Hello guest!":`Hello, ${name}!` ;
// }
// console.log(greet('Mohammad Tahir'));

// TASK 26
// const numbers = [1, 2, 3, 4, 5, 6];

// const transformedNumbers = numbers.map(num =>
//   num % 2 === 0 ? num * 2 : num * 3
// );

// console.log(transformedNumbers);

// TASK 27
// const arr = ['abc','hms','jkd','jsk','zsrfcs','ergce'];
// const filteredArr = arr.filter(item => item.length > 3);
// console.log(filteredArr);

// TASK 28
// const originalArray= [1,2,3,4,5,6,78,9,7];
// const copiedArray=[...originalArray];
// console.log(`This is Original Array :${originalArray}`);

// console.log(`This is Copied Array :${copiedArray}`);

// TASK 29
// const arr1=[1,2,3,4,5];
// const arr2=[6,7,8,9,10];
// const mergedArray=[...arr1,...arr2];
// console.log(mergedArray);

// TASK 30
// const numbers = [2, 4, 6, 8];
// const updatedNumbers = [0, ...numbers, 10];
// console.log(updatedNumbers);

// TASK 31
// const originalObject={
//     name:'Mohammad Tahir',
//     age:14,
//     occupation:'web developmer',
// }
// const copiedObject={...originalObject};
// console.log(originalObject);
// console.log(copiedObject);

// TASK 32
// const obj1 = {a:1,b:2,c:3,d:4,e:5};
// const obj2 = {f:6,g:7,h:8,i:9,j:10};
// const mergedObject = {...obj1, ...obj2};
// console.log(mergedObject);

// TASK 33
// let user={
//     email:'tahir@gmail.com',
//     status:true,
// };

// let updatedUser={...user,
// };

// updatedUser.email='atif@gmail.com';
// updatedUser.status=false;

// console.log(user);
// console.log(updatedUser);

// TASK 34
// function sum(a, b, c){
//     return a + b + c;
// };
// const num = [10,20,30];
// console.log(sum(...num) );

// TASK 35
// function combineArrays(...arrays) {
//     return [].concat(...arrays);
//   }

//   const array1 = [1, 2, 3];
//   const array2 = [4, 5];
//   const array3 = [6, 7, 8];

//   const combinedArray = combineArrays(array1, array2, array3);

//   console.log(combinedArray);

// TASK 36
// function multiply(multiplier, ...numbers) {
//     return numbers.map(number => number * multiplier);
//   }

//   const result = multiply(3, 4, 5, 6, 7);

//   console.log(result);

// TASK 37
// const nestedArray = [[1, 2], [3, 4], [5, 6]];
// const shallowCopy = [...nestedArray];
// shallowCopy[0][0] = 99;
// shallowCopy[2].push(7);
// console.log("Original Array:", nestedArray);
// console.log("Shallow Copy:", shallowCopy);

// TASK 38
// function sum(a,b,...numbers) {
//     return a,b,numbers.reduce((total, num) => total + num, 0);
// }

// console.log(sum(1, 2, 3, 4));

// TASK 39
// function average(a,b,...numbers) {
//     return a,b,numbers.reduce((total, num) => total + num, 0);
// }

// console.log(average(1, 2, 3, 4,20,30));

// TASK 40
// const numbers = [10, 20, 30, 40, 50];

// const [first, ...rest] = numbers;

// console.log("First element:", first);
// console.log("Remaining elements:", rest);

// TASK 41
// const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
// const [, , ...remainingColors] = colors;
// console.log("Remaining Colors:", remainingColors);

// TASK 42
// const person = {
//     name: 'John Doe',
//     age: 30,
//     email: 'johndoe@example.com',
//     address: '123 Main Street',
// };

// const { name, email, ...rest } = person;

// console.log("Name:", name);
// console.log("Email:", email);
// console.log("Rest of the properties:", rest);

// TASK 43
// const student = {
//     id: 101,
//     name: 'Alice Smith',
//     grades: [90, 85, 88],
//     info: {
//         age: 20,
//         major: 'Computer Science',
//     },
// };

// const {
//     id,
//     name,
//     info: { major },
//     ...rest
// } = student;

// console.log("ID:", id);
// console.log("Name:", name);
// console.log("Major:", major);
// console.log("Rest of the properties:", rest);

// TASK 44
// function filterEven(...numbers) {
//     return numbers.filter(num => num % 2 === 0);
// }

// console.log(filterEven(1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15,16,17,18,19,20));

// TASK 45
// function combineAndSort(...num){
//     return [...num].sort((a,b) => a-b);

// }
// const num =[0,1,2,3,4,5,6];
// console.log(combineAndSort(...num));

// TASK 46
// const fruits=["apple","banana","cherry"];
// const fruitsname={
//     0: `First Fruit : ${fruits[0]}`,
//     1: `Second Fruit : ${fruits[1]}`,
//     2: `Thired Fruit : ${fruits[2]}`,
// };
// console.log(fruitsname);

// TASK 47
// const colors = ["red", "green", "blue", "yellow"];
// const [primaryColor, , tertiaryColor] = colors;
// console.log("primaryColor:", primaryColor);
// console.log("tertiaryColor:", tertiaryColor);

// TASK 48
// const numbers=[1,2,3,4,5];
// const [first,  ...resremainingNumbers] = numbers;
// console.log("first:", first);
// console.log("resremainingNumbers:", resremainingNumbers);

// TASK 49
// const person = {
//   name: "Mohamad Tahir",
//   age: 14,
//   city: "Karachi",
// };
// const { name, age, city } = person;
// console.log("name:", name);
// console.log("age:", age);
// console.log("city:", city);

// TASK 50
// const car={
//     maker:'bmw',
//     model:"bmw m5",
//     year:2020,
// };
// const { maker:carMaker, model:carModel, year:carYear}=car;
// console.log("maker:",carMaker);
// console.log("model:",carModel);
// console.log("year:",carYear);

// TASK 52
// const settings = {
//     theme: "dark",
//     language: "Spanish"
// };

// const { theme, language = "English" } = settings;

// console.log("Theme:", theme);
// console.log("Language:", language);

// const defaultSettings = { theme: "light" };

// const { theme: defaultTheme, language: defaultLanguage = "English" } = defaultSettings;
// console.log("Theme:", defaultTheme);
// console.log("Language:", defaultLanguage);

// TASK 53
// const nestedArray = [[1, 2], [3, 4], [5, 6]];
// const [[a],[b],[c]]=nestedArray;
// console.log("a:", a);
// console.log("b:", b);
// console.log("c:", c);

// TASK 54
// const person = {
//   name: "Mohammad Tahir",
//   age: 14,
//   details: {
//     email: "tahir@example.com",
//     address: "new Kaeachi",
//   },
// };
// const {
//   name,
//   age,
//   details: { email, address },
// } = person;
// console.log("name:", name);
// console.log("age:", age);
// console.log("email:", email);
// console.log("address:", address);

// TASK 55
// const data = {
//   id: 101,
//   info: {
//     name: "Alice",
//     age: 25,
//   },
// };
// const {
//   id,
//   info: { name, age },
// } = data;
// console.log("id:", id);
// console.log("name:", name);
// console.log("age:", age);

// TASK 56
// function printCoordinates([x, y]) {
//     console.log("x:", x);
//     console.log("y:", y);
// }

// printCoordinates([10, 20]);

// TASK 57
// function displayUser({ name, age }) {
//   console.log("name:", name);
//   console.log("age:", age);
// }
// displayUser({ name: "John Doe", age: 30 });

// TASK 58
// const book={
//     title:'Javascript',
//     author:'Brendan Eich',
//     year:1995,

// };
// var book2= Object.keys(book);
// console.log(book2);

// TASK 59
// const student = {
//     name:'Mohammad Tahir',
//     age:14,
//     grade:'7th',
//     school:'NOGS'

// };
// var student2= Object.keys(student);
// console.log(student2);

// TASK 60
// const product = {
//     name:'Cricket Bat',
//     price:5000,
//     category:'Sports',
// };
// var product2= Object.keys(product);
// console.log(product2);

// TASK 61
// const movie = {
//   title: "Inception",
//   director: "Christopher Nolan",
//   year: 2010,
//   genre: "Sci-Fi",
// };
// var movie2= Object.values(movie);
// console.log(movie2);

// TASK 62
// const scores = {
//     math: 80,
//     science: 95,
//     english: 50,
// };
// var scores2= Object.values(scores);
// console.log(scores2);

// TASK 63
// const user = {
//     username: 'Tahir Raza',
//     email: 'tahir@gmail.com',
//     location: 'new Karachi',
// };
// var user2= Object.values(user);
// console.log(user2);

// TASK 64
// const car={
//     make:'bmw',
//     model:"bmw m5",
//     year:2020,
// };
// var car2= Object.entries(car);
// console.log(car2);

// TASK 65
// const person={
//     firstName:'Mohammad',
//     lastName:"Tahir",
//     age:14,
// };
// var person2= Object.entries(person);
// console.log(person2);

// TASK 66
// const settings = {
//   theme: "dark",
//   notifications: true,
//   privacy: "high",
// };

// const entries = Object.entries(settings);

// console.log(entries);

// TASK 67
// const inventory = {
//     apples: 5,
//     bananas: 12,
//     oranges: 8,
//     grapes: 15,
//   };

//   const inventory2= Object.keys(inventory).filter((keys)=>inventory[keys]>10);
//   console.log(inventory2);

// TASK 68
// const temperatures = {
//     morning: 20,
//     afternoon: 25,
//     evening: 15
// };

// const temperaturesInFahrenheit = Object.entries(temperatures).map(([key, value]) => {
//     const fahrenheit = (value * 9) / 5 + 32;
//     return [key, fahrenheit];
// });

// const newTemperatures = Object.fromEntries(temperaturesInFahrenheit);

// console.log(newTemperatures);

// TASK 69
// const roles = {
//     admin: "Alice",
//     editor: "Bob",
//     viewer: "Charlie"
// };

// const swappedRolesArray = Object.entries(roles).map(([key, value]) => [value, key]);

// const swappedRoles = Object.fromEntries(swappedRolesArray);

// console.log(swappedRoles);

// TASK 70
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function filterAndMap(array, filterFn, mapFn) {
//     return array.filter(filterFn).map(mapFn);
// }

// const isOdd = num => num % 2 !== 0;
// const square = num => num ** 2;

// const result = filterAndMap(numbers, isOdd, square);

// console.log(result);

// TASK 71
// const words = ["apple", "banana", "cherry", "date"];

// function sortAndReduce(array, sortFn, reduceFn) {
//   return array.sort(sortFn).reduce(reduceFn);
// }

// const alphabeticalSort = (a, b) => a.localeCompare(b);
// const concatenate = (accumulator, currentValue) => accumulator + currentValue;

// const result = sortAndReduce(words, alphabeticalSort, concatenate);

// console.log(result);

// TASK 72
// function greet(name, callback) {
//     const message = `Hello, ${name}!`;
//     callback(message);
// }

// function printGreeting(greeting) {
//     console.log(greeting);
// }

// greet("Alice", printGreeting);

// TASK 73
// function fetchData(callback) {
//     console.log("Fetching data from the server...");
//     setTimeout(() => {
//         const data = { id: 1, name: "Alice", age: 25 };
//         callback(data);
//     }, 2000);
// }

// function displayData(data) {
//     console.log("Data received:", data);
// }

// fetchData(displayData);

// TASK 74
// simple Function
// function add(a, b) {
//   return a + b;
// }
// Convert in Arroy Function
// const add = (a, b) => a + b;
// console.log(add(3,5));

// TASK 75
// const numbers = [1, 2, 3, 4, 5];
// const doubleNumbers = numbers.map((number) => number ** 2);
// console.log(doubleNumbers);

// TASK 76
// function outer(){
//     const x= 10;
//     function inner(){
//         console.log(x);
//         };
//         inner();
// };
// outer();

// TASK 77
// function createCounter() {
//     let counter = 0;

//     return function() {
//         counter++;
//         console.log(counter);
//     };
// }

// const counter1 = createCounter();
// const counter2 = createCounter();

// counter1();
// counter1();
// counter2();
// counter1();
// counter2();

// TASK 78
// function greet(name='John',message='Hello'){
//     console.log(`${message},${name}`
//         );

// }
// greet();

// TASK 79
// function calculateArea(width = 10, height = 5) {
//     return width * height;
// }

// const areaWithArguments = calculateArea(20, 15);
// console.log("Area with arguments:", areaWithArguments);

// const areaWithDefaults = calculateArea();
// console.log("Area with default values:", areaWithDefaults);

// TASK 80
// const numbers =[1, 2, 3, 4, 5];
// const doubleNumbers = numbers.map(e => e ** 2);
// console.log(doubleNumbers);

// TASK 81
// const words=["apple", "banana","cherry"];
// const firstLetters = words.map((e) => e.toUpperCase());
// console.log(firstLetters);

// TASK 82
// const numbers =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = numbers.filter(e => e % 2 === 0);
// console.log(evenNumbers);

// TASK 83
// const words = ["apple", "banana", "cherry", "date"];
// const longLetters = words.filter((e) => e.length>5);
// console.log(longLetters);

// TASK 84
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((e) => {
//   console.log(e);
// });

// TASK 85
// const words = ["apple", "banana", "cherry", "date"];
// words.forEach((e) => {
//    console.log(e.length);
// });

// TASK 86
// const numbers= [1,2,3,4,5]
// let Arr= numbers.reduce((a,b)=>{
//     return a+b;

// });
// console.log(Arr) ;

// TASK 87
// const words =['Hello','World','this','is','JavaScript'];
// const concatenateWords=words.reduce((word1,word2)=>{
//    return word1+word2
// })
// console.log(concatenateWords);

// TASK 88
// const numbers =[1,  3, 5, 7, 8];
// const evenNumbers = numbers.some(e => e % 2 === 0);
// console.log(evenNumbers);

// TASK 89
// const words = ["apple", "banana", "cherry", "date"];
// const hasLongWords= words.some((e) => {
//    return e.length >5;
// });
// console.log(hasLongWords);

// TASK 90
// const numbers =[2,  4, 6, 8, 10];
// const evenNumbers = numbers.every(e => e % 2 === 0);
// console.log(evenNumbers);

// TASK 91
// const words = ["elephant", "giraffe", "hippopotamus"];
// const word2 = words.every((e)=>e.length>5);
// console.log(word2);

// TASK 92
// const numbers = [1, 3, 5, 7, 8];
// const num2 = numbers.find((e)=>e % 2 === 0);
// console.log(num2);

// TASK 93
// const words = ["apple", "banana", "cherry", "date"];
// const hasLongWords= words.find((e) => {
//    return e.length >5;
// });
// console.log(hasLongWords);

// TASK 94
// const numbers = [1, 3, 5, 7, 8];
// const num2 = numbers.findIndex((e)=>e % 2 === 0);
// console.log(num2);

// TASK 95
// const words = ["apple", "banana", "cherry", "date"];
// const hasLongWords = words.findIndex((e) => e.length > 5);

// console.log(hasLongWords);

// TASK 96
// function delay(milliseconds) {
//     console.log('Wait a minite');

//     return new Promise(resolve => {
//         setTimeout(resolve, milliseconds);
//     });
// }

// delay(2000).then(() => {
//     console.log("Hello, world!");
// });

// TASK 97
// let pro = new Promise((resolve, reject) => {
//     let iceCream = false;
//     iceCream === true ? resolve('Promise completed') : reject('Promise rejected');

// });
// pro.then
// ((data) => { console.log(data); })
// .catch((err) => {
//     console.log(err);

// });

// TASK 98
// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//         const userData = { name: "John Doe", age: 55 };

//         if (userData.age) {
//             resolve(userData);
//         }
//         else if(userData.age === null) {
//             reject("Error: User data is missing the age property.");

//         }

//         else {
//             reject("Error: User data is missing the age property.");
//         }
//     });
// }

// fetchUserData()
//     .then(user => {
//         console.log("User Data:", user);
//     })
//     .catch(error => {
//         console.error(error);
//     });

// TASK 99
// function getWeather(success = true) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (success) {
//                 resolve({ temperature: 25, condition: "Sunny" });
//             } else {
//                 reject("Error: Unable to fetch weather data.");
//             }
//         }, 1000);
//     });
// }

// getWeather(true)
//     .then(weather => {
//         console.log("Weather Data:", weather);
//     })
//     .catch(error => {
//         console.error(error);
//     });

// TASK 100
// function delay(milliseconds) {
//     return new Promise(resolve => {
//         setTimeout(resolve, milliseconds);
//     });
// }

// async function sayHello() {
//     await delay(2000);
//     console.log("Hello, world!");
// }

// sayHello();

// TASK 101
// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//         const userData = { name: "John Doe", age: 24 };

//         if (userData.age) {
//             resolve(userData);
//         }
//         else if(userData.age === null) {
//             reject("Error: User data is missing the age property.");

//         }

//         else {
//             reject("Error: User data is missing the age property.");
//         }
//     });
// }

// async function getUserData() {
//     try {
//         const user = await fetchUserData();
//         console.log("User Data:", user);
//     } catch (error) {
//         console.error(error);
//     }
// }

// getUserData();

// TASK 102
// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ name: "John Doe", age: 30 });
//     }, 1000);
//   });
// }
// function fetchPosts(user) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (user) {
//         resolve([
//           { id: 1, title: "Post 1", content: "This is post" },
//           { id: 2, title: "Post 2", content: "This is post" },
//         ]); 
//       } else {
//         reject("Error: User is required to fetch posts.");
//       }
//     }, 1000);
//   });
// }
// async function getUserAndPosts() {
//   try {
//     const user = await fetchUser(); 
//     console.log("User Data:", user); 
//     const posts = await fetchPosts(user); 
//     console.log("User Posts:", posts); 
//   } catch (error) {
//     console.error(error); 
//   }
// }
// getUserAndPosts();

// TASK 103
// function fetchUser() {
//     return new Promise((resolve, reject) => {
//         const data = { name: "Tahir", age: undefined }; 
//         if (data == undefined) {
//             resolve (data);
//         } else {
//             reject("Error: User data is not available."); 
//         }
        
//     });
// };
// async function getData() {
//     try {
//         const user = await fetchUser();
//         console.log(`User Data:`,user);
        
//     } catch (error) {
//         console.log(error);
        
//     }
    
// }
// getData();


// TASK 104
// function apiCall(){
//     return new Promise((resolve, reject) => {
//         const delay = Math.random() * 2000 + 1000; // Random delay between 1-3 seconds
//         setTimeout(() => {
//             // Simulate success and failure randomly
//             if (Math.random() > 0.2) {
//                 resolve(`Data received after ${delay.toFixed(0)} ms`);
//             } else {
//                 reject("Error: API call failed");
//             }
//         }, delay);
//     });
// }

// async function getData() {
//     try {
//         const result1 = await apiCall();
//         console.log('Result 1:', result1);

//         const result2 = await apiCall();
//         console.log(`Result 2:`,result2);

//         const result3 = await apiCall();
//         console.log(`Result 3:`,result3);
    
//     } catch (error) {
//         console.log(error);
        
//     }
        
    
// }
// getData();








