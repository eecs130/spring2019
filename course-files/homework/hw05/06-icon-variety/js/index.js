const elem = document.getElementById('output')

// Todo: make
const classNames = [
    'fa-heart',
    'fa-beer',
    'fa-star',
    'fa-bicycle',
    'fa-book'
]

/* TODO: instead of repeating the line below 
   over and over again, use a FOR LOOP to repeat it
   as many times as you like, but you'll need to 
   ensure that the classNames index changes from a number
   from 0 to 4
*/

elem.innerHTML += '<i class="fa ' + classNames[0] + '"></i>'
elem.innerHTML += '<i class="fa ' + classNames[1] + '"></i>'
elem.innerHTML += '<i class="fa ' + classNames[2] + '"></i>'
elem.innerHTML += '<i class="fa ' + classNames[3] + '"></i>'