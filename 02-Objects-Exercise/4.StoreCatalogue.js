function solve(products){
    products = products
    .map(x => x.split(' : '))
    .reduce((a, c) => {
        let firstLetter = c[0][0];

        if(!a.hasOwnProperty(firstLetter)){
            a[firstLetter] = [];
        }

        a[firstLetter].push(`${c[0]}: ${c[1]}`);

        return a;
    }, {})

    return Object.keys(products)
    .sort((a, b) => a.localeCompare(b))
    .reduce((a, c) => {
        a += c;

        products[c] = products[c].sort((a, b) => a.localeCompare(b));
        for(let i = 0; i < products[c].length; i++){
            a += `\n  ${products[c][i]}`
        }
        
        return a + '\n';
    }, '');
};

console.log(solve(
    [
        'Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'
    ]
));


console.log(solve(
    [
        'Banana : 2',
        'Rubic\'s Cube : 5',
        'Raspberry P : 4999',
        'Rolex : 100000',
        'Rollon : 10',
        'Rali Car : 2000000',
        'Pesho : 0.000001',
        'Barrel : 10'
]

));
