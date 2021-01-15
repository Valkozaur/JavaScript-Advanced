function SameNumbers(input){
    let areEqual = true;
    let sum = 0;

    let firstNumber = input % 10;
    input = Math.floor(input / 10);

    sum += firstNumber;

    while(input != 0)
    {
        let currentNumber = input % 10;
        input = Math.floor(input / 10);
        
        if(firstNumber != currentNumber){
            areEqual = false;
        }

        sum += currentNumber;
    }

    console.log(areEqual);
    console.log(sum);
}

SameNumbers(1234);