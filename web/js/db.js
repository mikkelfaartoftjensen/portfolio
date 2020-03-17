/* function getMovies() {
    fetch('https://movie-api.cederdorff.com/wp-json/wp/v2/posts?_embed')
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        console.log(json);
        appendMovies(json);
        movies = json;
        setTimeout(function() {
          showLoader(false);
        }, 200);
      });
  }
  
  getMovies();
    */