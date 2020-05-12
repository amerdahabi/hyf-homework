

const btn = document.querySelector(".form");
btn.addEventListener("submit", fetchGif);

function fetchGif(e) {
  e.preventDefault()

  const input = document.querySelector(".input");
  const gifName = input.value;

  const num = document.querySelector(".num");
  const numberOfImg = num.value;

  const api = `https://api.giphy.com/v1/gifs/search?api_key=YQCCYRtJqUs7a3dzgCveIOZQXqOTVHb2&q=${gifName}&limit=${numberOfImg}&offset=0&rating=G&lang=en`;
  fetch(api)
    .then(response => response.json())
    .then(data1 => {
      console.log(data1);
      getGif(data1);
    });
<<<<<<< Updated upstream
=======
};
>>>>>>> Stashed changes

function getGif(data1) {
  const imagesGif = document.querySelector(".images-gif");
  let result = [];
  data1.data.forEach(a => {
    const url = a.images.preview_gif.url;
    result += `<img class="img" src="${url}" width="150px"/>`;
  });
<<<<<<< Updated upstream
  imagesGif.innerHTML = result;
=======
  imagesGif.innerHTML = result;
};
>>>>>>> Stashed changes
