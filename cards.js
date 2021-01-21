// SEARCH CARD

const showMovieCard = (selector, title, year, image) => {

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
          <a href="#" class="btn btn-primary">Read more</a>
        </div>
      </div>
    </div>
  </div>`;
};

// READ MORE CARD 

const showMovieCardInfo = (selector, title, description, year, image) => {

  selector.innerHTML += `
  <div class="card my-2 movie-card">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="${image}" class="card-img movie-img" alt="movie poster">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description}</p>
          <a class="card-text"><small class="text-muted">${year}</small></a>
        </div>
      </div>
    </div>
  </div>`;
};