const BASE_URL = "https://api.tvmaze.com";

export const getShows = async () => {
  const res = await fetch(`${BASE_URL}/shows`);
  return res.json();
};

export const getShowById = async (id) => {
  const res = await fetch(`${BASE_URL}/shows/${id}`);
  return res.json();
};

export const searchShows = async (query) => {
  const res = await fetch(`${BASE_URL}/search/shows?q=${query}`);
  return res.json();
};