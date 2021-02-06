function solve(arr){
    let result = arr
    .slice()
    .sort((a, b) => {
        let firstCriteria = a.length - b.length;
        if(!firstCriteria){
            return a.toLowerCase().localeCompare(b.toLowerCase());
        }

        return firstCriteria;
    });

    return result.join('\n');
}

console.log(solve(
    ['alpha', 
    'beta', 
    'gamma']

));