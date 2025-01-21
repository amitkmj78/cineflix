import React from "react";
import { Routes, Route } from "react-router";
import {
  MovieList,
  MovieDetail,
  Search,
  PageNotFound,
  LoginPage,
  SignUp,
} from "../pages";
const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>

        <Route
          path="/"
          element={<MovieList apiPath="movie/now_playing" title="Home" />}
        ></Route>
        <Route
          path="/top"
          element={<MovieList apiPath="movie/top_rated" title="Top Rated" />}
        ></Route>

        <Route
          path="/Popular"
          element={<MovieList apiPath="movie/popular" title="Most Popular" />}
        ></Route>
        <Route
          path="/Upcoming"
          element={<MovieList apiPath="movie/upcoming" title="Upcoming" />}
        ></Route>
        <Route path="movie/:id" element={<MovieDetail />}></Route>
        <Route
          path="search"
          element={<Search apiPath="search/movie" title="Search" />}
        ></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
