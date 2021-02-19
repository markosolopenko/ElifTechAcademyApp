import { combineReducers } from '@reduxjs/toolkit';
import { banksSlice } from '../features/banksSlice';

export const rootReducer = combineReducers({
    banksSlice: banksSlice.reducer,
});