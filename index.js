function disableScroll() {
  document.body.style.overflow = 'hidden';
  document.querySelector('html').scrollTop = window.scrollY;
  }
  
function enableScroll() {
document.body.style.overflow = null;
}

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

document.body.addEventListener()