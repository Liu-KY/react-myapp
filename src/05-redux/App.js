/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import "./views/css/App.css";
import MRouter from "./router/IndexRouter";
import Tabbar from "./components/Tabbar";

class App extends Component {

  // store.subsribe 订阅
  render() {
    return (
      <div>
        {/* 其他的内容 */}
        <MRouter>{this.props.isShow && <Tabbar></Tabbar>}</MRouter>
      </div>
    );
  }
}

const mapSateToProps=(state)=>{
    return{
        isShow:state.TabbarShow.show
    }
}
export default connect(mapSateToProps)(App);

/*
 /films ===>Films
 /cinemas ===>Cinemas
 /center ===> Center


 
*/
