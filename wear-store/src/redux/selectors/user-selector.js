import { createSelector } from 'reselect'

const getUser = (state) => state.user

export const selectUser = createSelector(
    getUser,
    (user) => user.currentUser
);

export const userSignedIn = createSelector(
    getUser,
    (user) => user.currentUser ? true: false
);