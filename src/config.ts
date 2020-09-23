// https://movie-catalog-backend-api.herokuapp.com/graphql

const prod = {
  url: {
    API_URL: "https://movie-catalog-backend-api.herokuapp.com/graphql",
    // API_URL_USERS: "https://myapp.herokuapp.com/users",
  },
};
const dev = {
  url: {
    API_URL: "http://localhost:5000/graphql",
  },
};

// export const config = process.env.NODE_ENV === "development" ? dev : prod;
const config = process.env.NODE_ENV === "production" ? prod : dev;

export default {
  // Add common config values here
  //   MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
};
