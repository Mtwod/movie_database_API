const searchMovie = async () => {
  try {
    const searchInput = document.getElementById('searchInput').value;
    const input = searchInput.replace(' ', '+');
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${input}`);
    const data = await response.json();
    let result = [];
    const dataSearchArray = data.Search;
    dataSearchArray.forEach((movie, i) => {
      const movieInfo = {
        title: movie.Title,
        year: movie.Year,
        image: movie.Poster,
        id: movie.imdbID,
        index: i
      };
      result.push(movieInfo);
    });
    return result;
  }
  catch(error) {
    console.error('error:', error);
  }
};