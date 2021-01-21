const searchButton = document.getElementById('searchButton');

const onSearchClick = async() => {
  try {
    const movies = await searchMovie();
    displaySearchResult(movies);
    addReadMoreClickEvent(movies);
  }
  catch(error) {
    console.log(error);
  }
};

searchButton.addEventListener('click', onSearchClick);