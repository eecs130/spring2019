// global variables:
let activeCard = null;

// functions:
const showPhoto = (e) => {
    activeCard = e.target;
    displayPhoto();
};

const addCards = (photos) => {
    const elements = []
    for (photo of photos) {
        elements.push(`
            <li class="card">
                <div class="image" style="background-image:url('images/${photo}')"></div>
                <div class="caption">Hello</div>
            </li>
        `);
    }
    document.querySelector('.cards').innerHTML += elements.join('');
};

const displayPhoto = () => {
    const featured_image = document.querySelector('.featured_image');
    featured_image.style.backgroundImage = activeCard.style.backgroundImage;
    document.querySelector('.preview').classList.add('active');
    document.querySelector('main').style.overflow = 'hidden';
    document.querySelector('nav').style.display = 'none';
};

const hidePhoto = (e) => {
    document.querySelector('.preview').classList.remove('active');
    document.querySelector('main').style.overflow = 'auto';
    document.querySelector('nav').style.display = 'flex';
};

const showNextPhoto = (e) => {
    const cards = document.querySelectorAll('.card');
    try {
        activeCard = activeCard.parentElement.nextElementSibling.querySelector('.image');
    }
    catch (e) {
        activeCard = cards[0].querySelector('.image');
    }
    displayPhoto();
};

const showPreviousPhoto = (e) => {
    const cards = document.querySelectorAll('.card');
    try {
        activeCard = activeCard.parentElement.previousElementSibling.querySelector('.image')
    }
    catch (e) {
        activeCard = cards[cards.length - 1].querySelector('.image');
    }
    displayPhoto();
};
const toggleDisplay = (ev) => {
    const mode = ev.target.id;
    document.querySelector('.cards').className = 'cards ' + mode;
}

const attachEventHandlers = () => {
    for (image of document.querySelectorAll('.image')) {
        image.onclick = showPhoto;
    }
    document.querySelector('.close').onclick = hidePhoto;
    document.querySelector('.featured_image').onclick = showNextPhoto;
    document.querySelector('.next').onclick = showNextPhoto;
    document.querySelector('.prev').onclick = showPreviousPhoto;
    document.querySelector('#eight').onclick = toggleDisplay;
    document.querySelector('#six').onclick = toggleDisplay;
    document.querySelector('#four').onclick = toggleDisplay;
    document.querySelector('#two').onclick = toggleDisplay;
    document.querySelector('#mosaic').onclick = toggleDisplay;
};

addCards([
    'field1.jpg', 'purple.jpg', 'jar.jpg', 'green.jpg',
    'purple1.jpg', 'magnolias.jpg', 'daisy1.jpg',
    'poppies.jpg', 'dogwoods.jpg', 'blossom.jpg',
    'field3.jpg', 'field4.jpg', 'branch.jpg',
    'red.jpg','purple2.jpg', 'green1.jpg'
]);
attachEventHandlers();

window.onscroll = (ev) => {
    const scrollPosition = window.scrollY + document.body.offsetHeight;
    const galleryHeight = document.querySelector('.cards').scrollHeight;
    if (scrollPosition >= galleryHeight) {
        //console.log(galleryHeight, scrollPosition, '=', window.scrollY, '+', document.body.offsetHeight);
        console.log('loading...');
        addCards([
            'field1.jpg', 'purple.jpg', 'jar.jpg', 'green.jpg',
            'purple1.jpg', 'magnolias.jpg', 'daisy1.jpg',
            'poppies.jpg', 'dogwoods.jpg', 'blossom.jpg',
            'field3.jpg', 'field4.jpg', 'branch.jpg',
            'red.jpg','purple2.jpg', 'green1.jpg'
        ]);
        attachEventHandlers();
    }
};
