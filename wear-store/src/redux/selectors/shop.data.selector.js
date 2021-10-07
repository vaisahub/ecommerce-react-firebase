import { createSelector } from "reselect";

const shop = (state) => state.shop;

export const selectShopData = createSelector([shop], (shop) => shop.shopData)