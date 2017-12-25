import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import View from "./view";
import { actionCreators } from "./reducer";

export const mapStateToProps = state => {
  return {
    showMenu: state.showMenu
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleShowMenu: () => dispatch(actionCreators.toggleShowMenu)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
