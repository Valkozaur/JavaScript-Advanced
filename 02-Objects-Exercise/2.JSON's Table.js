function solve(json){
    let arr = json.map(x => JSON.parse(x));

    let tempTable = (data) => `<table> ${data} \n </table>`;
    let tempTr = (data) => `\n	<tr> \n${data}	</tr>`

    return tempTable(
        arr.reduce((a, c) => {
            let tempTD = (data) => `		<td>${data}</td>\n`;
            
            let tempStr = '';
            for (const key in c) {
                if (c.hasOwnProperty(key)) {
                    tempStr += tempTD(c[key]);
                }
            }

            return a + tempTr(tempStr);
        }, '')
    )
}

console.log(
    solve(
    [
        '{"name":"Pesho","position":"Promenliva","salary":100000}',
        '{"name":"Teo","position":"Lecturer","salary":1000}',
        '{"name":"Georgi","position":"Lecturer","salary":1000}'
      ]
));