const form = document.querySelector('#searchForm');
const apiURL = 'https://api.tvmaze.com/search/shows?q=';

form.addEventListener('submit', async function (e) {
    let searchURL = apiURL;
    e.preventDefault(); //Prevents form from submitting on default.
    let userInput = form.elements.query.value;
    let config = { params: { q: userInput } };
    const res = await axios.get(searchURL, config);
    makeImages(res.data);
    form.elements.query.value = '';
});

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}