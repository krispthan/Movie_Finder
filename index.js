const fetchData = async (searchTerm) => {
  const url = 'http://www.omdbapi.com/';
  const response = await axios.get(url, {
    params: {
      apikey: '82afb90b',
      s: searchTerm,
    },
  });
  return response.data.Search;
};

const input = document.querySelector('input');

const onInput = async (e) => {
  const movies = await fetchData(e.target.value);

  for (let movie of movies) {
    const div = document.createElement('div');
    div.innerHTML = `
      <img src="${movie.Poster}"/>
      <h1>${movie.Title}</h1>
    `;

    document.querySelector('#target').appendChild(div);
  }
};

input.addEventListener('input', debounce(onInput, 500));
