// https://codepen.io/vanwars/pen/rbEjbB?editors=0011
const cards = document.querySelector('.cards');
console.log(cards);

// get first child of cards:
const firstListItem = cards.firstElementChild;
console.log(firstListItem);

// get last child of cards:
const lastListItem = cards.lastElementChild;
console.log(lastListItem);

// get firstListItem's next sibling:
const sib1 = firstListItem.nextElementSibling;
console.log(sib1);

// get lastListItem's previous sibling:
const sib2 = lastListItem.previousElementSibling;
console.log(sib2);

// get lastListItem's parent:
const parent = lastListItem.parentElement;
console.log(parent);