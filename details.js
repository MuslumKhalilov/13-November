var div1=document.getElementsByClassName("div1")[0]
var div2=document.getElementsByClassName("div2")[0]

var id=window.location.search.slice(4)


axios.get(`https://api.tvmaze.com/shows/${id}`).then(response=>{
div1.innerHTML=`

<div class="row-cell-1">
<img src="${response.data.image.original}" alt="" style="width: 300px; height: auto;">
</div>
<div><h1> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</h1></div>
<div class="row-cell-2">
<h1 style="color: white;">&nbsp; Name: ${response.data.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
<p style="color: white;">&nbsp; &nbsp; &nbsp; Language: ${response.data.language}</p>
<p style="color: white;">&nbsp; &nbsp; &nbsp; Genres: ${response.data.genres[0]}, ${response.data.genres[1]}, ${response.data.genres[2]}</p>
<p style="color: white;">&nbsp; &nbsp; &nbsp; Release date: ${response.data.premiered}</p>
<p style="color: white;">&nbsp; &nbsp; &nbsp; End date: ${response.data.ended}</p>
<p style="color: white;">&nbsp; &nbsp; &nbsp; IMBd: ${response.data.rating.average}</p>
</div>

`

div2.innerHTML=`
<p style="color: white;"> Description: ${response.data.summary}</p>


`
})







