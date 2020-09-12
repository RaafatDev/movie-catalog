import React from "react";
import { useQuery, gql } from "@apollo/client";

const FETCH_MOVIES_LIST = gql`
  query fetchMoviesList {
    moviesList {
      id
      title
    }
  }
`;

const FirstGraphqlCom = () => {
  const { loading, error, data } = useQuery(FETCH_MOVIES_LIST);
  if (loading) return <p>Loading ... </p>;
  if (error) return <p>Error ... </p>;

  console.log("data: ", data);
  return data.moviesList.map((movie) => {
    return <div style={{ color: "white" }}> {movie.title} </div>;
  });
};

export default FirstGraphqlCom;
//  ##########################3

// const EXCHANGE_RATES = gql`
//   query GetExchangeRates {
//     rates(currency: "USD") {
//       currency
//       rate
//     }
//   }
// `;

// function ExchangeRates() {
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;

//   return data.rates.map(({ currency, rate }) => (
//     <div key={currency}>
//       <p>
//         {currency}: {rate}
//       </p>
//     </div>
//   ));
// }
