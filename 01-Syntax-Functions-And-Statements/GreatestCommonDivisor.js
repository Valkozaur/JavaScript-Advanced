function GCD(number1, number2){
    let smallerNumber = Math.min(number1, number2);

    let gcd = 0;
    for(let i = 0; i <= smallerNumber; i++){
        if(number1 % i == 0 && number2 % i == 0){
            gcd = i;
        }
    }

    console.log(gcd);
}

GCD(2154, 458 );