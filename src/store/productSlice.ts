import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface IInfosProductProps {
  imgPath: string;
  description: string;
  value: number;
}

export interface IProductProps {
  product: IInfosProductProps;
}

const initialState = {
  product: {
    imgPath: "",
    description: "",
    value: 0,
  },
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProductProps>) => {
      // eslint-disable-next-line no-param-reassign
      state.product = action.payload.product;
    },
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
