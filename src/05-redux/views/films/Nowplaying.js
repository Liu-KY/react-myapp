/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { useEffect, useState } from "react";
import { getHitMovies } from "../../utils/api";
import { withRouter } from "react-router-dom";
// import { NavLink } from 'react-router-dom'
export default function Nowplaying(props) {
  const [list, setlist] = useState([]);


  useEffect(() => {
    getHitMovies().then((res) => {
      setlist(res.data.data.films);
    });
  }, []);

  return (
    <div>
      {list.map((item) => (
        <WithFilmItem key={item.filmId} {...item} />
      ))}
    </div>
  );
}

function FilmItem(props) {
  // console.log(props)
  let { name, filmId } = props;
  return (
    <li
      onClick={() => {
        // console.log(props)
        props.history.push(`/detail/${filmId}`);
      }}
    >
      {/* <NavLink to={'/detail/'+item.filmId}>{item.name}</NavLink> */}

      {/* <img src={poster}/> */}
      {name}
    </li>
  );
}

const WithFilmItem = withRouter(FilmItem);
