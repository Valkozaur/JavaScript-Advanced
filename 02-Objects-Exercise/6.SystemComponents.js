function solve(data){
    data = data
    .map(x => x.split(' | '))
    .reduce((a, c) => {
        let system = c[0];
        let component = c[1];
        let subComponent = c[2];

        if(!a.hasOwnProperty(system)){
            a[system] = {};
        }

        if(!a[system].hasOwnProperty(component)){
            a[system][component] = [];
        }

        a[system][component].push(subComponent);
        return a;
    }, {});

    let keys = Object.keys(data)
    .sort((a, b) => {   
        if(Object.keys(data[b]).length === Object.keys(data[a]).length){
            return a.localeCompare(b);
        }
        
        return Object.entries(data[b]).length - Object.entries(data[a]).length;
    });

    return keys
    .reduce((a, c) => {
        a += c + '\n';

        Object.entries(data[c])
        .sort((a, b) => b[1].length - a[1].length)
        .map(x => {
            a += `|||${x[0]}\n`;

            
            x[1]
            .map(ss => a += `||||||${ss}\n`)
        });

        return a;
    }, '')
}

console.log(solve(
    [
        'SULS | Main Site | Home Page',
        'SULS | Main Site | Login Page',
        'SULS | Main Site | Register Page',
        'SULS | Judge Site | Login Page',
        'SULS | Judge Site | Submittion Page',
        'Lambda | CoreA | A23',
        'SULS | Digital Site | Login Page',
        'Lambda | CoreB | B24',
        'Lambda | CoreA | A24',
        'Lambda | CoreA | A25',
        'Lambda | CoreC | C4',
        'Indice | Session | Default Storage',
        'Indice | Session | Default Security'
]
));