fetch(
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=774d4d97933244fb9f46d99fad737361&pageSize=4"
)
  .then((res) => res.json())
  .then((data) => renderDataToContent(data.articles));

function renderDataToContent(articles) {
  // get element content
  let content = document.getElementById("content");
  let id = 1;
  for (let article of articles) {
    console.log(article);
    content.innerHTML += `<div class="card" id=${id}>
  <div class="thumb">
      <img src=${article.urlToImage} alt="">
  </div>
  <div class="title">
      <a onclick ="redirectToDetail(${id})">${article.title}</a>
  </div>
  <div class="desc">
      <a onclick ="redirectToDetail(${id})">${article.description}</a>
  </div>
  </div>`;
    id++;
  }
}

function redirectToDetail(newsId) {
  console.log("redirect to detail");
  // You can use window.location.href to redirect to the detail page
  window.location.href = "detail.html?id=" + newsId;
}
//https://newsapi.org/v2/top-headlines?country=us&apiKey=774d4d97933244fb9f46d99fad737361&pageSize=4
//https://newsapi.org/v2/everything?q=tesla&from=2023-10-20&sortBy=publishedAt&apiKey=c552b686cb304c86b9dedcf4b723e4f4&pageSize=4 "kodingan kak sigit"
