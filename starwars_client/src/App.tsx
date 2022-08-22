import React from "react";
import "./App.css";
import Homepage from "./pages/HomePage";
import {ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client' 

function App() {
  return (
    <>
      <Homepage />
    </>
  );
}

export default App;
