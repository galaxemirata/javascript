//create an arrow function that accepts a number n and prints all even numbers from 1 to n
const even= (n)=>{
    for (n==n;n<=50;n+=2)
        console.log(n)
    
    

}
even(2)

console.log("...........")
// create an arrow function that prints all odd numbers from 1 to n using the while loop
const odd=(n)=>{
    while (n<=50){
        console.log(n)
        n=n+2
    }

}
    
odd(1)
console.log(">...........")

// Create an arrow function that prints numbers from n down to 1
const down=(n)=>{
    for(n==n;n>=1;n=n-1)
        console.log(n)
}
down(50)

console.log("............")
// write an arrow function square that takes a number as a parameter and logs its square
const square= (n)=>{
    console.log(n**2)


}
square(5)
console.log("...........")


// print numbers from 1 to n and 
// if divisible by 3 "Fizz"
// if divisible by 5 "Buzz"
// if divisible by both 3 and 5  "FizzBuzz"

// print numbers from 1 to n
const number= (n)=>{
    for (n==n;n<=0;n--){
    console.log(n)
}


if (n%3==0 && n%5==0){
    console.log("FizzBuzz")
}
else if (n%3==0){
    console.log("Fizz")
}

else if(n%5==0){
    console.log("Buzz")
}

else{
    console.log("Invalid entry")



}}

number(30)
number(10)
number(9)






