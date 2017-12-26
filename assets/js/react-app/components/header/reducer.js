import { handleActions } from "redux-actions";

const initialState = {
  menuSlideIn: false,
  menuSlideOut: false
};

export const actions = {
  toggleShowMenu: "TOGGLE_SHOW_MENU"
};

export const actionCreators = {
  toggleShowMenu: () => ({
    type: actions.toggleShowMenu
  })
};

const toggleShowMenu = state => {
  const { menuSlideIn, menuSlideOut } = state;
  if (!menuSlideIn && !menuSlideOut) {
    return {
      ...state,
      menuSlideIn: true,
      menuSlideOut: false
    };
  } else {
    return {
      ...state,
      menuSlideIn: !menuSlideIn,
      menuSlideOut: !menuSlideOut
    };
  }
};

export const handlers = {
  [actions.toggleShowMenu]: toggleShowMenu
};

export default handleActions(handlers, initialState);
