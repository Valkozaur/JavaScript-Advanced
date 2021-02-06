function solve(arr){
    let temp = arr
    .slice()
    .sort((a, b) => a - b);

    let result = [];

    for(let i = 0; i < temp.length / 2; i++){
        result.push(temp[i]);
        result.push(temp[temp.length - i - 1]);
    }

    return result;
}

console.log(solve(
    [1, 65, 3, 52, 48, 63, 31, -3, 18, 56]
))