export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "341ec81c7cmsh6741c2bd4154092p1ff1e4jsn65a67c222e84",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};




