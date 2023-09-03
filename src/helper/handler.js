export const errorHandler = (err) => (err.response.data.message ? err.response.data.message : "Somthing went wrong! try again.");
