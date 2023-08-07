import Image from "next/image";
import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Space from "./components/space";

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
});

export default function Home() {
  return (
    <main>
      <div></div>
    </main>
  );
}
