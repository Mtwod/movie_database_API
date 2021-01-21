const createObserver = (index) => {
  const makeCardAppear = (entries, observer) => {
    entries.forEach(entry => {
      // chaque élément de entries correspond à une variation
      // d'intersection pour un des éléments cible:
      //   entry.boundingClientRect
      //   entry.intersectionRatio
      //   entry.intersectionRect
      //   entry.isIntersecting
      //   entry.rootBounds
      //   entry.target
      //   entry.time
  
      if(entry.intersectionRatio > 0.7) entry.target.style = "animation-name: movie-card-appear; margin-left: 120px; opacity: 1";
    });
  };

  const options = {
    root: document.getElementById(`movieCard-${index}`),
    rootMargin: '0px',
    threshold: 0.8
  }
  
  const observer = new IntersectionObserver(makeCardAppear, options);
  
  const target = document.getElementById(`movieCard-${index}`);
  
  observer.observe(target);
};

const createAllObservers = (numberOfMovies) => {
  Array.from({ length: numberOfMovies }).forEach((v, index) => {
    createObserver(index);
  });
};
