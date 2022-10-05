import { createSlice } from "@reduxjs/toolkit";
import { UserInterface } from "../interfaces/User";

export interface authState {

}

const intitalState: authState = {

}

export const authSlice = createSlice({
    name: "auth",
    initialState: intitalState,
    reducers: {

    }
})

export const {  } = authSlice.actions
export default authSlice.reducer