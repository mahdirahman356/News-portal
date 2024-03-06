
let categoryBtn = async() => {
    let loading = document.getElementById('loading')
    loading.classList.remove('hidden')
    let res = await fetch('https://openapi.programming-hero.com/api/news/categories')
    let data = await res.json()
    let allCategory = data.data.news_category
    categories(allCategory)
}

let categories = (cate) => {
    cate.forEach(cates => {
        console.log(cates)
       let categoriesOptionContainer = document.getElementById('categories-option-container')
       let createCategory = document.createElement('div')
       createCategory.innerHTML = `
       <button onclick="newsBtn('${cates.category_id}')" class="text-[#858585] font-semibold btn bg-none border-none">${cates.category_name}</button>
       `
       categoriesOptionContainer.appendChild(createCategory)
    });
}
let newsBtn = (id) => {
    newsDetail(id)
    let newsDetailsContainer = document.getElementById('news-details-container')
    newsDetailsContainer.innerHTML = ''
    let loading = document.getElementById('loading')
    loading.classList.remove('hidden')
    console.log(id)
}



categoryBtn()

// newsDetails
let newsDetail = async(id) => {
    let res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    let data = await res.json()
    let allData = data.data
    allNews(allData)
}

let newsDetailsContainer = document.getElementById('news-details-container')
let allNews = (news) => {
    news.forEach(newsDetails => {
        // console.log(newsDetails)
        let loading = document.getElementById('loading')
        loading.classList.add('hidden')
        let createContainer = document.createElement('div')
        createContainer.innerHTML = `
        <div class=" w-full md:w-[90%] mx-auto min-h-screen">
        <div class="mx-auto hero-content flex-col lg:flex-row gap-10">
          <img src=${newsDetails.image_url} class=" md:max-w-sm rounded-lg shadow-2xl"/>
          <div>
            <h1 class="text-3xl md:text-5xl font-bold">${newsDetails.title}</h1>
            <p id="details" class="py-6 text-[#949494]">${newsDetails.details.slice(0,600)}</p>
             <!-- news-maker    -->
            <div class="news-maker-container flex justify-between items-center">
                <!-- parson -->
                <div class="flex gap-3">
                    <img class="w-12" src=${newsDetails.author.img} alt="">
                    <div>
                        <h4 class="font-semibold">${newsDetails.author.name}</h4>
                        <h5 class="text-[#718797] font-sans text-[15px]">${newsDetails.author.published_date}</h5>
                    </div>
                </div>
                <!-- views  -->
                <div class="flex gap-2 items-center">
                    <div>
                        <i class="fa-regular fa-eye text-[#515151]text-[20px]"></i>
                    </div>
                    <div>
                        <h4 class="text-[#515151] font-semibold text-[20px]">${newsDetails.total_view}</h4>
                    </div>
                </div>
                <!-- star -->
                <div class="hidden md:flex gap-3 text-[20px]">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <!-- arrow-right -->
               <div class="hidden md:flex">
                <i class="fa-solid fa-arrow-right text-[#5D5FEF] text-[25px]"></i>
               </div>
            </div>
          </div>
        </div>
      </div>
        `
        newsDetailsContainer.appendChild(createContainer)
    });
}

let = serchBtn = () => {
    let idSerch = document.getElementById('id-search').value 
    let newsDetailsContainer = document.getElementById('news-details-container')
    newsDetailsContainer.innerHTML = ''
    if(idSerch){
        newsDetail(idSerch)
    }
    else{
        alert('pless give a value')
    }
}

newsDetail('01')