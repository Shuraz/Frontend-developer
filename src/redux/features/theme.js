import { createSlice } from "@reduxjs/toolkit";
const initilaStateValue ="";

export const userSlice=createSlice({
    name:"theme",
    initialState:{value:initilaStateValue},
    reducers:{
        changeCol:(state, action)=>{
            state.value=action.payload;
        }
    }
})

export const {changeCol} = userSlice.actions;
export default userSlice.reducer;