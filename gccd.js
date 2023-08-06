let n = 100
while (n > 0) {
    if(n%3 && n%5) {
        console.log(n-- + ", ");continue;
    }
    if(!(n%3)) console.log("Fizz, ");
    if(!(n%5)) console.log("Buzz, ");
    n--;    
}
