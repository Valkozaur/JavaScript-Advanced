function arraysEqual(a, b) {
    a = Array.isArray(a) ? a : [];
    b = Array.isArray(b) ? b : [];
    return a.length === b.length && a.every((el, ix) => el === b[ix]);
  }

function solve(data){
    data = data
    .map(JSON.parse)
    .map(x => x.sort((a, b) => b - a));

    let unique = [];

    for(let i = 0; i < data.length; i++){
        let hasEqual = false;

        for(let j = 1; j < data.length; j++){
            if(arraysEqual(data[i], data[j])){
                hasEqual = true;
            }
        }

        if(hasEqual){
           continue; 
        }

        unique.push(data[i]);
    }

    return unique.map(x => `[${x.join(', ')}]`).join('\n');
}

console.log(solve(
    [
    "[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"
    ]     
))