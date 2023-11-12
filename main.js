var row=document.querySelector(".row")
fetch(" https://api.tvmaze.com/shows")
.then(response=>response.json())
.then(datas=>{
datas.forEach(data=>{
row.innerHTML+=`
<div class="card col-4 my-4 mx-auto" style="width: 20rem; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); background-image: url('https://wallpapercave.com/wp/wp8584928.jpg'); background-size: cover;">
<img src="${data.image.original}" class="card-img-top" alt="${data.name}" style="height: 450px; object-fit: cover; object-position: top;">
  <div class="card-body text-left">
    <h5 class="card-title">${data.name}</h5>
    <p class="card-text">IMDb: ${data.rating.average}</p>
    <a href="details.html?id=${data.id}" class="btn">More</a>
  </div>
</div>
`



})
})