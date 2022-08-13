/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { useEffect } from "react";
import actionListCinema from "../redux/actionCreator/actionListCinema";
import { connect } from "react-redux";

function Cinemas(props) {
  const { list, city, actionListCinema } = props;

  useEffect(() => {
    if (list.length === 0) {
      actionListCinema();
    }
  }, [list, actionListCinema]);

  return (
    <div>
      <div style={{ overflow: "hidden", padding: "10px" }}>
        <div
          onClick={() => props.history.push("/city")}
          style={{ float: "left" }}
        >
          {city}
        </div>
        <div
          style={{ float: "right" }}
          onClick={() => props.history.push("/cinemas/search")}
        >
          搜索
        </div>
      </div>

      {list.map((item) => (
        <dl key={item.cinemaId} style={{ padding: "10px" }}>
          <dt>{item.name}</dt>
          <dd style={{ fontSize: "12px" }}>{item.address}</dd>
        </dl>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    list: state.listCinema.list,
    city: state.CityChange.cityName,
  };
};

const mapDispatchToProps = {
  actionListCinema,
};
export default connect(mapStateToProps, mapDispatchToProps)(Cinemas);
