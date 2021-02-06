function createArticle() {
	let titleInputElement = document.getElementById('createTitle');
	let headingElement = document.createElement('h3');
	headingElement.innerHTML = titleInputElement.value;
	
	let contentInputElement = document.getElementById('createContent');
	let contentElement = document.createElement('p');
	contentElement.innerHTML = contentInputElement.value;
	
	if(titleInputElement.value !== '' && contentInputElement.value != ''){
		let articleElement = document.createElement('article');
		articleElement.appendChild(headingElement);
		articleElement.appendChild(contentElement);
	}

	titleInputElement.value = '';
	contentInputElement.value = '';

	document.getElementById('articles').appendChild(articleElement);
}