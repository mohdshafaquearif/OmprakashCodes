// if divisible 3 print fizz , if=divisible by 5 print buzz, divible by both print fizzbuzz or else print bye.
let number=2;
 if(number %3==0&&number%5==0){
    console.log("FizzBuzz");
}
else if(number%3==0){
    console.log("Fizz");
} 
else if(number%5==0){
    console.log("Buzz");
}

else{
    console.log("Bye");
}