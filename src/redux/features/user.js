import { createSlice } from "@reduxjs/toolkit";

const initilaStateValue ={name:"", age:0, email:""};

export const userSlice=createSlice({
    name:"user1",
    initialState:{value:initilaStateValue},
    reducers:{
        login:(state,action)=>{
            state.value=action.payload;
        },
        logout:(state,action)=>{
            state.value=initilaStateValue;
        }
    }
})

export const {login,logout} = userSlice.actions;
export default userSlice.reducer;