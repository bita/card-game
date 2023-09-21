import { initialGameSettingType } from "@/app/types/gameSetting.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: initialGameSettingType = {
  value: {
    dificultyValue: 4,
    themeValue: "dramatic sky",
  },
};

export const setting = createSlice({
  name: "setting",
  initialState,
  reducers: {
    changeDifficulty: (state, action: PayloadAction<number>) => {
      state.value.dificultyValue = action.payload;
    },
    changeTheme: (state, action: PayloadAction<string>) => {
      state.value.themeValue = action.payload;
    },
  },
});

export const { changeDifficulty, changeTheme } = setting.actions;
export default setting.reducer;
