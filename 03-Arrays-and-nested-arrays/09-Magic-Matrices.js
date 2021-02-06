    function solve(arr){
        let isMagical = true;
        let firstSum = 0;

        let setOnce = true;
        let temp = arr
        .forEach(x => {
            let currentSum = x.reduce((a, c) => a += Number(c), 0)

            if(setOnce){
                firstSum = currentSum;
                setOnce = false;
            }

            if(currentSum != firstSum){
                isMagical = false;
            }
        });

        return isMagical;
    }

console.log(solve(
    [
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]
));