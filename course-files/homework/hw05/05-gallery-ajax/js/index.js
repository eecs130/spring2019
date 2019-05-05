const serverURL = 'https://raw.githubusercontent.com/eecs130/spring2019/master/course-files/homework/hw05/data/';
const loadCards = (photos) => {
    //console.log(JSON.stringify(photos));
    // clear out existing cards:
    document.querySelector('.cards').innerHTML = '';

    // load new ones (based on photos list)
    for (photo of photos) {
        const template = `
            <li class="card">
                <div class="image" style="background-image:url('${photo}')"></div>
            </li>
        `;
        document.querySelector('.cards').innerHTML += template;
    }
};

const loadImages = (ev) => {
    let url = 'flowers.json';
    if (ev) {
        console.log(ev.target.id);
        console.log(ev.target.id === 'bikes-button');
        console.log(ev.target.id === 'cars-button');
        if (ev.target.id === 'bikes-button') {
            url = 'bikes.json';
        } else if (ev.target.id === 'cars-button') {
            url = 'cars.json';
        }
    }
    console.log(url);
    fetch(serverURL + url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            //console.log(data);
            loadCards(data);
            initCarousel();
        });
};
document.querySelector('#flowers-button').onclick = loadImages;
document.querySelector('#cars-button').onclick = loadImages;
document.querySelector('#bikes-button').onclick = loadImages;

// default to the flowers:
loadImages();
