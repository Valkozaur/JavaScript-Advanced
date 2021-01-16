function solve(data){
        let hasCreatedArrayResult = false;

        data = data
        .map(x => x.split(' => '))
        .reduce((a, c) => {
            let key = c[0];
            let value = c[1];

            if(!hasCreatedArrayResult){
                a['result'] = {};
                hasCreatedArrayResult = true;
            }

            if(!a.hasOwnProperty(key)){
                a[key] = 0;
            }
            
            a[key] += Number(value);

            if(a[key] >= 1000){
                let bottles = Math.floor(a[key] / 1000)
                a[key] = a[key] % 1000;

                if(!a['result'].hasOwnProperty(key)){
                    a['result'][key] = 0;
                }

                a['result'][key] += bottles;
            }

            return a;
        }, {});

        let result = [];
        for (const key in data['result']) {
            result.push(`${key} => ${data['result'][key]}`)
        }

        return result.join('\n');
}

console.log(
    solve(
        [
        'Orange => 2000',
        'Peach => 1432',
        'Banana => 450',
        'Peach => 600',
        'Strawberry => 549'
    ]
    )
);

console.log(
    solve(
        [
        'Kiwi => 234',
        'Pear => 2345',
        'Watermelon => 3456',
        'Kiwi => 4567',
        'Pear => 5678',
        'Watermelon => 6789'
    ]

    )
);