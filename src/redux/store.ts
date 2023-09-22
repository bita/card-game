import { configureStore } from "@reduxjs/toolkit"; 
import settingReducer from "./slices/setting-slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
export const store = configureStore({
    reducer: {
        settingReducer,
    }
})

export type RootSate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootSate> = useSelector