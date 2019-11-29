const baseUrl = 'https://restcountries.eu/rest/v2/';

export default {
  fetchCountries(searchQuery) {
    const requestParams = `name/${searchQuery}`;
    return fetch(baseUrl + requestParams).then(response => response.json());
  },
};
