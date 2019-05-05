const loadCards = (photos) => {
    console.log(JSON.stringify(photos));
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

const loadFlowers = () => {
    fetch('flowers.json')
        .then((response) => {
            return response.json
        })
        .then((data) => {
            loadCards(data);
            initCarousel();
        });
    // loadCards([
    //     'images/poppies.jpg',
    //     'images/dogwoods.jpg',
    //     'images/blossom.jpg',
    //     'images/field3.jpg',
    //     'images/field4.jpg',
    //     'images/branch.jpg',
    //     'images/red.jpg',
    //     'images/purple2.jpg',
    //     'images/field1.jpg',
    //     'images/purple.jpg',
    //     'images/jar.jpg',
    //     'images/green.jpg',
    //     'images/green1.jpg',
    //     'images/purple1.jpg',
    //     'images/magnolias.jpg',
    //     'images/daisy1.jpg'
    // ]
    //);
    // necessary to re-attach all event handlers after
    // you load a new set of images
    // initCarousel();
};
document.querySelector('#flowers-button').onclick = loadFlowers;

const loadCars = () => {
    loadCards([
        'https://www.autoblog.com/img/research/styles/photos/performance.jpg',
        'https://assets-global.website-files.com/5a10aaa4d85f4b0001a53292/5b6224522898679a9952b073_2017-lamborghini-aventador-roadster-green-isolated-front-angle-royalty-exotic-cars-v2.png',
        'https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/media/assets/submodel/8622.jpg',
        'https://icdn1.digitaltrends.com/image/tesla-model-s-p100d-2-1500x1000.jpg',
        'https://fortunedotcom.files.wordpress.com/2016/05/tes-06-01-16-tesla-model-x-5.jpg',
        'https://www.investopedia.com/thmb/mrRKSC3cgUEWIUN4tLkh4w_oAVE=/735x0/tesla-5bfc357246e0fb00511b8500.jpg',
        'https://wallup.net/wp-content/uploads/2016/01/245580-BMW-BMW_Z3-car-Cabrio-red_cars-landscape-clear_sky-Roadster-Vienna-748x561.jpg',
        'https://static1.squarespace.com/static/5a31b5004c0dbfb8159ec3ed/5b8042644fa51a04001c2c3b/5b80456c758d46345dce71c6/1535133312985/IMG_5209+2.jpg'
    ]);
    // necessary to re-attach all event handlers after
    // you load a new set of images
    initCarousel();
};
document.querySelector('#cars-button').onclick = loadCars;


const loadBikes = () => {
    loadCards([
        'https://cdn.pixabay.com/photo/2017/11/09/22/18/bike-2934832__340.jpg',
        'https://cdn.pixabay.com/photo/2016/07/22/14/16/cyclists-1534907_1280.jpg',
        'https://cdn.pixabay.com/photo/2013/10/03/23/19/bike-190483_1280.jpg',
        'https://cdn.pixabay.com/photo/2013/08/05/06/13/bihu-169921_1280.jpg',
        'https://cdn.pixabay.com/photo/2014/03/18/16/18/hanging-bridge-290091_1280.jpg',
        'https://cdn.pixabay.com/photo/2017/01/16/11/09/child-1983747_1280.jpg',
        'https://i1.wp.com/xplodemag.co.uk/wp/wp-content/uploads/2015/07/norway.jpg?w=1400&ssl=1',
        'https://wallup.net/wp-content/uploads/2015/12/51474-women-bicycle-landscape-748x512.jpg'
    ])
    // necessary to re-attach all event handlers after
    // you load a new set of images
    initCarousel();
};
document.querySelector('#bikes-button').onclick = loadBikes;

// default to the flowers:
loadFlowers();
