import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../redux/feature/movieSlice";

const Search = () => {
  const [name, setName] = useState("spider");
  const {
    moviesList: { Error: error },
  } = useSelector((state) => ({ ...state.movie }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies(name));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);
  return (
    <>
      <h2>Movie Search App</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <TextField
          type="text"
          fullWidth
          value={name}
          sx={{ m: 1, width: "55ch" }}
          onChange={(e) => setName(e.target.value)}
        />
        {error && <p>{error}</p>}
      </form>
    </>
  );
};

export default Search;
