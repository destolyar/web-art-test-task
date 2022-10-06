import { createSlice } from "@reduxjs/toolkit"
import { UserInterface } from "../../interfaces/User"
import { checkLocalstorage } from "../../utils/checkLocalstorage"


interface AuthState {
    user: UserInterface | null
}

const initialState: AuthState = {
    user: checkLocalstorage()
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { user } = action.payload
            state.user = user
            localStorage.setItem("user", JSON.stringify(user))
        },
        clearUser: (state) => {
            state.user = null
            localStorage.setItem("user", JSON.stringify(null))
        }
    },
  })
  

  export const { setUser, clearUser } = authSlice.actions
  export default authSlice.reducer