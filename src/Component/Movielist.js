import Moviecard from "./Moviecard";
import React, { useState } from "react";
import { starList } from "../assets/Data";
import ReactStars from "react-rating-stars-component";

function Movielist({ movieList }) {
  const [tabStar, setTabStar] = useState(starList);
  const [search, setSearch] = useState("");
  const changeColor = (id) => {
    setTabStar(
      tabStar.map((star) =>
        star.id === id ? { ...star, isColored: !star.isColored } : star
      )
    );
  };
  const [rate, setRate] = useState(0)
  const ratingChanged = (newRating) => {
    setRate(newRating);
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* {tabStar.map((star) => (
          <span className={star.isColored?'gold':'star'} onClick={()=>changeColor(star.id)} >{star.icon}</span>
        ))} */}
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
        />
        ,
      </div>
      <div className="row">
        {movieList
          .filter((movie) =>
            movie.title.toUpperCase().includes(search.toUpperCase())
          )
          .filter(
            (movie) =>
              movie.rate >= rate
            //   tabStar.filter((star) => star.isColored).length
          )
          .map((movie, index) => (
            <Moviecard movie={movie} key={index} />
          ))}
      </div>
    </div>
  );
}

export default Movielist;
