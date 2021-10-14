import { createSelector } from "reselect";



const shop = (state) => state.shop;

export const selectShopData = createSelector([shop], (shop) => shop.shopData);

export const selectCollection = (collectionUrlParam) => createSelector([selectShopData],
    (shopData) => shopData[collectionUrlParam]);


export const selectCollectionForPreview = createSelector([selectShopData],
    (shopData)=> Object.keys(shopData).map(key=>shopData[key]))