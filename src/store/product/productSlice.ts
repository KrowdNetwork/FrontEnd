/* eslint-disable no-param-reassign */
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface IInfosProductProps {
  imgPath: string;
  description: string;
  value: number;
}

export interface IProductProps {
  product: IInfosProductProps;
}

const initialState: IInfosProductProps = {
  imgPath: "",
  description: "",
  value: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IInfosProductProps>) => {
      state.description = action.payload.description;
      state.imgPath = action.payload.imgPath;
      state.value = action.payload.value;
    },
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
