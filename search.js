const searchMovie = async () => {
  try {
    const searchInput = document.getElementById('searchInput').value;
    const input = searchInput.replace(' ', '+');
    const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${input}`);
    const data = await response.json();
    let result = [];
    console.log(data);
    console.log(data.Search);
    console.log(data.Search[0]);
    const dataSearchArray = data.Search;
    dataSearchArray.forEach(movie => {
      const movieInfo = {
        title: movie.Title,
        year: movie.Year,
        image: movie.Poster,
        id: movie.imdbID
      };
      result.push(movieInfo);
    });
    return result;
  }
  catch(error) {
    console.error('error:', error);
  }
};


// Poster: "https://m.media-amazon.com/images/M/MV5BMjA4NDg3NzYxMF5BMl5BanBnXkFtZTcwNTgyNzkyNw@@._V1_SX300.jpg"
// ​
// Title: "The Hunger Games"
// ​
// Type: "movie"
// ​
// Year: "2012"
// ​
// imdbID: "tt1392170"