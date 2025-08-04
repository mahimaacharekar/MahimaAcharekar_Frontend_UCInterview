const API_KEY='pub_19e3879149b547109f908cf3cda81af6';


const getNews = async (language) => {
    
    const url = `https://newsdata.io/api/1/latest?apikey=pub_19e3879149b547109f908cf3cda81af6&language=${language}`;
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    console.log(data);
    const article = data.results[0];

    const newsCard = document.getElementById("news-card");

newsCard.innerHTML=`
<h2><span style="color: darkred">Headline: </span> <span style="color: darkslategrey;">${article.title}</span></h2>
<img src="${article.image_url}" style="width: 300px; height: auto; "/>
<h2><span style="color: darkred">Description: </span><span style="color: darkslategrey;">${article.description} </span></h2>
<h2><span style="color: darkred">Source: </span><span style="color: darkslategrey;">${article.source_id}</span></h2>
<h2><span style="color: darkred">Time: </span> <span style="color: darkslategrey;"> ${article.pubDate}</span></h2>
<h2><a href="${article.link}">Link</a></h2>`




}

const newsbutton= document.getElementById("newsbutton");
newsbutton.addEventListener("click", ()=>{
    const language = document.getElementById("select-lang").value;
    getNews(language);
});






