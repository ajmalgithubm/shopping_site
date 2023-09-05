import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    show: false
}
// show Slice 
const showSlice = createSlice({
    name:'showSlider',
    initialState,
    reducers:{
        changeShow:(state) => {
            state.show = ! state.show
        }
    }
})
// export action changeShow
export const { changeShow} = showSlice.actions;
// export the reducer
export default  showSlice.reducer;