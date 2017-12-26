import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import View from "./view";
import { actionCreators } from "./reducer";

export const mapStateToProps = ({ header: state }) => {
  return {
    menuSlideIn: state.menuSlideIn,
    menuSlideOut: state.menuSlideOut
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    toggleShowMenu: () => dispatch(actionCreators.toggleShowMenu())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
