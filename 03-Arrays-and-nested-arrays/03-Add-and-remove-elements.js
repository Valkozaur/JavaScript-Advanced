function solve(commands){
    let current = 1;
    let result = [ ];

    commands.forEach(el => {
        el == 'add' ? result.push(current) : result.pop();
        current++;
    });

    return result.length != 0 ? result.join('\n') : "Empty";
}

console.log(solve(
    [
    'add', 
    'add', 
    'add', 
    'add'
    ]
))

console.log(solve(
    [
]
))