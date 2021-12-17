let apikey = "452d00247570407f893864ae69119af9";
let pais = "ar";
let cantidad = 10;
let categoria = "technology";

export const getNews = async () => {
  const resp = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${pais}&apiKey=${apikey}&pageSize=${cantidad}&category=${categoria}`
  );
  const data = await resp.json();

  return data;
};
