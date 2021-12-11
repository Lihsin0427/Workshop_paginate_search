document.addEventListener('DOMContentLoaded', (e) => {

  const tbody = document.querySelector('tbody')
  const page = document.querySelector('.pagination-container')

  
  // async function getData(){}
  const getData = async () => { 
    const res = await fetch('https://top-250-movies.herokuapp.com/api/v1/movies/top')
    const movies = await res.json();
    return movies
  }

  generateTableRows = async () => {
    const movies = await getData()
    movies.forEach((u)=>{
      tbody.innerHTML +=`<tr>
      <td>${ u.rank }</td>
      <td><a href="${ u.link }">${ u.title }</a></td>
      <td>${ u.year }</td>
      <td>${ u.director }</td>
      <td>${ u.main_stars }</td>
      <td>${ u.rating }</td>
      </tr> `
    });
  }
  generateTableRows()


  
//   fetch('https://top-250-movies.herokuapp.com/api/v1/movies/top')
//   .then((response)=> {
//     return response.json();
//   })
//   .then(( data ) => {
//       // console.log(results)
//       generateTableRows(data)
//   });
  

//   function generateTableRows(data){
//     data.forEach((u)=>{
//       tbody.innerHTML +=`<tr>
//       <td>${ u.rank }</td>
//       <td><a href="${ u.link }">${ u.title }</a></td>
//       <td>${ u.year }</td>
//       <td>${ u.director }</td>
//       <td>${ u.main_stars }</td>
//       <td>${ u.rating }</td>
//       </tr> `
//     });
//   }
    
//   page.innerHTML = `
//     <span class="back-page">＜</span>
//     <div class="pagination">
//       <span>1</span>
//       <span>2</span>
//       <span>3</span>
//     </div>
//     <span class="next-page">＞</span>
//     <div class="pagination-counter">
//     </div> 
//     `
})