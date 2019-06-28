window.onload = function() {
	initShoppingList();
}

function initShoppingList() {
	let form = document.getElementById('item-form');

	form.addEventListener('submit', function(event) {
		handleItemForm(event, form);
	});
}

function handleItemForm(event, form) {
	if (event.preventDefault) {
		event.preventDefault();
	}

	addItem();
	form.reset();
}

function addItem() {
	let itemName = document.getElementById('item-name');
	let itemAmount = document.getElementById('item-amount');
	let id = getRandomInt(0, 100000);

	console.log(itemName.value)

	let itemHTML = createListItem(itemName.value, itemAmount.value, id);
	let itemList = document.getElementById('shopping-list');
	itemList.insertAdjacentHTML('afterend', itemHTML);

	btnEvent(id);

}

function btnEvent(id) {
	let delBtn = document.getElementById("button"+id);
	delBtn.addEventListener('click', function() {
		console.log("Deleted");
		removeItem(id);
	})
}

function createListItem(itemName, itemAmount, id) {
	return `<li id="item${id}">${itemName} - ${itemAmount} <button id="button${id}">Delete</button></li>`;
}

function removeItem(id) {
	let item = document.getElementById("item"+id);
	item.parentNode.removeChild(item);
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}