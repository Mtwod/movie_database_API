const displaySearchResult = (movies) => {
  const displayDiv = document.getElementById('displaySearchResult');
  displayDiv.innerHTML = '';
  movies.forEach(movie => {
    showMovieCard(displayDiv, movie.title, movie.year, movie.image, movie.index);
  });
};

/*******************
 * READ MORE
********************** */

const addReadMoreClickEvent = (movies) => {
  movies.forEach(async (movie, index) => {
    try {
      const { title, description, date, image } = await fetchMovieInfo(movie.id);

      const readMoreButton = document.getElementById(`readMore-${index}`);
      readMoreButton.addEventListener('click', () => {
        showMovieInfoCard(title, description, date, image);
      });
    } catch(error) {
      console.log(error);
    }
  });
};

const fetchMovieInfo = async (id) => {
  try {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
    const data = await response.json();
    const movieMoreInfo = {
      title: data.Title,
      date: data.Released,
      description: data.Plot,
      image: data.Poster
    };
    return movieMoreInfo;
  } catch(error) {
    console.log(error);
  }
};