module.exports = function () {
  const url = "https://api.omg.lol/address/joern/statuses/";
  return fetch(url)
    .then((response) => response.json())
    .then((response) => response.response.statuses);
};
