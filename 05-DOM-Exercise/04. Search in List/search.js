function search() {
   let townElements = Array.from(document.getElementById('towns').children);

   let searchInput = document.getElementById('searchText').value;

   let counter = 0;
   for (let town of townElements) {
      if(town.innerHTML.includes(searchInput)){
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         counter++;
      }
  }

  let resultElement = document.getElementById('result');

  resultElement.innerHTML = `${counter} matches found`;
}
