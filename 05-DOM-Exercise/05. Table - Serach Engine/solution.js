function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let tableBodyElements = Array.from(document.querySelector('body > table > tbody').children);
      tableBodyElements.map(td => td.classList.remove('select'));
      
      let searchElement = document.getElementById('searchField');
      
      let searchInput = searchElement.value;

      if(searchInput !== ''){
         tableBodyElements = tableBodyElements
      .filter(x => Array.from(x.children).some(td => td.innerHTML.includes(searchInput)));

      tableBodyElements.map(td => td.classList.add('select'));
      }

      searchElement.value = '';
   }
}