const serverURL = 'https://www.apitutor.org/flickr/simple/';

const getPhotos = (ev) => {
    fetch(serverURL + '?tags=' + ev.target.innerHTML)
        .then(response => response.json())
        .then(loadCards);
};


const loadCards = (items) => {
    document.querySelector('.cards').innerHTML = '';
    // load new ones (based on photos list)
    for (item of items) {
        const template = `
            <li class="card">
                <div class="image" style="background-image:url('${item.img_url}')"></div>
                <div class="caption">${item.title}</div>
            </li>`;
        document.querySelector('.cards').innerHTML += template;
    }
    initCarousel();
};

for (elem of document.querySelectorAll('.buttons button')) {
    elem.onclick = getPhotos;
}

//getFlowers();
