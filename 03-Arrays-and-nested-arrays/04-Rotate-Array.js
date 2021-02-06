function solve(arr, n){
    n = n % arr.length;
    let result = arr.slice(n);
    result.push(...arr.slice(0, n));

    return result;
}

console.log(solve(
    [
    '1', 
    '2', 
    '3', 
    '4'
], 
    2
))

console.log(solve(
    ['Banana', 
    'Orange', 
    'Coconut', 
    'Apple'], 
    15    
))