// Configuraciones base
const api_key = "6ef73f560370655db1cdfc6e38aa5b79";
const url_base = "https://api.themoviedb.org/3";
const idioma = "language=es";

// ################################ Posters ################################

export const urlImagen = "https://image.tmdb.org/t/p/w500/";

// #########################################################################

// ############################ Peliculas ##################################

// Seguir reproducciendo
export const movieNowPlaying = () =>
  `${url_base}/movie/now_playing?api_key=${api_key}&${idioma}`;

// Peliculas clasicas
export const movie_classic = () =>
  `${url_base}/movie/top_rated?api_key=${api_key}&${idioma}`;

// Proximos lanzamientos
export const movie_comming = () =>
  `${url_base}/discover/movie?api_key=${api_key}&${idioma}&sort_by=release_date.desc&page=1&include_adult=false`;

// Información de la pelicula
export const infoFilm = (id_movie) =>
  `${url_base}/movie/${id_movie}/credits?api_key=${api_key}&&${idioma}`;

// ##########################################################################

// ############################### Series ###################################

// En transmisión
export const inAirToday = () =>
  `${url_base}/tv/airing_today?api_key=${api_key}&${idioma}&page=1`;

// Al aire
export const inAir = () =>
  `${url_base}/tv/on_the_air?api_key=${api_key}&${idioma}`;

// Tops
export const topSerie = () =>
  `${url_base}/top_rated?api_key=${api_key}&${idioma}`;

export const infoSerie = (id_serie) =>
  `${url_base}/tv/${id_serie}/credits?api_key=${api_key}&&${idioma}`;

// #########################################################################

// ############################ Actores ####################################
export const topActors = () =>
  `${url_base}/trending/person/week?api_key=${api_key}&&${idioma}`;

export const detailActor = (id_persona) =>
  `${url_base}/person/${id_persona}?api_key=${api_key}&&${idioma}`;

export const filmActor = (id_persona) =>
  `${url_base}/person/${id_persona}/movie_credits?api_key=${api_key}&&${idioma}`;

// #########################################################################
