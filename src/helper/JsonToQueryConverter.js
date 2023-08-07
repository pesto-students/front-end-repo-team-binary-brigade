const JsonToQueryConverter = (query) => {
  if (Object.keys(query).length > 0) {
    const queryString = Object.keys(query)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
      )
      .join("&");

    return queryString;
  }
  return null;
};
export default JsonToQueryConverter;
