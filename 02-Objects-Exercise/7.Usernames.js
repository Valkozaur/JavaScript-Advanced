function solve(data){
    let result = '';

    let set = new Set(data.sort((a, b) => {
        if(a.length - b.length === 0){
            return a.localeCompare(b);
        }

        return a.length - b.length;
    }))
    .forEach(element => {
        result += `${element}\n`
    });;

    return result;
}

console.log(solve(
    [
        'Ashton',
        'Kutcher',
        'Ariel',
        'Lilly',
        'Keyden',
        'Aizen',
        'Billy',
        'Braston'
]
))