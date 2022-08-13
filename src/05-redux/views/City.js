import React, { Component } from "react";
import {store} from '../redux/store'

export default class City extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityList: ["北京", "上海", "广州", "深圳"],
    };
  }

  changeCity(city){
    store.dispatch({
      type:'changeCity',
      cityName:city
    })
    this.props.history.push('/cinemas')
  }

  render() {
    const { cityList } = this.state;
    return (
      <div>
        {cityList.map((item) => (
          <div key={item} onClick={()=>this.changeCity(item)}>{item}</div>
        ))}
      </div>
    );
  }
}
