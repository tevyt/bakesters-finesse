import { handleActions } from "redux-actions";

const initialState = {
  showMenu: false
};

export const actions = {
  toggleShowMenu: "TOGGLE_SHOW_MENU"
};

export const actionCreators = {
  toggleShowMenu: () => ({
    type: actions.toggleShowMenu
  })
};

const toggleShowMenu = state => ({
  ...state,
  showMenu: !state.showMenu
});

export const handlers = {
  [actions.toggleShowMenu]: toggleShowMenu
};

export default handleActions(handlers, initialState);
