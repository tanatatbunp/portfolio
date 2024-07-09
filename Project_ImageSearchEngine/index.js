const searchForm = document.getElementById('search-form')
const searchBox = document.getElementById('search-box')
const searchResult = document.getElementById('search-result')
const showMoreBtn = document.getElementById('show-more-btn')

// API Keys = 8UiC38kyyc2FUaTlTvxgeD3d2_lU6NatX_OMMHYPimk

const accessKey = '8UiC38kyyc2FUaTlTvxgeD3d2_lU6NatX_OMMHYPimk'

let keyword = ''
let page = 1

async function searchImage() {
    keyword = searchBox.value
    console.log(keyword);

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);

    if (page === 1) {
        searchResult.innerHTML = ""
    }

    const results = data.results

    results.map((result) => {
        const image = document.createElement('img')
        image.src = result.urls.small
        const imageLink = document.createElement('a')
        imageLink.href = result.links.html
        imageLink.target = '_blank'

        imageLink.appendChild(image)
        searchResult.appendChild(imageLink)
    })

    showMoreBtn.style.display = 'block'
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault()
    page = 1
    searchImage()
})

showMoreBtn.addEventListener('click', () => {
    page += 1
    searchImage()
})