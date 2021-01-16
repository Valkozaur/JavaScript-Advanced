function solve(data){
    data = data
    .map(x => x.split(' | '))
    .reduce((a, c) =>{
        let manifacturer = c[0];
        let model = c[1];
        let quantity = Number(c[2]);

        if(!a.hasOwnProperty(manifacturer)){
            a[manifacturer] = {};
        }

        if(!a[manifacturer].hasOwnProperty(model)){
            a[manifacturer][model] = 0;
        }

        a[manifacturer][model] += quantity;
        return a;
    }, {});

    return Object.entries(data)
    .reduce((a, c, v) => {
        let key = c[0];
        let value = c[1];

        a += key + `\n`;

        Object.entries(value)
        .map(v => a += `###${v[0]} -> ${v[1]}\n`);

        return a;
    }, '');
}

console.log(solve(
    [
        'Audi | Q7 | 1000',
        'Audi | Q6 | 100',
        'BMW | X5 | 1000',
        'BMW | X6 | 100',
        'Citroen | C4 | 123',
        'Volga | GAZ-24 | 1000000',
        'Lada | Niva | 1000000',
        'Lada | Jigula | 1000000',
        'Citroen | C4 | 22',
        'Citroen | C5 | 10'
    ]
));