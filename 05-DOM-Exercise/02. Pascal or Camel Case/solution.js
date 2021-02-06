function solve() {
  let inputElement = document.getElementById('text');
  let namingConventionElement = document.getElementById('naming-convention');

  let textTokens = inputElement.value.split(' ');

  let result = '';
  if(namingConventionElement.value === 'Pascal Case'){
    result = makeFirstLettersUpper(textTokens);
    
  }
  else if(namingConventionElement.value === 'Camel Case'){
    result = textTokens[0].toLowerCase() + makeFirstLettersUpper(textTokens, 1);
  }
  else{
    result = 'Error!';
  }

  document.getElementById('result').innerHTML = result;

  function makeFirstLettersUpper(arr, skip = 0){
    let result = ''
  
    for (let index = skip; index < arr.length; index++) {
        result += arr[index][0].toUpperCase() + arr[index].substring(1).toLowerCase();
    }
  
    return result;
  }
}

