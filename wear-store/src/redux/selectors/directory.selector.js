import { createSelector } from "reselect";

const selectMenu = (state) => state.directory;

export const selectMenuList = createSelector([selectMenu], (menu) => menu.menuList)