document.addEventListener('DOMContentLoaded', (e) => {
  fetch('https://top-250-movies.herokuapp.com/api/v1/movies/top')
  .then((response)=> {
    return response.json();
  })

  .then(( results ) => {
      // console.log(results)
      results.forEach((u)=>{
        const tbody = document.querySelector('tbody')
        tbody.innerHTML +=`<tr>
        <td>${ u.rank }</td>
        <td><a href="${ u.link }">${ u.title }</a></td>
        <td>${ u.year }</td>
        <td>${ u.director }</td>
        <td>${ u.main_stars }</td>
        <td>${ u.rating }</td>
        </tr> `
      })
    });





    const pagination = document.querySelector('.pagination-container')
    pagination.innerHTML = `
      <span class="back-page">＜</span>
      <div class="pagination">
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
      <span class="next-page">＞</span>
      <div class="pagination-counter">
      </div> 
      `
})