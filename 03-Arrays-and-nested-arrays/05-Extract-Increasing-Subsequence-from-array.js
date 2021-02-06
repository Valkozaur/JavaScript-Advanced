function solve(arr){
let currentBiggest = 0;
return arr.reduce((a, c) => {
    if(c > currentBiggest){
        currentBiggest = c;
        a.push(c);
    }

    return a;
}, [])
}

console.log(solve(
    [
        1, 
        3, 
        8, 
        4, 
        10, 
        12, 
        3, 
        2, 
        24
    ]       
));
