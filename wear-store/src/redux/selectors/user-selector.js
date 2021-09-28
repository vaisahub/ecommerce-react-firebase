import { createSelector } from 'reselect'

const getUser = (state) => state.currentUser

export const getUserSelectors = createSelector(
    getUser,
    (user) => user.currentUser
);