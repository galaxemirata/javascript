// Arrow functions with parameters

const hello= (name)=>{
    console.log("Hello",name)


}
hello("Joe")
hello("Collins")

// my favourite counties

const counties= (county)=>{
    console.log("My favourite county is",county)

}
counties("Nairobi")
counties("Nyeri")
counties("Nakuru")


// addition

const add= (a,b)=> {
    let sum=a+b
    console.log("The sum is",sum)

}
add(45,20)


// subtraction
const difference= (a,b)=>{
    let difference=a-b
    console.log("The difference is",difference)
}
difference(50,30)

// division
const division= (a,b)=> {
    let division=a/b
    console.log("The quotient is",division)
}
division(80,40)

// modulus
const remainder= (a,b)=> {
    let remainder=a%b
    console.log("The remainder is",remainder)
}
remainder(5,3

)


// simple interest
const simpleInterest= (principle,rate,time)=> {
    let simpleInterest=(principle*rate*time)/100
    console.log("The simple interest is",simpleInterest)
}
simpleInterest(80000,4,6)

// Body Mass Index
const BMI= (weight,height)=>{
    let BMI=weight/height**2
    console.log("The BMI is",BMI)
}
BMI(80,20)

// Area of a triangle
const area= (base,height)=>{
    let area=(base*height)/2
    console.log("The area of the triangle is",area)

}
area(40,10)




