/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { useEffect } from "react";
import { show, hide } from "../redux/actionCreator/TabbarActionCreator";
import { connect } from "react-redux";

function Detail(props) {
  let { hide, show } = props;
  useEffect(() => {
    hide();
    return () => {
      show();
    };
  }, [hide,show]);

  return <div>deteail</div>;
}

const mapDispatchToProps = {
  hide,
  show,
};
export default connect(null, mapDispatchToProps)(Detail);
