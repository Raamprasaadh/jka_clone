import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name:"login",
    initialState:{value:{uName:"",loggedIn:false}},
    reducers:{
        login: (state, action)=>{
            state.value={uName:action.payload.uName, loggedIn:true}
        },
        logout: (state)=>{
            state.value={uName:"", loggedIn:false}
        }
    }
})
export const {login, logout}= loginSlice.actions;
export default loginSlice.reducer;