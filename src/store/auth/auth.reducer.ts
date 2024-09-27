import { createSlice } from '@reduxjs/toolkit';
import { isPendingAction, isRejectedAction } from '../../@types';
import { AuthState } from './auth.types';
import { authActions } from './auth.actions';

const initialState = {
    user: {
        email: '',
        id: 0,
        isAuth: false,
        name: ''
    },
    loading: false,
    error: null,
} satisfies AuthState as AuthState;


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(authActions.fetchAuthorizedUser.fulfilled, (state, action)=>{
            state.loading = false;
            state.user = action.payload;
        })
        builder.addMatcher(isPendingAction, state => {
            state.loading = true;
        });
        builder.addMatcher(isRejectedAction, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export default authSlice.reducer;
