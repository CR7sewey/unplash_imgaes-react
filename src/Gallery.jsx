import React from "react";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import customFetch from "./customFetch";
import { useGlobalContext } from "./Context";

const Gallery = () => {
  const { search } = useGlobalContext();
  const { data, error, isLoading, isError } = useQuery({
    // check what is returning
    queryKey: ["images", search], // important bcs images string value doesnt change, so, only refetch/rerenders when search term changes
    queryFn: async () => {
      const { data } = await customFetch.get(
        `?client_id=${import.meta.env.VITE_API_KEY}&query=${search}`
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
    <section className="image-container">
      {data.results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description}
            className="img"
          ></img>
        );
      })}
    </section>
  );
};

export default Gallery;
