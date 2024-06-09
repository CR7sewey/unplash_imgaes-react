import React from "react";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import customFetch from "./customFetch";
import { useGlobalContext } from "./Context";

const Gallery = () => {
  const { search } = useGlobalContext();
  const { data, error, isLoading, isError } = useQuery({
    // check what is returning
    queryKey: ["images", search],
    queryFn: async () => {
      const { data } = await customFetch.get(
        `?client_id=${"jfKlM46BMpjqLjbuNY0Gwtheq8XXvSZErQp7II9UaE8"}&query=${search}`
      );
      return data;
    }, // needs to return a promise
    onError: (error) => {
      console.log(error);
    },
  });
  console.log(data);

  if (isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }
  if (isError) {
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    );
  }

  if (data.results.length < 1) {
    return (
      <section className="image-container">
        <h4>No Results found...</h4>
      </section>
    );
  }

  return (
    <div>
      {data.results.map((values) => {
        const url = values?.urls?.regular;
        return (
          <div key={values.id}>
            <img src={url} />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
