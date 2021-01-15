function solve(arr){
    function checkIfNumber(str){
        return isNaN(Number(str)) ? str : Number(str);
    }

    let keys = [ 'name', 'level', 'items']

    let temp = arr
    .map(x => 
        x.split("/")
        .filter(x => x != '')
        .map(x => x.trim())
        .reduce((a, c, i) => {
            a[keys[i]] = checkIfNumber(c);
            return a
        }, {})
    );

    temp.map(x => x['items'] = x['items'] ? x['items'].split(',').map(x => x.trim()) : []);

    return JSON.stringify(temp);
}


console.log(
    solve([
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / '
    ]));