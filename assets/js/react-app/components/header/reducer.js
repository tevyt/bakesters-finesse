import { handleActions } from "redux-actions";

const initialState = {
  showMenu: false
};

const actions = {
  toggleShowMenu: "TOGGLE_SHOW_MENU"
};

export const actionCreators = {
  toggleShowMenu: () => ({
    type: actions.toggleShowMenu
  })
};

export default handleActions(actionCreators, initialState);
