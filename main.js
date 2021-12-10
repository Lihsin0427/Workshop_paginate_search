document.addEventListener('DOMContentLoaded', (e) => {
  fetch('https://top-250-movies.herokuapp.com/api/v1/movies/top')
  .then((response)=> {
    return response.json();
  })

  .then(( results ) => {
      console.log(results)
    });
  // .then(({ results }) => {
  //   results.forEach((u)=>{
  //     console.log(u.name)
  //   });
  // });
})