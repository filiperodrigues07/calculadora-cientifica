const movies = document.querySelector("ul");
const buttonInvite = document.querySelector(".banner-botao");

buttonInvite.addEventListener("click", () => {
  openInvite();
}); 

 function openInvite() {
  window.open("https://discord.gg/bZdNzScxMz");
} 
   
const listMovies = [
  {
    title: "Coringa",
    image: "https://images2.alphacoders.com/724/724132.jpg"
  },
  {
    title: "Black Adam",
    image:
      "https://upload.wikimedia.org/wikipedia/en/a/a9/Black_Adam_%28film%29_poster.jpg"
  },
  {
    title: "Avatar",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/au_poster_movies_20cs_avatar2_wayofwater_teaser_cc6f7f91.jpeg?region=0,0,540,800&width=480"
  },
  {
    title: "Truth or Dare",
    image:
      "https://m.media-amazon.com/images/M/MV5BOGU2YTZmMjYtZDUwYi00NTc1LTlkMjAtM2ViZDkzOTlhNGNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg"
  },
  {
    title: "Smile",
    image:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w370-q80/movie_asset/59/74/33/sml_salone_poster_1400x2100.jpg"
  }
];

const movieModel = (index) => `
    <li>
        <img src="${listMovies[index].image}"/>
    </li>`;

listMovies.forEach((_movie, index) => {
  movies.insertAdjacentHTML("beforeend", movieModel(index));
});

