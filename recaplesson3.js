// a function to print "My balance is 500"
function balance(){
    
    console.log("My balance is 500")
}
balance()

// simple interest
function simpleInterest(){
    let principle=10000
    let rate=5
    let time=2

    let simpleInterest=(principle*rate*time)/100
    console.log("The simple Interest is",simpleInterest)

}
simpleInterest()

// Body Mass Index
function BMI(){
    let weight=60
    let height=10
    let BMI=weight/height**2
    console.log("The Body Mass Index is",BMI)

}
BMI()

// Area of a triangle
function  area_of_triangle(){
    let base=50
    let height=10
    let area=(base*height)/2
    console.log("The area of the triangle is",area )
}
area_of_triangle()

// Perimeter of a circle
function perimeter_of_circle(){
    let pie=22/7
    let diameter=28
    let perimeter=pie*diameter
    console.log("The perimeter of the circle is",perimeter)
}
perimeter_of_circle()