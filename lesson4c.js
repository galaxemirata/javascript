// sum
const add=function (num1,num2){
    let sum=num1+num2
    console.log("The sum is ",sum)
}
add(12,50)

// difference
const difference=function(num1,num2){
     let difference=num1-num2
     console.log("The difference is",difference)

}
difference(80,60)

// division
const division= function(num1,num2){
    let division=num1/num2
    console.log("The Quotient is",division)
}
division(50,5)

// Modulus
const modulus=function(num1,num2){
    let remainder= num1%num2
    console.log("The remainder is",remainder)
}
modulus(50,4)

// simple interest
const simpleInterest=function(principle,rate,time){
    let simpleInterest=(principle*rate*time)/100
    console.log("The simple interest is",simpleInterest)
}
simpleInterest(40000,4,3)

// Body Mass Index
const BMI=function(weight,height){
    let BMI=weight/height**2
    console.log("The Body Mass Index is",BMI)
}
BMI(80,12)

// Area of square
const area_of_square=function(length,length){
    let area=length*length
    console.log("The area of the square is",area)
}
area_of_square(15,15)

// Area of Triangle
const area_of_triangle=function(base,height){
    let area=(base*height)/2
    console.log("The area of triangle is",area)
}
area_of_triangle(60,20)


// Area of circle
const area_of_circle=function(pie,radius){
    let area=pie*radius**2
    console.log("The area of the circle is",area)

}
area_of_circle(22/7,14)

// Perimeter of a circle
const perimeter_of_circle=function(pie,diameter){
    let perimeter=pie*diameter
    console.log("The perimeter of the circle is",perimeter)
}
perimeter_of_circle(22/7,14)

