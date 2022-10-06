// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/
let isMale = false
let gender = isMale ? "male" : "female"
console.log(gender)
/* WRITE YOUR ANSWER HERE */

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/
let p = 2
let l = 16
if (l === 8 || p === 8 || l + p === 8 || l - p === 8) {
  console.log(8)
} else {
  console.log("not 8")
}

/* WRITE YOUR ANSWER HERE */

/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

let str1 = "may"
let str2 = "hemade"
let newStr = str1 + " " + str2
let newStr2 = `${str1} ${str2}`
console.log(newStr2)
/* WRITE YOUR ANSWER HERE */

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/
let a = 1
let b = 5
let c = 3

if (b > a) {
  let d = a
  a = b
  b = d
}
if (c > a) {
  let d = a
  a = c
  c = d
}
if (c > b) {
  let d = b
  b = c
  c = d
}
console.log(a, b, c)
// if (a > b && a > c) {
//   if (a === b) {
//     console.log(a)
//     if (b > c) {
//       console.log(b)
//       console.log(c)
//     }
//   } else {
//     console.log(c)
//   }
//   if (b > c) {
//     console.log(b)
//   } else {
//     console.log(c)
//   }
// }

let x = 3
let y = 3
let z = -1

if (x > y && x > z) {
  if (y > z) {
    console.log(x + ", " + y + ", " + z)
  } else {
    console.log(x + ", " + z + ", " + y)
  }
} else if (y > x && y > z) {
  if (x > z) {
    console.log(y + ", " + x + ", " + z)
  } else {
    console.log(y + ", " + z + ", " + x)
  }
} else if (z > x && z > y) {
  if (x > y) {
    console.log(z + ", " + x + ", " + y)
  } else {
    console.log(z + ", " + y + ", " + x)
  }
}
/* WRITE YOUR ANSWER HERE */

/*EX 5
 Write a piece of code for finding the average of two given integers.
*/

let avg = (x + y) / 2
console.log(avg)

/* WRITE YOUR ANSWER HERE */

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/
let name = "may"
let surname = "hemade"
if (name.length > surname.length) {
  console.log(name)
} else {
  console.log(surname)
}

/* WRITE YOUR ANSWER HERE */

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/
if (typeof x == "number") {
  console.log("integer")
} else {
  console.log("not")
}

/* WRITE YOUR ANSWER HERE */

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

let percentage = 35

let newNum = (400 * percentage) / 100
console.log(newNum)
/* WRITE YOUR ANSWER HERE */

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/
if (percentage % 2 === 0) {
  console.log("even")
} else {
  console.log("odd")
}
console.log(percentage % 2 === 0 ? "even" : "odd")

/* WRITE YOUR ANSWER HERE */
