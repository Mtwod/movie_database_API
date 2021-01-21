const displaySearchResult = async () => {
  try {
    const movies = await searchMovie();
    const displayDiv = document.getElementById('displaySearchResult');
    displayDiv.innerHTML = '';
    movies.forEach(movie => {
      showMovieCard(displayDiv, movie.title, movie.year, movie.image);
    });
  }
  catch(error) {
    console.error('error:', error);
  }
};
