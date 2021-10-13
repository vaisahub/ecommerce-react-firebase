import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
    // masks:1,
    hats:1,
    sneakers:2,
    jackets:3,
    women:4,
    men:5
};

const shop = (state) => state.shop;

export const selectShopData = createSelector([shop], (shop) => shop.shopData);

export const selectCollection =(collectionUrlParam) => createSelector([selectShopData], (shopData) =>shopData.find(data=> data.id === COLLECTION_ID_MAP[collectionUrlParam]));