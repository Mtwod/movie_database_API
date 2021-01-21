// SEARCH CARD

const showMovieCard = (selector, title, year, image, index) => {

  selector.innerHTML += `
  <div class="card my-2 movie-card">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="${image}" class="card-img movie-img" alt="movie poster">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text"><small class="text-muted">${year}</small></p>
          <button id="readMore-${index}" class="btn btn-primary">Read more</button>
        </div>
      </div>
    </div>
  </div>`;
};

// READ MORE CARD 

const showMovieInfoCard = (title, description, date, image) => {

  const movieInfoCardHtml = `
  <div id="readMoreModal" class="card my-2 readMoreModal">
    <div class="row no-gutters readMoreModal-content">
      <div class="col-md-4">
        <img src="${image}" class="card-img movie-img" alt="movie poster">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <button id="closeMovieInfoCard" type="button" class="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description}</p>
          <a class="card-text"><small class="text-muted">${date}</small></a>
        </div>
      </div>
    </div>
  </div>`;

  document.body.insertAdjacentHTML('beforeend', movieInfoCardHtml);

  // Add close button event
  const movieInfoCardCloseButton = document.getElementById('closeMovieInfoCard');
  movieInfoCardCloseButton.addEventListener('click', () => {
    const movieInfoCard = document.getElementById('readMoreModal');
    movieInfoCard.remove();
  })
};