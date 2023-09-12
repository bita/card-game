import { configureStore } from "@reduxjs/toolkit"; 
import levelReducer from "./slices/level-slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
export const store = configureStore({
    reducer: {
        levelReducer
    }
})

export type RootSate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootSate> = useSelector