function solve(arr){
    let result = arr.sort((a, b) => a.localeCompare(b));

    return result.reduce((a, c, i) => {
        a += `${i + 1}.${c}\n`;
        return a;
    }, '')
}

console.log(solve(
    [
        "John", 
        "Bob", 
        "Christina", 
        "Ema"]
));