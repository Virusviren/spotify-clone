async function SearchApi(artist) {
  try {
    const response = await fetch(
      "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + artist,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "39914a2ff5msh53d1b2ba3d6dc3dp1d834ejsnd8bd65a89e18",
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        },
      }
    );
    console.log(response);
    if (response.ok) {
      const responseData = await response.json();
      return responseData.data;
    }
  } catch (error) {
    console.log(error);
  }
}

window.onload = async function () {
  const artists = ["eminem", "qeen", "adele"];
  const data = await Promise.all(
    artists.map(async (artist) => await SearchApi(artist))
  );
  console.log(data);
};
