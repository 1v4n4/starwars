const fetchPages = async (keyword, page) => {
  const res = await fetch(`https://swapi.dev/api/${keyword}/?page=${page}`);
  return res.json();
};

const fetchDetails = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  return data;
};

export { fetchPages, fetchDetails };