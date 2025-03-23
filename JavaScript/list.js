// 1. The Array object is used to store multiple values in a single variable.
const cars = ["ferrari", "Volvo", "BMW"];
console.log(cars);

// 2. at()	Returns an indexed element of an array
const bike = ["Suzuki", "Honda", "BMW", "KTM"];
console.log(bike.at(1));

// 3. concat()	Joins arrays and returns an array with the joined arrays
let concatArr = bike.concat(cars);
console.log(concatArr);


// 4. constructor	Returns the function that created the Array object's prototype


// 5. copyWithin()	Copies array elements within the array, to and from specified positions


// 6 .entries()	Returns a key/value pair Array Iteration Object

// 7. every()	Checks if every element in an array pass a test


// 8. fill()	Fill the elements in an array with a static value


// 9. filter()	Creates a new array with every element in an array that pass a test

const num = [10, 11, 12, 13, 14, 15, 16, 17, 18];
const evenNum = num.filter((val) => { return (val % 2 === 0) })
// console.log(evenNum);

// 10. find()	Returns the value of the first element in an array that pass a test


// 11. findIndex()	Returns the index of the first element in an array that pass a test


// 12. flat()	Concatenates sub-array elements


