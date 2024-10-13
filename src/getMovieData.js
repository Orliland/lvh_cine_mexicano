async function getMovieData(episode) {
  const res = await fetch("/data.json");
  let data = await res.json();
  if (episode === "all") {
    return data;
  } else {
    return data.filter((element) => element.episode == episode);
  }
}

export default getMovieData;
