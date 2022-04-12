const fetchPages = async (keyword, page) => {
  const res = await fetch(`https://swapi.dev/api/${keyword}/?page=${page}`);
  return res.json();
};

export { fetchPages };