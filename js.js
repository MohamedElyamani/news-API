let newsContainer = [];
async function getNews(country , category){
    let respons = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=dd4efc0803554cdc9d5412c6319b1bf2`);
    let result = await respons.json();
    newsContainer = result.articles;
    displayData();
}
getNews('us','business')


function displayData(){
    let cols=''
    for(let i = 0; i < newsContainer.length; i++){
        cols += `
            <div class="col-md-6 shadow mb-4">
                <div class="news my-4">      
                    <img class="w-100 rounded-2" src="${newsContainer[i].urlToImage?newsContainer[i].urlToImage:'news.jpg'}" alt="">
                    <div class="news-content mt-3">
                        <h5>${newsContainer[i].title}</h5>
                        <p>${newsContainer[i].description}</p>
                        <a href="${newsContainer[i].url}" target="_blank" class="btn btn-danger">Read More</a>
                    </div>
                </div>
            </div>
        `
    }
    document.getElementById('rowData').innerHTML = cols
}
 
let links = document.querySelectorAll('.navbar-nav .nav-item a');
links.forEach(el => {
    el.addEventListener('click',(e)=>{
        getNews('us', e.target.innerHTML)
        links.forEach((el)=>{
            el.classList.remove('active')
        })
        el.classList.add('active')
    })
});






/* let links = document.querySelectorAll('.show-btn a');
for (let i = 0; i< links.length; i++){
    links[i].addEventListener('click', (e) =>{
        getNewsData('us', e.target.innerHTML)
    })
}

async function getNewsData(country,category){
    let respons = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=dd4efc0803554cdc9d5412c6319b1bf2`)    
    let newsDataResult = await respons.json();
    newsContainer = newsDataResult.articles;
    showNewsData();
}
getNewsData('us','business');
function showNewsData(){
    let cols='';
    for(let i = 0; i < newsContainer.length; i++){
        cols +=`
            <div class="col-lg-3 col-md-6">
                <div class="news my-4">
                    <div class="news-img position-relative overflow-hidden">
                        <img class="w-100 rounded-2" src="${newsContainer[i].urlToImage?newsContainer[i].urlToImage :'news.jpg'}" alt="">
                        <div class="layer w-100 h-100 d-flex justify-content-center align-items-center position-absolute rounded-2">
                        <a href = '${newsContainer[i].url}' target = '_blank' class = 'btn btn-primary'>
                            Read More
                        </a>
                        </div>
                    </div>
                    <div class="news-content mt-3">
                        <h4>${newsContainer[i].title}</h4>
                    </div>
                </div>
            </div>
        `
    }
    document.getElementById('rowData').innerHTML = cols;
}
 */




